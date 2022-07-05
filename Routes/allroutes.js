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
router.get('/animalin/getAnimalIn/:id',AnimalInController.getOneAnimalIn)
router.put('/animalin/getAnimalInUp/:id',AnimalInController.updateAnimalIn)

/***************************/
/*          AnimalOut      */
/***************************/

router.post('/animalout/addAnimalOut',AnimalOutController.upload,AnimalOutController.addAnimalOut)
router.get('/animalout/getAllAnimalOuts',AnimalOutController.getAllAnimalOut)
router.get('/animalout/getAnimalOut/:id',AnimalOutController.getOneAnimalOut)
router.put('/animalOut/getAnimalOutup/:id',AnimalOutController.updateAnimalOut)

/*********************** */ 
/*       adoptant        */
/*************************/

router.post('/adoptant/addAdoptant',AdoptantController.upload,AdoptantController.addAdoptant)
router.get('/adoptant/getAdoptants',AdoptantController.getAllAdoptants)
router.get('/adoptant/getadoptant/:id',AdoptantController.getOneAdoptant)
router.put('/adoptant/getadoptantup/:id',AdoptantController.updateAdoptant)


/*********************************/
/**       equipements            */
/******************************* */

router.post('/eqp/postEquipement',EquipementController.upload,EquipementController.addEquipement)
router.get('/eqp/getEquipements',EquipementController.getAllEquipements)
router.get('/eqp/getequipement/:id',EquipementController.getOneEquipement)
router.put('/eqp/getequipementup/:id',EquipementController.updateEquipement)

/*******************************/
/*      famille accueil        */
/*******************************/
router.post('/fa/addFamilleAccueil',FamilleAcceuilController.upload,FamilleAcceuilController.addFamilleAccueil)
router.get('/fa/getAllFamilleAccueil',FamilleAcceuilController.getAllFamilleAccueil)
router.get('/fa/getfamilleaccueil/:id',FamilleAcceuilController.getOneFamilleAccueil)
router.put('/fa/getfamilleaccueilup/:id',FamilleAcceuilController.updateFa)


/*******************************/
/**         Produit            */
/*******************************/
router.post('/product/addProduct',ProductController.upload,ProductController.addProduct)
router.get ('/product/allProducts',ProductController.getAllProducts)
router.get('/product/getproduct/:id',ProductController.getOneProduct)
router.put('/product/getproductup/:id',ProductController.updateProduct)


/***********************************/
/**         Sponsor                */
/********************************* */

router.post('/sponsor/addsponsor',SponsorController.upload,SponsorController.addSponsor)
router.get('/sponsor/getAllSponsor',SponsorController.getAllSponsor)
router.get('/sponsor/getsponsor/:id',SponsorController.getOneSponsor)
router.put('/sponsor/getsponsorup/:id',SponsorController.updateSponsor)

/***********************************/
/**           Veterinaires         */
/** ****************************** */

router.post('/veto/addveterinaire',VeterinaireController.upload,VeterinaireController.addVeterinaire)
router.get('/veto/getAllVeterinaires',VeterinaireController.getAllVeterinaires)
router.get('/veto/getveterinaire/:id',VeterinaireController.getOneVeterinaire)
router.put('/veto/getveterinaireup/:id',VeterinaireController.updateVeterinaire)


/**********************************/
/**         User et role          */
/******************************* */

const { verifySignUp } = require("../middle/signup");
const controller = require("../controllers/AauthController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);
};






module.exports = router
