import React, { useState } from 'react';
import './RecipeForm.css';
import axios from "axios";


const recipes = [
    {name:'', email:'', recipeName:'', item1:'', instructions:''}
]

const initialValues = {
    name: '',
    email:'',
    recipeName: '',
    item1:'',
    instructions:'',
}

function Recipe(){
    const [user, setUser] = useState(recipes);
    const [formValues, setFormValues] = useState(initialValues);


    const change = ev => {
        const { name, value } = ev.target
        console.log(name)
        console.log(value)
        setFormValues({...formValues, [name]: value})
    }

    const submit = ev => {
        ev.preventDefault();
        const newUser = {
            name: formValues.name,
            email: formValues.email,
            recipeName: formValues.recipeName,
            item1: formValues.item1,
            instructions: formValues.instructions,
        }
        axios.post('https://reqres.in/api/orders', newUser)
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
                {user.map((user,asd) => {
                    return(
                        <div key={asd}>
                            {user.name} {user.email} {user.recipeName} {user.instructions}
                        </div>
                    )
                })}
                <form onSubmit={submit}>
                    <ul>
                    <li>
                    Name:<input 
                        type='text'
                        onChange={change}
                        value={formValues.name}
                        name='name'
                        />
                    </li>
                    <li>
                    Email:<input 
                        type='text'
                        onChange={change}
                        value={formValues.eamil}
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
                    item 1:<input 
                        type='text'
                        onChange={change}
                        value={formValues.item1}
                        name='item1'
                        />
                    </li>
                    <li>
                    instructions:<textarea 
                        type='text'
                        onChange={change}
                        value={formValues.instructions}
                        name='name'
                        />
                    </li>
                    </ul>
                </form>
                <button>Submit</button>
            </div>
    )
}

export default Recipe