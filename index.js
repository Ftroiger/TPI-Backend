const express = require('express')

const alumnos = require ("./routers/alumnosR.js")
const materias = require("./routers/materiaR.js")

const app = express()
app.use(express.json())
const PORT = 3000
app.use('/api', alumnos.router)
app.use('/api', materias.router)

app.listen(PORT, async() => {
    console.log(`App listening on port ${PORT}`)  
})

