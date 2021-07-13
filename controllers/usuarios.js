const models =require('../models')
const bcrypt =require('bcrypt');
const { createHash, compareHash } = require('../helpers/hash');

module.exports.abrirPaginaResgister =((req,res)=>{
    res.render('register')
     
 
 })


module.exports.criarUsuario =(async(req,res)=>{
    const usuario =req.body
        
    
    usuario.password = hash(usuario.password) //encriptando a senha
    

  
    await models.users.create(usuario)

    
    res.redirect('/')
});

function hash (obj){
      
    const salt =bcrypt.genSaltSync(10)
    const psw = bcrypt.hashSync(obj, salt)
    return psw; 
}

module.exports.showLogin = function (req, res) {
    res.render('/');
  };

module.exports.login = (async (req, res) =>{
    const { userName, password } = req.body;
  
    const foundUser = await models.users.findOne({
        where:{
            userName:'', 
            password:''
           }   
        });
  
    if (!foundUser) {
      res.render('home', {
        error: {
          email: 'Usuario nao encontrado'
        },
        value: userName
      })
    }
  
    if (!compareHash(password, foundUser.password)) {
      res.render('home');
    }
  
    req.session.users = foundUser;
  
    res.redirect('/links');
  });


