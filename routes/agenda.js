const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links');



/* GET links listing. Requer autenticacao */



router.get('/', linksController.abrirAgenda)

module.exports = router;