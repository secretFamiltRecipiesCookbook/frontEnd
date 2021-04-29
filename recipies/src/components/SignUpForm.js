import React, {useState}from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUpFormDiv = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		height: auto;
		width: 50%;
		box-shadow: 0px 5px 10px RGBA(225, 226, 224, 1);
		background: linear-gradient(to right, #ccbe1d, #fc9471);
		margin: 0 auto;
		border-radius: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: white;
		text-align: center;
		padding: 2%;
	}

	form {
		display: flex;

		justify-content: center;
		align-items: center;
	}
	ul {
		list-style-type: none;
		margin: 0 auto 2rem;
	}

	li {
		display: flex;
		flex-direction: column;

		/* flex-flow: column wrap; */
		justify-content: center;
		align-items: center;
		/* padding: 1rem; */
		margin: 0.5rem 0 1rem 0;
	}

	input {
		border-radius: 25px;
		border: none;
		width: 500px;
		height: 50px;
	}

	.buttons {
		margin: 0% auto;
		padding: 2% 0;
		display: flex;
		flex-flow: horizontal wrap;
		justify-content: space-between;
		width: 40%;
	}
	.cta-btn {
		color: #ccbe1d;
		font-size: 1.5rem;
		background-color: white;
		padding: 0.7rem 1rem;
		border: none;
		border-radius: 30px;
		margin-bottom: 2rem;
	}
`;
const initialForm = {
	username: '',
	phone_number: '',
	password: '',
  }
  
  const initialFormErrors = {
	username: '',
	phone_number: '',
	password: '',
  }
  
  const initialDisabled = true
  
 
  
  
export default function SignUpForm() {
	
  const [user, setUser] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();
	// const change = ev => {
	// 	const { name, value } = ev.target;
	// 	console.log(name);
	// 	console.log(value);
	// 	setFormValues({ ...formValues, [name]: value });
	// };

	// const submit = ev => {
	// 	ev.preventDefault();
	// 	const newRecipe = {
	// 		source: formValues.source,
	// 		email: formValues.email,
	// 		recipeName: formValues.recipeName,
	// 		ingrediants: formValues.ingrediants,
	// 		instructions: formValues.instructions
	// 	};
	// 	axios
	// 		.post('https://buildweekrecipes.herokuapp.com/api/recipes', newRecipe)
	// 		.then(res => {
	// 			setFormValues(initialValues);
	// 			console.log(initialValues);
	// 		})
	// 		.catch(err => {});
	// };
	const onChange = (e) => {
		setUser({
		  ...user,
		  [e.target.name]: e.target.value
		})}
	  
		const onSubmit = (e) => {
		  e.preventDefault();
		  axios
		  .post('https://buildweekrecipes.herokuapp.com/api/auth/register', user)
		  .then((res) => {
			push('./recipes');
			console.log(res.data);
		  })
		  .catch((err) =>{
			console.log('Username or password not valid, must be unique username.', err);
		  })
		}

	return (
		<SignUpFormDiv>
			<div className="container">
				<h1>Create a ReciPeazy IDeazy</h1>
				<form>
					<ul>
						<li>
							User Name:
							<input type="text" onChange={onChange} name="username" />
						</li>
						<li>
							Password:
							<input type="password" onChange={onChange} name="password" />
						</li>
					</ul>
				</form>
				<button onClick = {onSubmit} className="cta-btn">SUBMIT</button>
			</div>
		</SignUpFormDiv>
	);
}
