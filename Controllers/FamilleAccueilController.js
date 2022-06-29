const db = require('../Models')

//creation
const FamilleAccueil = db.FamilleAccueil
const multer = require('multer')
const path = require ('path')
//1. add les famille accueil

const addFamilleAccueil = async (req,res) => {
    
    let info = {
       
        Nom:req.body.Nom,
        Adresse:req.body.Adresse,
        CP:req.body.CP,
        Ville:req.body.Ville,
        EquipementsFournit:req.body.EquipementsFournit,
        Artichats:req.body.Artichats,
        Notes:req.body.Notes

    }
    console.log(info)
    const familleaccueil = await FamilleAccueil.create(info)
    res.status(200).send(familleaccueil)
    console.log(familleaccueil)
}

//2. get all FA

const getAllFamilleAccueil = async (req,res) => {
    let familleaccueils = await FamilleAccueil.findAll({})
    console.log(familleaccueils)
    res.status(200).send(familleaccueils)
}

//3.get fa by id

const getOneFamilleAccueil = async (req,res) => {
    let id = req.params.id
    let fa = await FamilleAccueil.findOne({where:{id:id}})
    res.status(200).send(fa)
}
//6. upload les images ds leur dossier
const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/Fa')
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
    addFamilleAccueil,
    getAllFamilleAccueil,
    getOneFamilleAccueil,
    upload,
}