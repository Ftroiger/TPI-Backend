const express = require('express')

const app = express()
const puerto = 3001

const alumnosRouter = require('./routers/alumnosR.js')
app.use(alumnosRouter)

app.get('/', (req,res) => {
    res.send('hola')
})

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`)
})
s