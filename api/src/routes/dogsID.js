const { Router } = require('express');
const router = Router();
const axios = require('axios')
const {Dog} = require('../db');

router.get('/dogs/:raza',async function(req,res,next){
    try{
        const raza = req.params.raza;
        if(raza){
            const dog = await axios.get(`https://api.thedogapi.com/v1/breeds`);
            const dogg = dog.data;
            const dogs = await Dog.findAll();
            const rta =[]; 
            dogg.filter(i => {
                if(i.breed_group){
                    let breed = i.breed_group.toLowerCase()
                    if(breed.includes(raza)) rta.unshift(i)
                }
            });
            dogs.forEach(e=> {
                if(e.breed_group){
                    let breed = e.breed_group.toLowerCase()
                    if(breed.includes(raza)) rta.unshift(e)
                }
            });
            if(rta.length >0){
                res.send(rta);
            } else{
                const msg = 'this Breed Group dosn`t exist';
                res.send(msg);
            }
        }
    }catch(err){
        next(err)   
    }
})

module.exports = router