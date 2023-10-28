const DataTypes = require ("sequelize");
const sequelize = require("../data/cnn_db.js");

const Materia = sequelize.define("Materias", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anio_curricular: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fec_implementacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},
{
    timestamps: false,
    sequelize
}
);

module.exports = Materia