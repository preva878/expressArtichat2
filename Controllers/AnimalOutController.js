const db = require ('../Models')

//image
const multer = require('multer')
const path = require ('path')

//creation
const AnimalOut = db.AnimalOut

//1. add Animalout

const addAnimalOut = async(req,res) => {
    
    let info = {
        Image:req.file.path,
        Nom: req.body.Nom,
        NomDefinitif:req.body.NomDefinitif,
        SexeDefini:req.body.SexeDefini,
        Particularite:req.body.Particularite,
        Age:req.body.Age,
        Poids:req.body.Poids,
        Etat:req.body.Etat,
        Vaccin:req.body.Vaccin,
        DateVaccin:req.body.DateVaccin,
        Puce:req.body.Puce,
        Sterilisation:req.body.Sterilisation,
        DateSterilisation:req.body.DateSterilisation,
        Adoptant:req.body.Adoptant,
        DateDepart:req.body.DateDepart,
    }
    console.log(info)
    const animalout = await AnimalOut.create(info)
    res.status(200).send(animalout)
    console.log(animalout)
}

//2. get all animalout

const getAllAnimalOut = async(req,res) => {
    let animalOuts = await AnimalOut.findAll({})
    console.log(animalOuts)
    res.status(200).send(animalOuts)
}

//3.get one animalout
const getOneAnimalOut = async (req,res) => {
    let id = req.params.id
    let animalOut = await AnimalOut.findOne({where:{id:id}})
    res.status(200).send(animalOut)
}

//upload image

const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/AnimalOut')
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname))

        
    }
})

const upload = multer({
    storage: storage,
    limits:{fileSize:'1000000000'},
    fileFilter: (req, file,cb) => {
        const fileTypes= /jpeg|jpg|png|gif/
        const mimeType= fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null,true)
        }
        cb('format accepter jpeg,jpg,png, et gif')
    }
}).single('Image')

module.exports = {
    addAnimalOut,
    getAllAnimalOut,
    upload,
    getOneAnimalOut,
}