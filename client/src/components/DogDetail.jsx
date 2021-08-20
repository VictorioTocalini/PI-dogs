import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { getById} from '../actions';
import './dogDetails.css';

function DogDetail(){
    const dispatch= useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getById(id))
    },[dispatch,id]);

    const doggy= useSelector((state)=> state.dogById)
    const dog = doggy[0]
    if(dog){
        let temper = dog.temperament
        if( typeof temper === "string" ){
            let temp = []
            const split = temper.split([',']);
            split.forEach((t)=> {
             temp.push(t.trim())   
            })
            dog.temperament = temp
        }
        return <> 
            <h1 className='dogName'>{dog.name}</h1>
            <div className='centralBox'>
            <img className='dogImage' src= {dog.image.url} alt= ''/>
            <ul className= 'ulData'>
            <h1 className='dataTitle'>Data:</h1>  
            <h1 className='data'>weight:  {dog.weight.metric}  kg </h1>
            <h1 className='data'>weight:  {dog.weight.metric}  cm </h1>           
            <h1 className='data'>breed group:  {dog.breed_group}</h1>
            </ul> 
            <ul className='UL'>  
                <li className='LIs' key='temp'>Temperaments:</li>  
                {dog.temperament.map((t)=> {   
                    return <li className='LI' key={t} >{t}</li>
                })}
            </ul>
        </div>
        </>
    }else return <h1> no hay perro </h1>
}

export default DogDetail