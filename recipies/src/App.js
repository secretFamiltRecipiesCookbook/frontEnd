import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import './App.css';


import AddRecipeForm from './components/AddRecipeForm';
import UpdateRecipeForm from './components/UpdateRecipeForm';
import LandingPage from './components/LandingPage';
import LogInForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';
import PrivateRoute from "./components/PrivateRoute";
import RecipeList from './components/RecipeList';



// const initialRecipe = [
// 	{
// 		name: 'Cheesy Grd Beef Tacos',
// 		source: 'Grandma Ethel',
// 		ingredients: [
// 			{ amount: '1', ingredient: 'large onion, chopped' },
// 			{ amount: '1 lb.', ingredient: 'ground beef' },
// 			{ amount: '1 (15-oz.) can', ingredient: 'fire-roasted tomatoes' },
// 			{ amount: '1 (15-oz.) can', ingredient: ' black beans, drained and rinsed' },
// 			{ amount: '1 tbsp. ', ingredient: 'taco seasoning' },
// 			{ amount: '', ingredient: 'kosher salt' },
// 			{ amount: '2 c.', ingredient: ' shredded cheddar or pepper jack' },
// 			{ amount: '8 Small', ingredient: ' flour tortillas' },
// 			{ amount: '', ingredient: 'Sliced green onions, for serving' },
// 			{ amount: '', ingredient: 'Sour cream, for serving' }
// 		],
// 		directions: [
// 			'In a large skillet over medium-high heat, cook onion until soft, 6 minutes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted',
// 			'Spoon mixture into flour tortillas and fold. Garnish with green onions and serve with sour cream.'
// 		],
// 		category: ['dinner', 'mexican'],
// 		backgroundImage:
// 			'https://hips.hearstapps.com/del.h-cdn.co/assets/16/13/2048x2338/gallery-1459442142-delish-cheesy-ground-beef-tacos.jpg?resize=980:*'
// 	},
// 	{
// 		name: 'Black Bean Tostadas',
// 		source: 'Grandpa Jimmy',
// 		ingredients: [
// 			{ amount: '500 g', ingredient: 'mesa flour' },
// 			{ amount: '17 g', ingredient: 'slow acting wet yeast' },
// 			{ amount: '1-2 tbsp', ingredient: 'salt' },
// 			{ amount: '460 gal', ingredient: 'rain water' }
// 		],
// 		directions: [
// 			'Preheat oven to 350°. In a small saucepan over medium heat, add beans and 1 cup of water. Bring to a simmer and let simmer until beans are warmed through, about 10 minutes. Smash with a wooden spoon until most of the beans are smashed with some whole remaining. Add more water as needed to help create a smoother consistency. ',
// 			'Meanwhile, place tostadas on a large baking sheet and sprinkle cheese evenly over each. Bake until cheese is melty, about 5 minutes. ',
// 			'Top tostadas with beans, avocado slices, and hot sauce.'
// 		],
// 		category: ['snack', 'mexican'],
// 		backgroundImage:
// 			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202101-blackbeantostadas-046-ls-1610740382.jpg?crop=0.835xw:1.00xh;0,0&resize=980:*'
// 	}
// ];

// const dummyLogIn = { username: '', password: '' };

function App() {
	// const [logInInfo, setLogInInfo] = useState(dummyLogIn);
	// // eslint-disable-next-line
	// const [recipes, setRecipes] = useState(initialRecipe);

	return (
		<div className = 'app'>
		<Router>
			<PrivateRoute path = '/recipes' component = {RecipeList} />
			<PrivateRoute path = '/add-recipe' component = {AddRecipeForm} />
			<Route path = '/edit-recipe/:id' component = {UpdateRecipeForm} />
			<Route exact path = '/' component = {LandingPage} />
			<Route exact path = '/signup' component = {SignUpForm} />
			<Route exact path = '/login' component = {LogInForm} />
		</Router>
		</div>
	);
}

export default App;
