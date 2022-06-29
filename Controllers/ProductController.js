const db = require('../Models')

// image Upload
const multer = require('multer')
const path = require('path')


//creation

const Product = db.Products

//1 create product

const addProduct = async (req,res) => {

    let info = {
        Image: req.file.path ,
        Nom: req.body.Nom ,
        Prix: req.body.Prix ,
        Description: req.body.Description ,
        SellWay: req.body.SellWay ,

    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

// 2 .get all products

const getAllProducts = async (req,res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)
}

// 3 .get one by id

const getOneProduct = async (req,res) => {
    let id = req.params.id
    let productid = await Product.findOne({where:{id:id}})
    res.status(200).send(productid)
}

// upload image

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images/Products')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
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
}).single('Image')

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    upload
}