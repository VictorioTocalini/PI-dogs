import { GET_DOGS,GET_BY_NAME,GET_BY_ID,GET_TEMPERAMENT,ALFABETIC,FILTER_BY_DB, DELETE_DOG } from "./constantes";

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
        fetch(LH +'/dogs/q?name='+ name)
        .then(r => r.json())
        .then(json => {
            dispatch({
                type: GET_BY_NAME,
                payload: json
            })
        })
    }
}
export function getById(id){
    return function(dispatch){
        fetch(LH +'/dogs/'+ id)
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

export function alfabeticOrder (e){
     return function(dispatch) {
        fetch(LH + '/dogs')
        .then(r => r.json())
        .then(json => {
            const order = [];
            json.forEach((d)=>{
                order.unshift(d)
            })
            dispatch({
                type: ALFABETIC,
                payload: order
            })
        })
    }
}

export function databaseDogs (value){
    return function(dispatch){
        fetch(LH + '/dogs')
        .then(r => r.json())
        .then(json => {
            if(value==='DB'){
                const arr = json.filter((d)=>d.hasOwnProperty('createdAt'))
                dispatch({
                    type:FILTER_BY_DB,
                    payload: arr
                })
            }if(value==='API'){
                const arr = json.filter((d)=>d.hasOwnProperty("reference_image_id"))
                dispatch({
                    type:FILTER_BY_DB,
                    payload: arr
                })
            }if(value==='ALL'){
                dispatch({
                    type:FILTER_BY_DB,
                    payload: json
                }) 
            }  
        })
    }
}
export function deleteDog(value){
    return function (dispatch){
        fetch(LH + '/dogs')
        .then(r => r.json())
        .then(json => {
            
        })
    }

}
