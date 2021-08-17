import Card from "./Card";
import {useDispatch, useSelector} from 'react-redux'
import { getDogs } from "../actions";
import React,{ useEffect } from "react";

function Cards(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch]);
    const dogs = useSelector((state) => state.dogs)
    
    const [input, setInput] = React.useState('')
    const [doggy, setDoggy] = React.useState(dogs)

    function onInputChange(evento){
        setInput({
            ...input,
            [evento.target.name]: evento.target.value
        })
    }
    function onSubmitSearch(e){
        e.preventDefault();
        const fil = doggy.filter((d)=> d.name.includes(input))
        setDoggy(fil)
    }
    console.log(input)

    return <>
    <label htmlFor='search'></label>
        <input 
        key='SearchBar'
        type='text'
        id='SearchBar'
        name='searchBar'
        onChange={onInputChange}
        value={input.name} 
        />
        <button onClick= {onSubmitSearch}>search</button>
        <h1>DOGS</h1>
        {dogs.map((dog)=> {
            return <Card 
            key= {dog.ID}
            dog= {dog}
            />
        })}
    </>
}
export default Cards