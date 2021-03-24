/********************************************************************************
 *  Importaciones  Configuración de la Base de Datos 
 ********************************************************************************/
const mongoose = require('mongoose');
const { crearRoles, crearUsuarioAdmin } =  require('../helpers/db-validators');

/********************************************************************************
 *  Método para conectarse a la db
 ********************************************************************************/
const dbConnection = async () => {
    try {
        //Conexión a la db
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        crearRoles();
        crearUsuarioAdmin();
        console.log('Base de datos ONLINE')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error inicializando la DB');
    }
}
/********************************************************************************
 *  Exportacion método dbConnection
 ********************************************************************************/
module.exports = {
    dbConnection,
}