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
    const [filtered, setFiltered] = React.useState([])

    function onInputChange(evento){
        setInput({
            ...input,
            [evento.target.name]: evento.target.value
        })
    }
    async function onSubmitSearch(e){
        const search = input.searchBar
        if(search.length >2){
            dogs.map((d)=> {
                const name = d.name.toLowerCase()
                if(name.includes(search)) {
                    if(!filtered.includes(d))filtered.push(d)
                }
                return filtered
            })
        }else setFiltered([])
        console.log('filter',filtered)
    }

    function clear (e) {
        e.preventDefault()
        setFiltered([])
    }

    return <>
        <label htmlFor='search'></label>
        <input 
        key='SearchBar'
        type='search'
        id='SearchBar'
        name='searchBar'
        onChange={onInputChange}
        value={input.name} 
        />
        <button onClick= {onSubmitSearch}>search</button>
        <button onClick= {clear}>clear</button>
        <h1>DOGS</h1>
        {dogs.map((dog)=> {
            return <Card 
            key= {dog.id}
            dog= {dog}
            />
        })} 
    </>

}
export default Cards