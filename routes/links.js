const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links');



/* GET links listing. Requer autenticacao */



router.get('/', linksController.mostrarLink)

router.get('/add', linksController.abrirPageLink);
router.post('/add', linksController.guardarLink);
router.post('/delete/:id', linksController.deleteLink);

module.exports = router;
