const { Router } = require('express');
const router = Router();
const axios = require('axios')
const {Dog} = require('../db');


router.get('/dogs/q', async function(req,res,next){
    try{
        const {name} = req.query;
        if(name){
            const dog = await axios.get(`https://api.thedogapi.com/v1/breeds`)
            const rta = [];
            dog.data.forEach((d)=>{
                const dogName = d.name.toLowerCase();
                if(dogName.includes(name)) rta.push(d)
            })
            const db = await Dog.findAll();
            db.forEach(e=>{
                const dogName = e.name.toLowerCase()
                if(dogName.includes(name)) rta.unshift(e)
            })
            if(rta.length>0){
                res.send(rta)
            } else{
                const msg= 'this name dosn`t exist'
                res.send(msg)
            }
        }
    }catch(err){
        next(err)
    }
})


module.exports = router