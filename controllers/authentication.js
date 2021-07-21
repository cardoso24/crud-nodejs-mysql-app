const models = require('../models')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const bcrypt =require('bcrypt');
const path = require('path');
const { criarUsuario, hash, compareHash } = require('./usuarios');



module.exports.autenticarUsuario = (async (req, res) => {
  console.log('autenticarUsuario')
  const usuario = req.body;
  const userDb = await models.users.findOne(
    { where: {
        userName: usuario.userName,
        password: usuario.password     
      }
      
    });
    console.log(usuario.userName)
    console.log(userDb.userName)
  if (!userDb) {
    res.render('home', {
      error: {
        email: 'Usuario nao encontrado'
      },
      value: usuario
    })
    return
  }

  
 
 if(!compareHash(usuario.password, userDb.password)){
    res.render('home')
      
 }
  

  req.session.usuario = userDb;

  res.redirect('/links');
  
  
  function compareHash(password, hash) {
    return bcrypt.compareSync(password, hash)
  }



});




module.exports.logoutUsuario = ((req, res) => {
  req.session.destroy();
  //fazer redirect
})