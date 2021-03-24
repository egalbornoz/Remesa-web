// *******************************************************************************
//  *  Clase Server
//  ********************************************************************************
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { dbConnection } = require('../database/config');
const { crearRoles } =  require('../helpers/db-validators');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            uploads: '/api/uploads',
            usuarios: '/api/usuarios',
        }
        // Conectar a la Base de Datos
        this.conectionDB();
        // Middlewares
        this.middleware();
        //Rutas de mi aplicación    
        this.routes();
    }
    async conectionDB() {
        await dbConnection();
    }
    middleware() {

        //Cors limitar accesos al api
        this.app.use(cors());
        // Parseo y lectura del body
        this.app.use(express.json())
        // Directorio Público
        this.app.use(express.static('public'));
        //File Uploads - Carga de Archivos
        //createParentPath:true permite crear la carpera cuando se envia por parametro
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));

    }
    routes() {
        //  Aqui se configuran las rutas a acceder desde  mi controlador
        this.app.use(this.path.auth, require('../routes/auth'));
        this.app.use(this.path.buscar, require('../routes/buscar'));
        this.app.use(this.path.usuarios, require('../routes/usuarios'));
        this.app.use(this.path.uploads, require('../routes/uploads'));
        this.app.use(this.path.categorias, require('../routes/categorias'));
        this.app.use(this.path.productos, require('../routes/productos'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server activo por el puerto ${this.port}`)

        });
    }
}
// ************************************************************************
// *  Exportaciones
// ************************************************************************

module.exports = Server