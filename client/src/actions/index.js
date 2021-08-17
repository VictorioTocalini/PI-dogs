import { GET_DOGS,GET_BY_NAME,GET_BY_ID,GET_TEMPERAMENT } from "./constantes";

const LH = 'http://localhost:3001';

export function getDogs(){
    return function(dispatch){
        fetch(LH + '/dogs')
        .then(r => r.json())
        .then(json => {
            dispatch({
                type: GET_DOGS,
                payload: json
            })
        })
    }
}
export function getByName(name){
    return function(dispatch){
        fetch(LH +'/dogs/name='+ name)
        .then(r => r.json())
        .then(json => {
            dispatch({
                type: GET_BY_NAME,
                payload: json
            })
        })
    }
}
export function getById(ID){
    return function(dispatch){
        fetch(LH +'/dogs/'+ ID)
        .then(r => r.json())
        .then(json => {
            dispatch({
                type: GET_BY_ID,
                payload: json
            })
        })
    }
}
export function getTemperament(){
    return function(dispatch){
        fetch(LH +'/temperament')
        .then(r => r.json())
        .then(json => {
            dispatch({
                type: GET_TEMPERAMENT,
                payload: json
            })
        })
    }
}
export function postDog(input){
    return function () {
        fetch(LH + '/dog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input)
        })  
    }
}


