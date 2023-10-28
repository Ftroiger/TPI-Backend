import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("Base.sqlite","","",{
    dialect: "sqlite",
    storage: "./data/Base.sqlite",
})