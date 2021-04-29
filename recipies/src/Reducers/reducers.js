import { FETCH_START, FETCH_SUCCESS, FETCH_ERR, SET_ERR, RECIPE_ADD } from '../Actions/actions.js';



export const initialState = {
    recipes: [],
    isLoading: false,
    error:''
}
const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipes: action.payload,
                error: ''
            }
        case FETCH_ERR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   
        case(RECIPE_ADD):
            return({
                ...state,
                recipes:[...state.recipes,action.payload],
                isLoading:true
            })  
        case(SET_ERR):
        return({
            ...state,
            error: ''
        }) 
        default:
            return state;      
    }
}

export default reducer;