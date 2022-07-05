const db = require ('../Models')
const Sponsor = db.Sponsor
const multer = require('multer')
const path = require ('path')
//1 add sponsor

const addSponsor = async (req,res) => {
    let info ={
        image:req.file.path,
        nom:req.body.nom,
        materiel:req.body.materiel,
        dateEntre:req.body.dateEntre,
        quantite:req.body.quantite,
        types:req.body.types,
        adresse:req.body.adresse,
        cp:req.body.cp,
        ville:req.body.ville,
        contactTel:req.body.contactTel,
    }
    console.log(info)
    const sponsor = await Sponsor.create(info)
    res.status(200).send(sponsor)
    console.log(sponsor)
}

//2. get all sponsor

const getAllSponsor = async (req,res) => {
    let sponsors = await Sponsor.findAll({})
    console.log(sponsors)
    res.status(200).send(sponsors)
}
//3. get by id

 const getOneSponsor = async (req,res) => {
     let id = req.params.id
     let sponsorid = await Sponsor.findOne({where:{id:id}})
     res.status(200).send(sponsorid)
}
//4.update sponsor
const updateSponsor = async (req,res) => {
    let id = req.params.id
    const sponsorup = await Sponsor.update(req.body,{where:{id:id}})
    res.status(200).send(sponsorup)
}

//6. upload les images ds leur dossier
const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/Sponsor')
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname))

        
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: '100000000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('format accepter jpeg,jpg,png, et gif')
    }
}).single('image')
module.exports = {
    addSponsor,
    getAllSponsor,
     getOneSponsor,
     upload,
     updateSponsor,
}