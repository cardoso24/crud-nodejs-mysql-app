const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

/* GET users listing. */
router.post('/',userController.criarUsuario);
router.get('/', userController.abrirPaginaUsuario)

module.exports = router;
