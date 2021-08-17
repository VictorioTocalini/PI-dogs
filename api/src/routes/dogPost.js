const { Router } = require('express');
const router = Router();
const axios = require('axios');
const {Dog} = require('../db');

router.post('/dog',async function(req,res,next){
    try{
        const nDog= {
            name: req.body.name,
            breed_group: req.body.breed_group,
            weight_min: req.body.weight_min,
            weight_max: req.body.weight_max,
            height_min: req.body.height_min,
            height_max: req.body.height_max,
            temperament: req.body.temperament,
            image_url: req.body.image_url,
            life_span: req.body.life_span
        };
        if(nDog.name && nDog.breed_group && nDog.weight_max && nDog.weight_min && nDog.height_max && nDog.height_min && nDog.temperament && nDog.image_url){
            const addDog = await Dog.create(nDog);
            res.send('dog created!')
            console.log('Dog added to Data Base')
        }else {
            const msg= 'Some data is missing!!'
            res.send(msg)
            console.log(msg)
        }
    }catch(err){
        next(err)   
    }
})

module.exports = router