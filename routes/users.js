const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarios')


/* GET users listing. */
router.post('/register-add',userController.criarUsuario);
router.get('/', userController.abrirPaginaResgister)


module.exports = router;
