import React, { useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

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

function RecipeForm(){
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
        <RecipeFormStyle>
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
                <div className='buttons'>
                    <Trash>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </Trash>
                    <Check>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </Check>
                </div>
            </div>
        </RecipeFormStyle>
    )
}

export default RecipeForm