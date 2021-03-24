// *************************************************************
// Centralización de modelos en un solo archivo
// *************************************************************
const Categoria = require('./categoria');
const Producto = require('./producto');
const Role = require('./role');
const Server = require('./server');
const Usuario = require('./usuario');

// *************************************************************
// Exportaciones
// *************************************************************
module.exports = {
    Categoria,
    Producto,
    Role,
    Server,
    Usuario,

}