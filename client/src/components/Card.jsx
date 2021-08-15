import { Link } from "react-router-dom";

function Card (props){
    
    return <div>
        <Link to={'/dogs/'+ props.dogs.ID} >
            <h2>{props.dogs.name}</h2>
            <image src={props.dogs.image} alt='agregame una foto :D'/>
        </Link>
    </div>

}
export default Card