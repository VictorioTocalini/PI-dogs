import React from 'react';
import { useDispatch } from 'react-redux'
import { postDog } from '../actions';

export default function Formulario (){
    
    const dispatch = useDispatch();
    const[input, setInput] = React.useState({});
    const[errors, setErrors] = React.useState({});


    function validate(value){
        if(!/https?:\/\//.test(value.image_url)){
            setErrors('Tiene que ser una URL valida')
        }else {
            setErrors('')
        }
    }

    function onInputChange(evento){
        setInput({
            ...input,
            [evento.target.name]: evento.target.value
        })
    }
    function onInputChangeURL(evento){
        setInput({
            ...input,
            [evento.target.name]: evento.target.value
        })
        validate({
            ...errors,
            [evento.target.name]: evento.target.value
        })
    }

    function buttonOnSubmit(e){
        e.preventDefault();
        if(input.name && input.breed_group && input.weight_max && input.weight_min && input.height_max && input.height_min && input.temperament && input.image_url){
            dispatch(postDog(input))
            setInput({})
            return alert('complete')
        }
    }

    return <form onSubmit={buttonOnSubmit} >
        <label htmlFor='name'> name </label>
        <input 
        key='Name'
        type='text'
        id='Name'
        name='name'
        onChange={onInputChange}
        value={input.name}
        />
        <label htmlFor='breed_group'> breed group </label>
        <input 
        key='Breed_group'
        type='text'
        id='Breed_group'
        name='breed_group'
        onChange={onInputChange}
        value={input.breed_group}
        />
        <label htmlFor='weight_min'> weight min </label>
        <input 
        key='Weight_min'
        type='number'
        id='Weight_min'
        name='weight_min'
        onChange={onInputChange}
        value={input.weight_min}
        />
        <label htmlFor='weight_max'> weight max </label>
        <input 
        key='Weight_max'
        type='number'
        id='Weight_max'
        name='weight_max'
        onChange={onInputChange}
        value={input.weight_max}
        />
        <label htmlFor='height_min'> height min </label>
        <input 
        key='Height_min'
        type='number'
        id='Height_min'
        name='height_min'
        onChange={onInputChange}
        value={input.height_min}
        />
        <label htmlFor='height_max'> height max </label>
        <input
        key='Height_max' 
        type='number'
        id='Height_max'
        name='height_max'
        onChange={onInputChange}
        value={input.height_max}
        />
        <label htmlFor='temperament'>temperament </label>
        <input 
        key='Temperament'
        type='text'
        id='Temperament'
        name='temperament'
        onChange={onInputChange}
        value={input.temperament}
        />
        <label htmlFor='image_url'> image URL </label>
        <input
        key='Image_url'
        type='text'
        id='Image_url'
        name='image_url'
        onChange={onInputChangeURL}
        value={input.image_url}
        />
        <label htmlFor='life_span'> life span  </label>
        <input 
        key='Life_span'
        type='text'
        id='Life_span'
        name='life_span'
        onChange={onInputChange}
        value={input.life_span}
        />
        <button type='submit'>CREATE</button>


    </form>
}

// hacer varios validate para controlar los inputs, mirar el repaso de mati
