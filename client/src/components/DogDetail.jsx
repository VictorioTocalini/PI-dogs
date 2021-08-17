import React, {useEffect    } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../actions';

function DogDetail(props){
    console.log(props)
    const dispatch = useDispatch();
    useEffect(()=>{
         dispatch(getById())
    })
    const dogs = useSelector((state) => state.dogs)
    console.log(dogs)
    return <h1> dogdetail </h1>
    // return <div>
    //     <h3>{dog.name}</h3>
    //     <img src= {dog.image} alt= ''/>
    //     <h1>{dog.weight_min} - {dog.weight_max} kg </h1>
    //     <h1>{dog.height_min} - {dog.height_max} cm </h1>
    //     <h1>{dog.breed_group}</h1>
    //     <h1>{dog.breed_group}</h1>
    //     <ul>
    //         {dog.temperament.forEach((temp)=> {
    //            return <li>{temp}</li>
    //         })}
    //     </ul>
    // </div>
}

export default DogDetail