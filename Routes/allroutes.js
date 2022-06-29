// import controller

const router = require('express').Router()

const AdoptantController = require('../Controllers/AdoptantController')
const AnimalInController = require ('../Controllers/AnimalInController')
const AnimalOutController = require ('../Controllers/AnimalOutController')
const EquipementController = require ('../Controllers/EquipementController')
const FamilleAcceuilController = require ('../Controllers/FamilleAccueilController')
const ProductController = require ('../Controllers/ProductController')
const SponsorController = require ('../Controllers/SponsorController')
const VeterinaireController = require('../Controllers/VeterinaireController')

/***************************/
/*          AnimalIn       */
/***************************/

router.post('/animalin/addAnimalIn',AnimalInController.upload,AnimalInController.AddAnimalIn)
router.get('/animalin/getAllAnimalIns', AnimalInController.getAllAnimalIns)
router.get('/getAnimalIn/:id',AnimalInController.getOneAnimalIn)

/***************************/
/*          AnimalOut      */
/***************************/

router.post('/animalout/addAnimalOut',AnimalOutController.upload,AnimalOutController.addAnimalOut)
router.get('/animalout/getAllAnimalOuts',AnimalOutController.getAllAnimalOut)
router.get('/animalout/getAnimalOut/:id',AnimalOutController.getOneAnimalOut)


/*********************** */ 
/*       adoptant        */
/*************************/

router.post('/adoptant/addAdoptant',AdoptantController.upload,AdoptantController.addAdoptant)
router.get('/adoptant/getAdoptants',AdoptantController.getAllAdoptants)
router.get('/adoptant/getadoptant/:id',AdoptantController.getOneAdoptant)

/*********************************/
/**       equipements            */
/******************************* */

router.post('/eqp/postEquipement',EquipementController.upload,EquipementController.addEquipement)
router.get('/eqp/getEquipements',EquipementController.getAllEquipements)
router.get('/eqp/getequipement/:id',EquipementController.getOneEquipement)

/*******************************/
/*      famille accueil        */
/*******************************/
router.post('/fa/addFamilleAccueil',FamilleAcceuilController.upload,FamilleAcceuilController.addFamilleAccueil)
router.get('/fa/getAllFamilleAccueil',FamilleAcceuilController.getAllFamilleAccueil)
router.get('/fa/getfamilleaccueil/:id',FamilleAcceuilController.getOneFamilleAccueil)

/*******************************/
/**         Produit            */
/*******************************/
router.post('/product/addProduct',ProductController.upload,ProductController.addProduct)
router.get ('/allProducts',ProductController.getAllProducts)
router.get('/getproduct/:id',ProductController.getOneProduct)


/***********************************/
/**         Sponsor                */
/********************************* */

router.post('/sponsor/addsponsor',SponsorController.upload,SponsorController.addSponsor)
router.get('/sponsor/getAllSponsor',SponsorController.getAllSponsor)
router.get('/sponsor/getsponsor/:id',SponsorController.getOneSponsor)

/***********************************/
/**           Veterinaires         */
/** ****************************** */

router.post('/veto/addveterinaire',VeterinaireController.upload,VeterinaireController.addVeterinaire)
router.get('/veto/getAllVeterinaires',VeterinaireController.getAllVeterinaires)
router.get('/veto/getveterinaire/:id',VeterinaireController.getOneVeterinaire)

module.exports = router
