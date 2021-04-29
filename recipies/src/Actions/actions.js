import axios from 'axios';
import { axiosWithAuth } from '../components/utils/axiosWithAuth';




export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERR = "FETCH_ERR";
export const SET_ERR = "SET_ERR"
export const RECIPE_ADD = "RECIPE_ADD"



export const fetchRecipes = () => {
    return (dispatch) =>{
        dispatch({ type: FETCH_START });
        axiosWithAuth()
            .get('/api/recipes/')
            .then((res) => {
                console.log(res.data);
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_ERR, payload: err.response.data });
    });
    }
}
export const addRecipe = (recipe) =>{
    return (dispatch) => {
    axiosWithAuth()
        .post('/api/recipes/',recipe)
    .then((res) => {
        dispatch({ type: RECIPE_ADD, payload: res.data })
    })
    .catch( error => { console.log( error.response.request._response ) });
    
}
} 
export const setError = () => dispatch => {
    dispatch({ type: SET_ERR });
} 