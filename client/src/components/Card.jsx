import { Link } from "react-router-dom";
import { getById } from '../actions';
import { useDispatch} from 'react-redux';
import './Card.css'


function Card ({dog}){
    const dispatch = useDispatch();
    
    function idToState(){
        dispatch(getById(dog.id))
    }
    if(dog.image){
        return <div className= 'dogCard'>
        <Link 
        onClick={idToState} 
        to={'/dogs/'+ dog.id}
        >
            <h2>{dog.name}</h2>
        </Link>
            <img
             className='image'
             src={dog.image.url} 
             alt='agregame una foto :D'
             />
        </div>
    }if(dog.image_url){
        return <div className= 'dogCard'>
        <Link 
        className= 'link'
        onClick={idToState} 
        to={'/dogs/'+ dog.id}
        >
            <h2>{dog.name}</h2>
        </Link>
            <img
             className='image' 
             src={dog.image_url} 
             alt='agregame una foto :D'
             />
        </div>
    }

}
export default Card