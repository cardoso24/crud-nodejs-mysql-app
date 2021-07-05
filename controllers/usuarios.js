const models =require('../models')
const bcrypt =require('bcrypt');

module.exports.abrirPaginaResgister =((req,res)=>{
    res.render('register')
     
 
 })

 
  


module.exports.criarUsuario =(async(req,res)=>{
    const usuario =req.body
        
    
    usuario.password = hash(usuario.password) //encriptando a senha
    

  
    await models.users.create(usuario)

    
    res.redirect('links')
});


function hash(obj){
      
    const salt =bcrypt.genSaltSync(10)
    const psw = bcrypt.hashSync(obj, salt)
    return psw; 

  }
