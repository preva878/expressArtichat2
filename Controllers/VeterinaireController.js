const db = require('../Models')
const multer = require('multer')
const path = require ('path')
const Veterinaire = db.Veterinaire

//1 add veterinaire

const addVeterinaire = async (req,res) => {
    let info = {
        Images:req.file.path,
        Nom:req.body.Nom,
        Adresse:req.body.Adresse,
        Ville:req.body.Ville,
        CP:req.body.CP,
        DateIntervention:req.body.DateIntervention,
        Prix:req.body.Prix,
        TypeIntervention:req.body.TypeIntervention,
        Artichats:req.body.Artichats,
        Notes:req.body.Notes
    }
    console.log(info)
    const veterinaireadd = await Veterinaire.create(info)
    res.status(200).send(veterinaireadd)
    console.log(veterinaireadd)
}

//2. get all
const getAllVeterinaires = async (req,res) => {
    let veterinaires = await Veterinaire.findAll({})
    console.log(veterinaires);
    res.status(200).send(veterinaires)
}

// 3 .get one by id

const getOneVeterinaire = async (req,res) => {
    let id = req.params.id
    let veterinairid = await Veterinaire.findOne({where:{id:id}})
    res.status(200).send(veterinairid)
}

//4.update veterinaire
const updateVeterinaire = async (req,res) => {
    let id = req.params.id
    const veterinaireup = await Veterinaire.update(req.body,{where:{id:id}})
    res.status(200).send(veterinaireup)
}

//6. upload les images ds leur dossier
const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/Veto')
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname))

        
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: '10000000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('format accepter jpeg,jpg,png, et gif')
    }
}).single('Images')

module.exports = {
    addVeterinaire,
    getAllVeterinaires,
    getOneVeterinaire,
    upload,
    updateVeterinaire,
}