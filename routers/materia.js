const Materia = require ("../models/materia.js")
const express = require('express')

const router = express.Router()
router.get('/materias', async (req, res) => {
    const materias = await Materia.findAll()
    res.json(materias)
})

router.get('/materias/:id', async (req, res) => {
    try {
        const id = req.params.id
        const found = await Materia.findOne({ where: { id: id } })
        if (found) {
            res.json(found)
        } else {
            res.status(404).send({ mensaje: 'No existe la materia' })
        }
        console.log(found)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error del servidor' })
    }
})

router.post('/materias', async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const materia = await Materia.create(data)
        res.json(materia)

    } catch (error) {
        res.status(500).send({ mensaje: 'Error del servidor' })
    }
})

module.exports = {router}