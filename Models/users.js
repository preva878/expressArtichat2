


const USER = (Sequelize,DataTypes) => {
    const User = Sequelize.define("User",{
        Login:{
            type:DataTypes.STRING
        },
        Password:{
            type:DataTypes.STRING
        },
        Mot:{
            type:DataTypes.STRING
        },
        Role:{
            type:DataTypes.STRING
        }
    })
    return User
}

    
module.exports=USER