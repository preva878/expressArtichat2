const db = require ('../Models')

//image
const multer = require('multer')
const path = require ('path')

//creation
const Equipement = db.Equipement

//1. add equipement

const addEquipement = async (req,res) => {
    
    let info = {
        Image:req.file.path,
        Nom: req.body.Nom,
        Types:req.body.Types,
        Quantite:req.body.Quantite,
        DateEntree:req.body.DateEntree,
        DatePeremption:req.body.DatePeremption,
        Etats:req.body.Etats

    }
    console.log(info)
    const equipement = await Equipement.create(info)
    res.status(200).send(equipement)
    console.log(equipement)
}

//2. get all equipements

const getAllEquipements = async (req,res) => {
    let equipements = await Equipement.findAll({})
    console.log(equipements)
    res.status(200).send(equipements)
}

//3. get one by id

const getOneEquipement = async(req,res) => {
    let id = req.params.id
    let equipement = await Equipement.findOne({where:{id:id}})
    res.status(200).send(equipement)
}

//4. update equipement
const updateEquipement = async (req,res) => {
    let id = req.params.id
    const equipementup = await Equipement.update(req.body,{where:{id:id}})
    res.status(200).send(equipementup)
}

//upload image ds dossier

const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/Equipements')
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
    addEquipement,getAllEquipements,getOneEquipement,upload,updateEquipement
}