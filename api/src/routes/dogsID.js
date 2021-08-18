const { Router } = require('express');
const router = Router();
const axios = require('axios')
const {Dog} = require('../db');

router.get('/dogs/:id',async function(req,res,next){
    try{
        const raza = req.params.id;
        if(raza){
            const dog = await axios.get(`https://api.thedogapi.com/v1/breeds`);
            const dogg = dog.data;
            const dogs = await Dog.findAll();
            const rta =[]; 
            dogg.map(i => {
                if(i.id == raza) rta.push(i)
            });
            dogs.map(i => {
                if(i.id == raza) {
                    const newDog = {
                        image: {url:i.dataValues.image_url},
                        name: i.dataValues.name,
                        breed_group: i.dataValues.breed_group,
                        height: {metric:i.dataValues.height_min + ' - ' + i.dataValues.height_max},
                        weight: {metric: i.dataValues.weight_min + ' - ' + i.dataValues.weight_max},
                        life_span: i.dataValues.life_span,
                        temperament: i.dataValues.temperament,
                        id: i.dataValues.id,
                    }                  
                    rta.push(newDog)
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