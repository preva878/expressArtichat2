


const ROLES = (Sequelize,DataTypes) => {
    const Roles = Sequelize.define("Roles",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        Nom:{
            type:DataTypes.STRING
        },
    })
    return Roles
}

    
module.exports=ROLES