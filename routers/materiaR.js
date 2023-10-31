const express = require('express')
const Materias = require ("../models/materia.js")
const { ValidationError } = require('sequelize')

const router = express.Router()

router.get('/materias', async (req, res) => {
    try {
        const materias = await Materias.findAll()
        res.status(200).json(materias) 
    } catch(error){
        res.status(500).json({ mensaje: 'Error del servidor: ' + error.message })

    }
})

router.get('/materias/:id', async (req, res) => {
    try {
        const id = req.params.id
        const found = await Materias.findOne({ where: { id: id } })
        if (found) {
            res.json(found)
        } else {
            res.status(404).send({ mensaje: 'No existe la materia' })
        }
        console.log(found)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error  del servidor: ' + error.message})
    }
})

router.post('/materias', async (req, res) => {
    try {
        const data = req.body
        const mate = await Materias.create({
            id: data.id,
            nombre: data.nombre,
            anio_curricular: data.anio_curricular,
            fec_implementacion: data.fec_implementacion
        })
        res.status(201).json(mate)
    } catch (error) {
        res.status(400).json({mensaje: 'No se pudo agregar la materia: ' + error.message})
    }
})

router.put('/materias/:id', async (req, res) => {
    try {
        const mateId = req.params.id
        const found = await Materias.findOne({ where: { id: mateId } })

        if (!found){
            res.status(404).json({ mensaje: 'Materia no encontrada' })
        } else{
            const data = req.body
            found.id = data.id
            found.nombre = data.nombre
            found.anio_curricular = data.anio_curricular
            found.fec_implementacion = data.fec_implementacion

            await found.save()

            res.status(204).json({ mensaje: 'Se pudo actualizar correctamente' })
        }


    } catch (error) {
        res.status(500).json({ message: 'No se pudo actualizar' + error.message})
    }
})


router.delete('/materias/:id', async (req, res) =>{
    try {
        const userId = req.params.id
        await Materias.destroy({ where: {id: userId}})
        res.status(204).json({mensaje: 'Materia eliminada exitosamente'})
    } catch(error){
        res.status(500).json({ mensaje: 'Error del servidor: ' + error.message })
    }

})


module.exports = {router}