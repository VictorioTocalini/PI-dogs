const { Router } = require('express');
const router = Router();
const axios = require('axios')
require('dotenv').config();
const{API_KEY} = process.env
const{Dog} = require('../db')


router.get('/dogs', async function(req, res, next){
    try{
        const dogs = await Dog.findAll() 
        const dogg = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) 
        const dogAPI= dogg.data
        dogs.forEach(e=> dogAPI.unshift(e))
        res.send(dogAPI)
    }catch(err){
        next(err)
    }
})

module.exports = router

