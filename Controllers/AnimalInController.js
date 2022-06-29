const db = require ('../Models')

//image
const multer = require('multer')
const path = require ('path')

//creation
const AnimalIn = db.AnimalIn

//1.add animalIn

const AddAnimalIn =  async(req,res) => {

    let info = {
        Image:req.file.path,
        Nom: req.body.Nom,
        currentSexe: req.body.currentSexe,
        Age: req.body.Age,
        Poids: req.body.Poids,
        DateEntree: req.body.DateEntree ,
        Etat: req.body.Etat,
        Traitement: req.body.Traitement ,
        FamilleAccueil: req.body.FamilleAccueil,
        Note:req.body.Note,
    }
    console.log(info)
    const animalIn = await AnimalIn.create(info)
    res.status(200).send(animalIn)
    console.log(animalIn)
}

//2. get all animalIns

const getAllAnimalIns = async (req,res) => {
    let animalIns = await AnimalIn.findAll({})
    console.log(animalIns)
    res.status(200).send(animalIns)
}

//3. get one animalIn

const getOneAnimalIn = async (req,res) => {
    let id = req.params.id
    let animalIn = await AnimalIn.findOne({where:{id:id}})
    res.status(200).send(animalIn)
}
//4.delete (ne seras surement pas utilise mais au cas ou)

const deleteAnimalIn = async (req,res) => {
    let id = req.params.id
    await AnimalIn.destroy({where:{id:id}})
    res.stauts(200).send(`artichats : ${Nom} supprimer`)
}

//5. update par id
const updateAnimalIn = async (req,res) => {
    let id = req.params.id
    const animalin = await AnimalIn.update(req.body,{where:{id:id}})
    res.status(200).send(animalin)
}

//6. upload les images ds leur dossier
const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/AnimalIn')
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname))

        
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('format accepter jpeg,jpg,png, et gif')
    }
}).single('Image')

module.exports = {
    AddAnimalIn,
    getAllAnimalIns,
    getOneAnimalIn,
    deleteAnimalIn,
    updateAnimalIn,
    upload,
}