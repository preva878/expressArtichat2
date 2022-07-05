const dbConfig = require('../config/db.config');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connection ok apres redemarage sur le port 8585')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize

//db.sequelize.sync({ alter: true }).then(() => {console.log(`resync done apres force true`)})

db.Adoptant = require ('./adoptantModel')(sequelize,DataTypes)
db.AnimalIn = require ('./animalInModel')(sequelize,DataTypes)
db.AnimalOut = require ('./animalOutModel')(sequelize,DataTypes)
db.Equipement = require ('./equipementModel')(sequelize,DataTypes)
db.FamilleAccueil = require ('./familleAccueilModel')(sequelize,DataTypes)
db.Products = require('./productModel.js')(sequelize, DataTypes)
db.Sponsor = require ('./sponsorModel')(sequelize,DataTypes)
db.Veterinaire = require ('./veterinaireModel')(sequelize,DataTypes)

db.USER = require ('./users')(sequelize,DataTypes)
db.ROLES = require ('./roles')(sequelize,DataTypes)
/******************/
/****Relations*****/
/******************/
db.AnimalIn.belongsToMany(db.FamilleAccueil,{through:'AnimalInFA'});
db.FamilleAccueil.belongsToMany(db.AnimalIn,{through:'AnimalInFA'});

db.AnimalIn.belongsToMany(db.Veterinaire, {through:'AnimalInVeto'});
db.Veterinaire.belongsToMany(db.AnimalIn, {through:'AnimalInVeto'});

db.AnimalOut.belongsToMany(db.FamilleAccueil,{through:'AnimalOutFA'});
db.FamilleAccueil.belongsToMany(db.AnimalOut,{through:'AnimalOutFA'});

db.AnimalOut.belongsToMany(db.Veterinaire, {through:'AnimalOutVeto'});
db.Veterinaire.belongsToMany(db.AnimalOut, {through:'AnimalOutVeto'});

//relations equipement famille accueil et sponsor equipement

db.Equipement.belongsToMany(db.FamilleAccueil,{through:'equipementFA'});
db.FamilleAccueil.belongsToMany(db.Equipement,{through:'equipementFA'});

db.Sponsor.belongsToMany(db.Equipement,{through:'EquipSponsor'});
db.Equipement.belongsToMany(db.Sponsor,{through:'EquipSponsor'});

//relation one to many

//db.AnimalOut.belongsTo(db.Adoptant);
db.Adoptant.hasMany(db.AnimalOut);

//role et user
db.ROLES.belongsToMany(db.USER, { through: "user_roles" });
db.USER.belongsToMany(db.ROLES, { through: "user_roles" });






module.exports= db