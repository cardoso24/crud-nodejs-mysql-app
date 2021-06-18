const models =require('../models')


module.exports.criarUsuario =(async(req,res)=>{
    const users =req.body

    await models.users.create(users)
    res.send(201)
});

module.exports.abrirPaginaUsuario =((req,res)=>{
   res.render('index')
    

})