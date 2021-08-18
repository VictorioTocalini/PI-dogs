const { Router } = require('express');
const router = Router();
const {Temperament} = require ('../db')
const axios = require('axios')
require('dotenv').config();
const{API_KEY} = process.env

router.get('/temperament',async function(_req,res,next){
    try{
        const db = await Temperament.findAll()
        if(db.length<1){
            const dogg = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
            const doggy = dogg.data;
            const temp = [];
            let temperamentos = [];
            doggy.map(e=> temp.push(e.temperament));
            temp.forEach(e => {
                if(e){
                    let split = e.split([',']);
                    split.forEach((t)=>{
                        var tem = t.trim();
                        temperamentos.push(tem)
                    })
                }
            }); 
            let unic = temperamentos.filter((it,index)=> {
                return temperamentos.indexOf(it) === index
            })
            unic.forEach( async(e)=> {
                await Temperament.create({name:e})
            })   
            console.log('base de datos actualizada') 
            res.send(unic)
        }else res.send(db)
        }catch(err){
        next(err)   
    }
});

module.exports = router
