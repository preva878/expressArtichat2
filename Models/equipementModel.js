const EquipementModel = (Sequelize,DataTypes) => {
    const Equipements = Sequelize.define('Equipements',{

        Image:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Types:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Quantite:{
            type:DataTypes.STRING
        },
        DateEntree:{
            type:DataTypes.DATEONLY
        },
        DatePeremption:{
            type:DataTypes.DATEONLY
        },
        Etats:{
            type:DataTypes.STRING,
            allowNull:false
        },

    })
    return Equipements
}
module.exports = EquipementModel