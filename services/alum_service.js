import { Alumno } from "../models/alumno.js"

async function  getAll(){
    return await Alumno.findAll({})
}

export default {
    getAll
}