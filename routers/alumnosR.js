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
        const found = await Alumno.findOne({ where: { id: id } })
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