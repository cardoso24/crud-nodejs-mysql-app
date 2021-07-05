const express = require('express');
const router = express.Router();
const passport = require('passport')
const autenticaController = require('../controllers/authentication')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});



router.post('/autenticado', autenticaController.autenticarUsuario)




module.exports = router;
