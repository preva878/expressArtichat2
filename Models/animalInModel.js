


module.exports = (Sequelize,DataTypes) => {
    const AnimalIn = Sequelize.define("AnimalIn",{
        Image:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        currentSexe:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Age:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        Poids:{
            type:DataTypes.DECIMAL,
            allowNull:false

        },
        DateEntree:{
            type:DataTypes.DATEONLY,
            
            allowNull:false
        },
        Etat:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Traitement:{
            type:DataTypes.STRING,
            allowNull:false

        },
        FamilleAccueil:{
            type:DataTypes.STRING,
            allowNull:true

        },
        Note:{
            type:DataTypes.STRING,
            allowNull:true
        },
    })
    return AnimalIn
}