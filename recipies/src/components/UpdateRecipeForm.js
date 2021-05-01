import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import {
    useHistory,
    useParams
} from 'react-router';

import {fetchSingleRecipe} from './../Actions/actions.js';
import {setError, editRecipe} from '../Actions/actions';
import { connect } from "react-redux";



const RecipeFormStyle = styled.div`
.container{
    height:auto;
    width:70%;
    box-shadow: 0px 5px 10px RGBA(225,226,224,1);
    background: linear-gradient(to right, #ccbe1d, #fc9471);
    margin: 0 auto;
    border-radius:40px;
}

h1{
    color:white;
    text-align:center;
    padding:2%;
}

ul{
list-style-type: none;
}

li{
display:flex;
flex-flow:column wrap;
justify-content: center;
align-items: center;
padding:1rem;
margin:0.5rem;
}

input{
    border-radius: 25px;
    border:none;
    width:500px;
    height:50px;
}

textarea{
    width:450px;
    height:100px;
}

.buttons{
    margin:0% auto;
    padding:2% 0;
    display:flex;
    flex-flow:horizontal wrap;
    justify-content: space-between;
    width:40%;
}

`

const initialFormValues = {
    source: '',
    title:'',
    ingredients:'',
    instructions:'',
    category:'',
};


const UpdateRecipeForm = (props) => {

    // pull info from specific id
    // console.log(useParams())

        
    const [recipeToEdit, setRecipeToEdit] = useState(initialFormValues);
    const { id } = useParams();
    
    console.log(props)

    useEffect(() => {
        props.fetchSingleRecipe(id);
        setRecipeToEdit(props.recipe);
    }, []);

    // useEffect(() => {
    //     const {title, source, category, ingredients, instructions } = props.recipe
    //     setRecipeToEdit(
    //         {
    //             title: title,
    //             source: source,
    //             category: category,
    //             ingredients: ingredients,
    //             instructions: instructions
    //         }
    //     )
    // }, [props.recipe])
    
    const handleChange = e => {
        setRecipeToEdit({
            ...recipeToEdit,
            [e.target.name]:e.target.value
        });
    }
    const { push } = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault();
            props.editRecipe(recipeToEdit, id);
            push(`/recipes`);
            // window.location.reload();
    }

    // console.log(state);
    // const { id } = useParams();
    // console.log(id);

    return (
        <RecipeFormStyle>
            <div className='container'>
                <h1>Recipe Card</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                    <li>
                    Title:<input 
                        type='text'
                        onChange={handleChange}
                        value={recipeToEdit.title}
                        name='title'
                        
                        />
                    </li>
                    <li>
                    Source:<input 
                        type='text'
                        onChange={handleChange}
                        value={recipeToEdit.source}
                        name='source'
                        
                        />
                    </li>
                    
                    
                    <li>
                        Category:<input
                        type='text'
                        onChange={handleChange}
                        value={recipeToEdit.category}
                        name='category'
                        
                        />
                    </li>
                    <li>
                    Ingredients:<textarea 
                        type='text'
                        onChange={handleChange}
                        value={recipeToEdit.ingredients}
                        name='ingredients'
                        
                        />
                    </li> 
                    <li>
                    instructions:<textarea 
                        type='text'
                        onChange={handleChange}
                        value={recipeToEdit.instructions}
                        name='instructions'
                        />
                    </li>
                    
                    </ul>
                
                <div className='buttons'>
                    <button onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </button>
                </div>
                </form>
            </div>
        </RecipeFormStyle>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return({
        recipe: state.recipe,
        errorMessage: state.error
    })
}

export default  connect(mapStateToProps, {setError, editRecipe, fetchSingleRecipe})(UpdateRecipeForm);