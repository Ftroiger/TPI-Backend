const express = require("express");
const Maestros = require('../models/maestro.js')

const router = express.Router()

router.get('/maestros', async (req, res) => {
    const maestros = await Maestros.findAll()
    res.json(maestros)
})

router.get('/maestros/:id', async (req, res) => {
    try {
        const id = req.params.id
        const found = await Maestros.findOne({ where: { id: id } })
        if (found) {
            res.json(found)
        } else {
            res.status(404).send({ mensaje: 'Maestro no encontrado'})
        }
        console.log(found)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error Servidor!' })
    }
})

router.post('/loginmaestro', async(req, res) => {
    const data = req.body
    const user = await Maestros.findOne({
        where: {
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            documento: data.documento,
            fec_nacimiento: data.fec_nacimiento
        }
    })
})

module.exports = {router}