const Sponsor = (Sequelize,DataTypes) => {
    const Sponsor = Sequelize.define("Sponsor",{
        image:{
            type:DataTypes.STRING
        },
        nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        materiel:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dateEntre:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        quantite:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        types:{
            type:DataTypes.STRING,
            allowNull:false
        },
        adresse:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cp:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        ville:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contactMail:{
            type:DataTypes.STRING,
            allowNull:true
        },
        contactTel:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
       
    })
    return Sponsor
}
module.exports = Sponsor