

const ProductModel = (Sequelize,DataTypes) => {
    const Product = Sequelize.define("Product",{

        Image:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Prix:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        SellWay:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })
    return Product
}
module.exports=ProductModel