import React, { useState } from 'react';
import './RecipeForm.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Trash = styled.span`
color:red;
`
const Check = styled.span`
color:green;
margin-left:50%;
`

const recipes = [
    {source:'', email:'', recipeName:'', ingrediants:'', instructions:''}
]

const initialValues = {
    source: '',
    email:'',
    recipeName: '',
    ingrediants:'',
    instructions:'',
}

function Recipe(){
    const [recipe, setRecipe] = useState(recipes);
    const [formValues, setFormValues] = useState(initialValues);


    const change = ev => {
        const { name, value } = ev.target
        console.log(name)
        console.log(value)
        setFormValues({...formValues, [name]: value})
    }

    const submit = ev => {
        ev.preventDefault();
        const newRecipe = {
            source: formValues.source,
            email: formValues.email,
            recipeName: formValues.recipeName,
            ingrediants: formValues.ingrediants,
            instructions: formValues.instructions,
        }
        axios.post('https://reqres.in/api/orders', newRecipe)
        .then(res => {
            setFormValues(initialValues)
            console.log(initialValues)
        })
        .catch(err =>{

        })
    }

    return (
            <div className='container'>
                <h1>Recipe Card</h1>
                {recipe.map((recipe,asd) => {
                    return(
                        <div key={asd}>
                            {recipe.source} {recipe.email} {recipe.recipeName} {recipe.instructions}
                        </div>
                    )
                })}
                <form onSubmit={submit}>
                    <ul>
                    <li>
                    Source:<input 
                        type='text'
                        onChange={change}
                        value={formValues.source}
                        name='source'
                        />
                    </li>
                    <li>
                    Email:<input 
                        type='text'
                        onChange={change}
                        value={formValues.email}
                        name='email'
                        />
                    </li>
                    <li>
                    Recipe Name:<input 
                        type='text'
                        onChange={change}
                        value={formValues.recipeName}
                        name='recipeName'
                        />
                    </li>
                    <li>
                    Ingrediants:<textarea 
                        type='text'
                        onChange={change}
                        value={formValues.ingrediants}
                        name='ingrediants'
                        />
                    </li>
                    <li>
                    instructions:<textarea 
                        type='text'
                        onChange={change}
                        value={formValues.instructions}
                        name='instructions'
                        />
                    </li>
                    </ul>
                </form>
                    <Trash>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </Trash>
                    <Check>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </Check>
            </div>
    )
}

export default Recipe