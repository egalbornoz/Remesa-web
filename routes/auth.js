/******************************************************************
*  Importaciones
 ******************************************************************/
const { Router } = require('express');
const { check } = require('express-validator');
const { route } = require('./usuarios');
const { login,googleSigin } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

/******************************************************************
*  Ruta /login - endPoint
 ******************************************************************/
router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos

], login);
/******************************************************************
*  Ruta /google - endPoint
 ******************************************************************/
router.post('/google', [
    check('id_token', 'El id token es necesario').not().isEmpty(),
    validarCampos

], googleSigin);

/******************************************************************
*  Exportación Rutas - endPoints
 ******************************************************************/
module.exports = router;