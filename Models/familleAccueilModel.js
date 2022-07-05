const FamilleAccueilModel = (Sequelize,DataTypes) => {
    const FamilleAccueil = Sequelize.define('FamilleAccueil',{
      

        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Adresse:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        CP:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Ville:{
            type:DataTypes.STRING,
            allowNull:false
        },
        EquipementsFournit:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Artichats:{ 
            type:DataTypes.STRING,
            allowNull:false 
        },
        Notes:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Contacttel:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        ContactMail:{
            type:DataTypes.STRING,
            allowNull:true
        }
       
    })
    return FamilleAccueil
}
module.exports = FamilleAccueilModel