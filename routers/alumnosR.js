const express = require('express')
const Alumnos = require('../models/alumno.js')

const router = express.Router()

router.get('/alumnos', async (req, res) => {
    try {
        const alumnos = await Alumnos.findAll()
        res.json(alumnos)        
    } catch(error){
        res.status(500).json({mensaje: 'Error del servidor: ' + error.message})
    }

})

router.get('/alumnos/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const found = await Alumnos.findOne({ where: { id: userId } })

        if (found) {
            res.json(found)
        } else {
            res.status(404).send({ mensaje: 'Alumno no encontrado'})
        }
        console.log(found)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error Servidor: ' + error.message })
    }
})

router.post('/alumnos', async (req, res) => {
    try {
        const data = req.body
        const user = await Alumnos.create({
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            documento: data.documento,
            fec_nacimiento: data.fec_nacimiento
        })
        res.status(201).json(user)
    } catch (error){
        res.status(400).json({mensaje: 'No se pudo agregar al alumno' + error.message})
    }
})

router.put('/alumnos/:id', async (req, res) => {
        try{
            const userId = req.params.id
            const found = await Alumnos.findOne({ where: { id: userId } })

            if (!found){
                res.status(404).json({mensaje: 'Alumno no encontrado'})
            } else {
                const data = req.body
                found.nombre = data.nombre
                found.apellido = data.apellido
                found.documento = data.documento
                found.fec_nacimiento = data.fec_nacimiento

                await found.save()

                res.status(204).json({mensaje: 'Se pudo actualizar correctamente'})
            }
            

        } catch (error){
            res.status(500).json({ message: 'No se pudo actualizar' + error.message})
        }
})


router.delete('/alumnos/:id', async (req, res) =>{
    try {
        const userId = req.params.id
        await Alumnos.destroy({ where: {id: userId}})
        res.status(204).json({mensaje: 'Alumno eliminado exitosamente'})
    } catch(error){
        res.status(500).json({ mensaje: 'Error del servidor: ' + error.message })
    }

})

module.exports = {router}
