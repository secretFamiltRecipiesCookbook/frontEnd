import React, { useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {useHistory} from 'react-router';
import {setError, addRecipe} from './../Actions/actions';
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
const Trash = styled.span`
color:red;
`
const Check = styled.span`
color:green;
`


const AddRecipeForm = (props) => {
        
    const [state,setState] = useState({
    source: '',
    title:'',
    ingredients:'',
    instructions:'',
    category:'',
}) 
    
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    const { push } = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault();
            props.addRecipe(state);
            push('./recipes')
    }

    


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
                        value={state.title}
                        name='title'
    
                        />
                    </li>
                    <li>
                    Source:<input 
                        type='text'
                        onChange={handleChange}
                        value={state.source}
                        name='source'
                        
                        />
                    </li>
                    
                    
                    <li>
                        Category:<input
                        type='text'
                        onChange={handleChange}
                        value={state.category}
                        name='category'
                        
                        />
                    </li>
                    <li>
                    Ingredients:<textarea 
                        type='text'
                        onChange={handleChange}
                        value={state.ingredients}
                        name='ingredients'
                        
                        />
                    </li>
                    <li>
                    instructions:<textarea 
                        type='text'
                        onChange={handleChange}
                        value={state.instructions}
                        name='instructions'
                       
                        />
                    </li>
                    
                    </ul>
                
                <div className='buttons'>
                    <button >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                    <button >
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </button>
                </div>
                </form>
            </div>
        </RecipeFormStyle>
    )
}

const mapStateToProps = state => {
    return({
        errorMessage: state.error
    })
}

export default  connect(mapStateToProps, {setError, addRecipe})(AddRecipeForm);