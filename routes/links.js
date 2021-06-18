const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links');


/* GET users listing. */
router.get('/', linksController.mostrarLink)
router.get('/add', linksController.abrirPageLink);
router.post('/add', linksController.guardarLink);


module.exports = router;
