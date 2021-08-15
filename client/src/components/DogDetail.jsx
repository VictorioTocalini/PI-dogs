import React, {useEffect, useState} from 'react';

function DogDetail(props){
    console.log(props)
    const [dog, setDog] = useState({});

    function getDogByID(){
        fetch(''+ props.dogs.ID)
        .then(r=>r.json())
        .then(dog => setDog(dog))
    }

    useEffect(()=>{
        getDogByID()
    },[])

    return <div>
        <h3>{dog.name}</h3>
        <img src= {dog.image} alt= ''/>
        <h1>{dog.weight_min} - {dog.weight_max} kg </h1>
        <h1>{dog.height_min} - {dog.height_max} cm </h1>
        <h1>{dog.breed_group}</h1>
        <h1>{dog.breed_group}</h1>
        <ul>
            {dog.temperament.forEach((temp)=> {
               return <li>{temp}</li>
            })}
        </ul>
    </div>
}

export default DogDetail