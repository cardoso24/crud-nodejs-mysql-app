const models =require('../models')


module.exports.criarLink =((req,res)=>{
    res.render('links/add')
});

 module.exports.guardarLink =((req,res)=>{
     console.log(req.body)
   res.send('Guardado') 
    
})
