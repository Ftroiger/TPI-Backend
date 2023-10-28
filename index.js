import { sequelize } from "./data/cnn_db.js"
import  service  from "./services/alum_service.js"

(async function main(){
    //await sequelize.sync()
    //    .then(()=>{console.log('Base de productos sincronizada')})
    //    .catch(()=>{console.log('Error al sicronizar la base')})
    //
    const lst = await service.getAll()
    console.log(lst)
})()
