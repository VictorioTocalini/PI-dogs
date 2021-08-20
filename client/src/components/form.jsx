import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { postDog, getTemperament } from '../actions';
import './form.css'

export default function Formulario (){
    const dispatch = useDispatch();
    useEffect( ()=>{
        async function f() { 
            await dispatch(getTemperament())
        } 
        f()
    },[dispatch]);
    const temperaments = useSelector((state) => state.temperament)
    const[temperament, setTemperament] = React.useState([])
    const obj = {  
        name:"",
        breed_group:"",
        weight_min:"",
        weight_max:"",
        height_min:"",
        height_max:"",
        image_url:"",
        life_span:""
    };
    const[input, setInput] = React.useState(obj);
    const[errors, setErrors] = React.useState({
        msg: 'All the camps must be fill'
    });
    
    function onInputChange(e){
        e.preventDefault()
        if(e.target.name === "temperament"){
            const value = e.target.value
            setTemperament([...temperament, value])
        }else {
            setInput({
                ...input,
                [e.target.name]:e.target.value
            })
        }
    }
    // function handleDelete(t){
    //     setTemperament([...temperament.filter((temp) => temp !== t) ])
    // }

    function validate(){
        const {name,life_span,image_url,weight_min,weight_max,height_min,height_max,breed_group} = input
        let isValid= true
        if(!life_span) isValid= false
        if(life_span){
            const split = life_span.split(['-'])
            const num = split.map((e)=> e.trim())
            if(num.length <= 1){
                setErrors({
                    ...errors, 
                    name: "life_span",
                    msg: 'Must have 2 numbers separate with one ( - )'
                })
                isValid= false
            }
            if(num[0]>num[1]){
                setErrors({
                    name: "life_span",
                    msg: 'first number must be less than the second'
                })
                isValid= false
            }
        }
        if(isValid) 
        if(!name) isValid=false
        if(!image_url)isValid=false
        if(!temperament)isValid=false
        if(!weight_min)isValid=false
        if(!weight_max)isValid=false
        if(!height_min)isValid=false
        if(!height_max)isValid=false
        if(weight_min>weight_max){
            setErrors({
                name: "weight",
                msg: 'min weight must be less than maxim weight'
            })
            isValid= false
        }
        if(height_min>height_max){
            setErrors({
                name: "height",
                msg: 'min height must be less than maxim height'
            })
            isValid= false
        }
        if(!breed_group)isValid=false
        return isValid
    }
    
    function buttonOnSubmit(e){
        e.preventDefault();
        const isValid= validate()
        if(isValid){
            input.temperament = temperament
            dispatch(postDog(input))
            setInput(obj)
            setTemperament([])
            setErrors([])
            return alert('complete')
        }
    }
    return <>
    <form className='form' onSubmit={buttonOnSubmit} >
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
        <select name='temperament' onChange={onInputChange}>
            {temperaments && temperaments.map((temp) => (
            <option key= {temp.name} value={temp.name}>{temp.name}</option>
            ))}
        </select>
        <label htmlFor='image_url'> image URL </label>
        <input
        key='Image_url'
        type='url'
        id='Image_url'
        name='image_url'
        onChange={onInputChange}
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
        onBlur={validate}
        />
        {errors.name&& (
            <p className='error'>{errors.name}: {errors.msg}</p>
        )}
        <button type='submit'>CREATE</button>
        </form>
        { temperament && temperament.map((t)=>{
            return (
                <div className='temperaments'> 
                <p key={t}>{t}</p>  
                </div>
            )
            })}
    </>
}

// hacer varios validate para controlar los inputs, mirar el repaso de mati
