const models =require('../models');
const { Op } = require('sequelize')

module.exports.abrirPageLink =((req,res)=>{
    res.render('links/add')
});

 module.exports.guardarLink =(async(req,res)=>{
     const links=req.body
        await models.links.create(links)
        
        res.redirect('/links')
})
module.exports.mostrarLink =(async(req,res)=>{
   const { title, url, description } = req.query
   
  
    const resultados = await models.links.findAll({
        where: {
            title: {
                [Op.like]: `${title || ''}%`
            },
            description: {
                [Op.like]: `${description || ''}%`
            },
            url: {
                [Op.like]: `${url || ''}%`
            },
        } 
    }) 
    console.log(resultados.length)
    res.render('links/listaLinks', {resultados})
   
})

module.exports.deleteLink =(async(req,res)=>{
   await links.destroy({
        where: {
            id:req.params.id,
        },

   })
    res.send('DELETED')


    
    
 })
 