//const axios = require("axios")

module.exports = {

    findAll:async (req,res)=>{
        try{
            let curso = await db.curso.findAll({})
            res.json(curso)
        }
        catch(error){
            sendStatus(400)
        }
    },



     
    create: async(req,res)=>{

        try{
            let curso = await db.curso.create(req.body)
            res.json(curso)

        }catch(error){
            res.sendStatus(400)
        }

    }
}