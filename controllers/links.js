const models =require('../models');
const links = require('../models/links');


module.exports.abrirPageLink =((req,res)=>{
    res.render('links/add')
});

 module.exports.guardarLink =(async(req,res)=>{
     const links=req.body
        await models.links.create(links)
        
        res.send('Guardado')
})
module.exports.mostrarLink =(async(req,res)=>{
   const { title } = req.query
    console.log(links.title)
    const resultados = await models.links.findAll({
        where: {
            title: {
                [Op.like]: `${title}%`
            }
        } 
    }) 
      
    console.log(resultados)
    
   
})