import Card from "./card";

function Cards(props){

    return <>
        {props.dogs.map((dog)=> {
            return <Card dog={dog}/>
        })}
    </>
}
export default Cards