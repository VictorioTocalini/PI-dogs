import { Link } from "react-router-dom";
import { getById } from '../actions';
import { useDispatch} from 'react-redux';


function Card ({dog}){
    const dispatch = useDispatch();
    
    function idToState(){
        dispatch(getById(dog.id))
    }
    if(dog.image){
        return <div>
        <Link 
        onClick={idToState} 
        to={'/dogs/'+ dog.id}
        >
            <h2>{dog.name}</h2>
        </Link>
            <img
             width='10%' 
             src={dog.image.url} 
             alt='agregame una foto :D'
             />
        </div>
    }if(dog.image_url){
        return <div>
        <Link 
        onClick={idToState} 
        to={'/dogs/'+ dog.id}
        >
            <h2>{dog.name}</h2>
        </Link>
            <img
             width='10%' 
             src={dog.image_url} 
             alt='agregame una foto :D'
             />
        </div>
    }

}
export default Card