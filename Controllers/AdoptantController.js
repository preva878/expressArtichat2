const db = require ('../Models')

//image
const multer = require('multer')
const path = require('path')

//creation
const Adoptant = db.Adoptant

//1. on add pour le formulaire

const addAdoptant = async(req,res) => {

    let info = {
        Image:req.file.path,
        Nom:req.body.Nom,
        Adresse:req.body.Adresse,
        CP:req.body.CP,
        Ville:req.body.Ville,
        ContactMail:req.body.ContactMail,
        ContactPortable:req.body.ContactPortable,
        Artichats:req.body.Artichats,
        Lien:req.body.Lien,
        Note:req.body.Note,
        NumeroPermis:req.body.NumeroPermis,
        DatePermis:req.body.DatePermis,
        

    }
    console.log(info)
    const adoptant = await Adoptant.create(info)
    res.status(200).send(adoptant)
    console.log(adoptant)
}

//2. get all adoptants

const getAllAdoptants = async (req,res) => {

    let adoptants = await Adoptant.findAll({})
    console.log(adoptants);
    res.status(200).send(adoptants)

}

//3. get one by id

const getOneAdoptant = async (req,res) => {
    let id = req.params.id
    let adoptantid = await Adoptant.findOne({where:{id:id}})
    res.status(200).send(adoptantid)
}



//.pour le multer

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./Images/Adoptants')
    },
    filename:(req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage,
    limits: {fileSize:'10000000'},
    fileFilter:(req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|pdf/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null,true)
        }
        cb("format jpeg,jpg,png ou gif accepté pas d'autres")
    }
}).single('Image')

module.exports={
    addAdoptant,
    getAllAdoptants,
    getOneAdoptant,
    upload,
}