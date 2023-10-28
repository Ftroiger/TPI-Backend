const DataTypes = require("sequelize");
const sequelize = require("../data/cnn_db.js");

export const Alumno = sequelize.define("Maestros", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0,
  },
  documento: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 0,
  },
  fec_nacimiento: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0,
  },
},
{
    timestamps: false,
    sequelize
}
);