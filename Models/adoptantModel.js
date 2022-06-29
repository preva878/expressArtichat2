

const adoptantModel = (Sequelize, DataTypes) => {
    const Adoptant = Sequelize.define("Adoptant",{
        Image:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Adresse:{
            type:DataTypes.STRING,
            allowNull:false
        },
        CP:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Ville:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ContactMail:{
            type:DataTypes.STRING,
            isEmail:true,
            allowNull:false
        },
        ContactPortable:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Artichats:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Lien:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Note:{
            type:DataTypes.STRING,
            allowNull:true
        },
       NumeroPermis:{
            type:DataTypes.INTEGER,
            allowNull:false
       },
       DatePermis:{
            type:DataTypes.DATEONLY,
            allowNull:false
       },
      
       

    })
    return Adoptant
}

module.exports = adoptantModel