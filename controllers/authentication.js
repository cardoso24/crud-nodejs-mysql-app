const models = require('../models')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const path = require('path');
const passport = require('passport')
const { criarUsuario } = require('./usuarios');
const { Op } = require('sequelize')


module.exports.autenticarUsuario = (async (req, res) => {
  const usuario = req.body
  const userDb = await models.users.findOne(
    {
      where: {
        userName: usuario.userName
      } 
    }).then(userDb =>{
      if(userDb){
        res.status(400).send({
           message: "logado"
      })
       
      }
      res.redirect('/links');
      
    })
  console.log(usuario.userName)
  console.log(userDb.userName)

  if (userDb.userName === usuario.userName) {
    return passport.authenticate('local',{
      successRedirect:"/links",
      failureRedirect:"/"
    })
  }
})
    /* 
  
/*   }
  else {
    console.log('nao existe');
  }
  res.redirect('/links') 
}) */


module.exports.logoutUsuario = ((req, res) => {
  req.session.destroy();
  //fazer redirect
})





