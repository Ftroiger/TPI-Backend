const express = require("express");
const Alumnos = require('../models/alumno.js')

const router = express.Router()

router.get('/alumnos', async (req, res) => {
    const alumnos = await Alumnos.findAll()
    res.json(alumnos)
})

router.get('/alumnos/:id', async (req, res) => {
    try {
        const id = req.params.id
        const found = await Alumnos.findOne({ where: { id: id } })
        if (found) {
            res.json(found)
        } else {
            res.status(404).send({ mensaje: 'Alumno no encontrado'})
        }
        console.log(found)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error Servidor!' })
    }
})

/*router.post('/loginalumno', async(req, res) => {
    const data = req.body
    const user = await Alumnos.findOne({
        where: {
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            documento: data.documento,
            fec_nacimiento: data.fec_nacimiento
        }
    })
})*/
module.exports = {router}