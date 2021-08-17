import { Link } from "react-router-dom";

function Card ({dog}){
    if(dog.image){
        return <div>
        <Link  to={'/dogs/q?name='+ dog.name}>
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
        <Link  to={'/dogs/q?name='+ dog.name}>
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