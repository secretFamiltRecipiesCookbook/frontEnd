import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
// import { axiosWithAuth } from './utils/axiosWithAuth';

const LogInFormStyle = styled.div`
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
// const initialFormValues = {
// 	username: "",
// 	password: "",
// };
  
//   const initialFormErrors = {
// 	username: "",
// 	password: "",
//   };
  
const initialUsers = [];
// const initialDisabled = true;

export default function LogInForm(props) {

	// const [formValues, setFormValues] = useState(initialFormValues);

	// const [disabled, setDisabled] = useState(initialDisabled);

	const [users, setUsers] = useState(initialUsers);

	const { push } = useHistory();


	const onSubmit = (e) => {
		e.preventDefault();
		console.log (users)
		axios
		.post('https://buildweekrecipes.herokuapp.com/api/auth/login', users)
		.then((res) => {
			
			localStorage.setItem('token', res.data.token);
			push('./recipes');
			console.log(res.data.token);
		})
		.catch((err) => {
			console.log('Username or password not valid.', err);
		})
	};
	// const change = ev => {
	// 	const { name, value } = ev.target;
	// 	console.log(name);
	// 	console.log(value);
	// 	setFormValues({ ...formValues, [name]: value });
	// };
const onChange = (e) => {
	setUsers({
		...users,
		[e.target.name]: e.target.value,
	})
};
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

	return (
		<LogInFormStyle>
			<form onSubmit={ onSubmit }>
			<div className="container">
				<h1>Log In</h1>
				<form>
					<ul>
						<li>
							User Name:
							<input type="text" value={users.username} onChange={onChange} name="username" />
						</li>
						<li>
							Password:
							<input type="password" onChange={onChange} name="password" />
						</li>
					</ul>
				</form>
				<button className="cta-btn">Log in</button>
			</div>
			</form>
		</LogInFormStyle>
	);
}
