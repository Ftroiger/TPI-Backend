/*const express = require('express')

const app = express()
const puerto = 3001

const alumnosRouter = require('./routers/alumnosR.js')
app.use(alumnosRouter)

app.get('/', (req,res) => {
    res.send('hola')
})

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`)
})*/
import { sequelize } from "./data/cnn_db.js"
import  Alumno  from "./routers/alumnosR.js"

const cors = require('cors');
const express = require("express");

// crear servidor
const app = express();

// Para poder leer json en el body
app.use(express.json());

app.use(cors());

// Crear base si no existe
require("./base-orm/sqlite-init");

const alumnoRouter = require("./routers/alumnosR");
app.use('/', alumnoRouter);

const materiaRouter = require("./routes/Empleado");
app.use(materiaRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
