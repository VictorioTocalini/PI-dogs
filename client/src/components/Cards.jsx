import Card from "./Card";
import {useDispatch, useSelector} from 'react-redux'
import {  getByName, getDogs,alfabeticOrder,databaseDogs, deleteDog } from "../actions";
import React,{ useEffect } from "react";
import './Cards.css'

function Cards(){
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch]);

    const dogs = useSelector((state) => state.dogs)
    
    function onInputChange(evento){
        setInput({
            ...input,
            [evento.target.name]: evento.target.value
        })
    }
    async function onSubmitSearch(e){
        const search = input.searchBar;
        if(search){
            if(search.length > 1){
                dispatch(getByName(search))         
            }
        }
    }
    
    function clear (e) {
        e.preventDefault()
        dispatch(getDogs())
    }
   
    function alfOrder(e){
        e.preventDefault()
        if(e.target.value === 'Z-A'){
            dispatch(alfabeticOrder(e.target.value))
        } else dispatch(getDogs())
    }

    function databaseOrApi (e){
        e.preventDefault()
        dispatch(databaseDogs(e.target.value))
    }
    function quit(e){
        e.preventDefault()
        dispatch(deleteDog())
    }

    return <>
        <div className='homeBox'>
            <h1 className='title'>HENRY DOGS</h1>
            <button className='button_search' onClick= {onSubmitSearch}>search</button>
            <input 
            className= 'searchbar'
            key='SearchBar'
            id='SearchBar'
            name='searchBar'
            onChange={onInputChange}
            value={input.name} 
            />
            <button className='button_search' onClick= {clear}>clear</button>
            <label name= 'filters '>  filters</label>
            <select className= 'searchbar' onChange= {alfOrder}>
                <option value= 'A-Z '>A-Z</option>
                <option value='Z-A'> Z-A</option>
            </select>
            <select className= 'searchbar' onChange= {databaseOrApi}>
                <option value= 'ALL'>all</option>
                <option value= 'DB'>from DataBase</option>
                <option value='API'> from API</option>
            </select>
        </div>
        <div className= 'cardbox'>
         {dogs.map((dog)=> {
            return<Card 
            key= {dog.id}
            dog= {dog}
            />
        })} 
        </div>
    </>

}
export default Cards