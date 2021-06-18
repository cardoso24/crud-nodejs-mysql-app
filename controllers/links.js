const models =require('../models')


module.exports.criarLink =((req,res)=>{
    res.render('links/add')
});

 module.exports.guardarLink =(async(req,res)=>{
     const links=req.body
        await models.links.create(links)
        
     res.send('Guardado') 
    
})
