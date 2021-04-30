import { FETCH_START, FETCH_SUCCESS, FETCH_ERR, SET_ERR, RECIPE_ADD, FETCH_SUCCESS_ONE_RECIPE } from '../Actions/actions.js';



export const initialState = {
    recipes: [],
    recipe: {},
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
        case FETCH_SUCCESS_ONE_RECIPE:
            return {
                ...state,
                isLoading: false,
                recipe: action.payload,
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