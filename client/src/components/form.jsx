import React from 'react'

export default function Formulario (){
    
    const[input, setInput] = react.useState({});
    const[errors, setErrors] = react.useState({});

    function onInputChange(evento){
        setInput({
            ...input,
            [evento.target.name]: evento.target.value
        })
        setErrors({
            ...errors,
            [evento.target.name]: evento.target.value
        })
    }
    console.log(errors)

    return <form>
        <label htmlFor='name'> name </label>
        <input 
        type='text'
        id='Name'
        name='name'
        onChange={onInputChange}
        value={input.name}
        />
        <label htmlFor='breed_group'> breed group </label>
        <input 
        type='text'
        id='Breed_group'
        name='breed_group'
        onChange={onInputChange}
        value={input.breed_group}
        />
        <label htmlFor='weight_min'> weight min </label>
        <input 
        type='text'
        id='Weight_min'
        name='weight_min'
        onChange={onInputChange}
        value={input.weight_min}
        />
        <label htmlFor='weight_max'> weight max </label>
        <input 
        type='text'
        id='Weight_max'
        name='weight_max'
        onChange={onInputChange}
        value={input.weight_max}
        />
        <label htmlFor='height_min'> height min </label>
        <input 
        type='text'
        id='Height_min'
        name='height_min'
        onChange={onInputChange}
        value={input.height_min}
        />
        <label htmlFor='height_max'> height max </label>
        <input 
        type='text'
        id='Height_max'
        name='height_max'
        onChange={onInputChange}
        value={input.height_max}
        />
        <label htmlFor='temperament'>temperament </label>
        <input 
        type='text'
        id='Temperament'
        name='temperament'
        onChange={onInputChange}
        value={input.temperament}
        />
        <label htmlFor='image_url'> image  </label>
        <input 
        type='text'
        id='Image_url'
        name='image_url'
        onChange={onInputChange}
        value={input.image_url}
        />
        <label htmlFor='life_span'> life span  </label>
        <input 
        type='text'
        id='Life_span'
        name='life_span'
        onChange={onInputChange}
        value={input.life_span}
        />


    </form>
}

// hacer varios validate para controlar los inputs, mirar el repaso de mati
