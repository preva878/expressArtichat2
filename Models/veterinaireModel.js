const VeterinaireModel = (Sequelize,DataTypes) => {
    const Veterinaire = Sequelize.define("Veterinaire",{
        Images:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Nom:{
            type:DataTypes.STRING,
            allowNull: true
        },
        Adresse:{
            type:DataTypes.STRING,
            allowNull: false
        },
        Ville:{
            type:DataTypes.STRING,
            allowNull: false
        },
        CP:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        DateIntervention:{
            type:DataTypes.DATEONLY,
            allowNull: false
        },
        Prix:{
            type:DataTypes.DECIMAL,
            allowNull: false
        },
        TypeIntervention:{
            type:DataTypes.STRING,
            allowNull: false
        },
        Artichats:{
            type:DataTypes.STRING,
            allowNull: false
        },
        Notes:{
            type:DataTypes.STRING,
            allowNull: false
        },
    })
    return Veterinaire
}
module.exports = VeterinaireModel