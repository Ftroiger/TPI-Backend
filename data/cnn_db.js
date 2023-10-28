const Sequelize = require("sequelize") ;

const sequelize = new Sequelize("Base.sqlite","","",{
    dialect: "sqlite",
    storage: "./data/Base.sqlite",
})

module.exports = sequelize