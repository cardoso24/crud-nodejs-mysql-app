const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links');


/* GET users listing. */
router.get('/add', linksController.criarLink);
router.post('/add', linksController.guardarLink) 

module.exports = router;
