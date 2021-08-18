import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { getById } from '../actions';

function DogDetail(){
    const dispatch= useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getById(id))
    },[dispatch,id]);

    const doggy= useSelector((state)=> state.dogById)
    const dog = doggy[0]
    if(dog){
        const split = dog.temperament.split([','])
        let temperaments = [];
        split.forEach((t)=>{
            var tem = t.trim();
            temperaments.push(tem)
        })

        return <div>
            <h1>{dog.name}</h1>
            <img width='30%' src= {dog.image.url} alt= ''/>
            <h1>{dog.weight.metric}  kg </h1>
            <h1>{dog.height.metric}  cm </h1>           
            <h1>breed group: {dog.breed_group}</h1>
                {temperaments.map((t)=> {   
                    return <li key={t} >{t}</li>
                })}
        </div>
    }else return <h1> no hay perro </h1>
}

export default DogDetail