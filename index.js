const express = require('express')

const alumnos = require ("./routers/alumnosR.js")
const materias = require("./routers/materiaR.js")
const maestros = require("./routers/maestroR.js")

const app = express()
app.use(express.json())
const PORT = 3000

app.use('/api', alumnos.router)
app.use('/api', materias.router)
app.use('/api', maestros.router)

if(require.main === module){
    app.listen(PORT, async() => {
        console.log(`App listening on port ${PORT}`)
    })
}

module.exports = app;
