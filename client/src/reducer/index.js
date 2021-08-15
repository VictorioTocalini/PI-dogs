import { GET_DOGS,GET_BY_NAME,GET_BY_ID,GET_TEMPERAMENT } from "./constantes";

var initialState = {
    dogs: [],
    temperament: []
};

export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                dogs:[...action.payload]
            }
        case GET_BY_NAME: 
            return{
                ...state,
                dogs: [...action.payload]
            }     
        case GET_BY_ID: 
            return{
                ...state,
                dogs: [...action.payload]
            }  
        case GET_TEMPERAMENT: 
            return{
                ...state,
                temperament: [...action.payload]
            }            
        default: return state
    }
}