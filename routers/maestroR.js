const express = require("express");
const Maestros = require('../models/maestro.js')

const router = express.Router()

router.get('/maestros', async (req, res) => {
    try {
        const maestros = await Maestros.findAll()
        res.status(200).json(maestros) 
    } catch (error){
        res.status(500).json({ mensaje: 'Error del Servidor: ' + error.message })

    }

})

router.get('/maestros/:id', async (req, res) => {
    try {
        const id = req.params.id
        const found = await Maestros.findOne({ where: { id: id } })
        if (found) {
            res.json(found)
        } else {
            res.status(404).send({ mensaje: 'Maestro no encontrado' })
        }
        console.log(found)
    } catch (error) {
        res.status(500).send({ mensaje: 'Error Servidor: ' + error.message })
    }
})

router.post('/maestros', async(req, res) => {
    try {
        const data = req.body
        const user = await Maestros.create({
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            documento: data.documento,
            fec_nacimiento: data.fec_nacimiento
        })
        res.status(201).json(user)
    } catch(error){
        res.status(400).json({mensaje: 'No se pudo agregar maestro: ' + error.message })
    }
})

router.put('/maestros/:id', async (req, res) => {
    try{
        const userId = req.params.id
        const found = await Maestros.findOne({ where: { id: userId } })

        if (!found){
            res.status(404).json({mensaje: 'Maestro no encontrado'})
        } else {
            const data = req.body
            found.id = data.id
            found.nombre = data.nombre
            found.apellido = data.apellido
            found.documento = data.documento
            found.fec_nacimiento = data.fec_nacimiento

            await found.save()

            res.status(204).json({mensaje: 'Se pudo actualizar correctamente'})
        }
        

    } catch (error){
        res.status(500).json({ mensaje: 'No se pudo actualizar' + error.message})
    }
})


router.delete('/maestros/:id', async (req, res) =>{
try {

    const userId = req.params.id
    await Maestros.destroy({ where: {id: userId}})

    res.status(204).json({mensaje: 'Maestro eliminado exitosamente'})

} catch(error){
    res.status(500).json({ mensaje: 'Error del servidor: ' + error.message })
}

})

module.exports = {router}
