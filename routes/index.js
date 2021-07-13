const express = require('express');
const router = express.Router();
const passport = require('passport')
const usuarios = require('../controllers/usuarios')



/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('home',{
    error:{
      email:''
    },
    value:{ },
    user: req.session.usuario
   });
});
router.post('/autenticado', usuarios.login)








module.exports = router;
