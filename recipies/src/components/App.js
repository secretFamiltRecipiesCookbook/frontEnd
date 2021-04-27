import React, { useState } from 'react';
import '../App.css';
import NavBarWx from './NavBarWx.js';
import RecipeCard from './RecipeCard.js';
import styled from 'styled-components';

const initialRecipe = [
	{
		name: 'Cheesy Grd Beef Tacos',
		ingredients: [
			{ amount: '1', ingredient: 'large onion, chopped' },
			{ amount: '1 lb.', ingredient: 'ground beef' },
			{ amount: '1 (15-oz.) can', ingredient: 'fire-roasted tomatoes' },
			{ amount: '1 (15-oz.) can', ingredient: ' black beans, drained and rinsed' },
			{ amount: '1 tbsp. ', ingredient: 'taco seasoning' },
			{ amount: '', ingredient: 'kosher salt' },
			{ amount: '2 c.', ingredient: ' shredded cheddar or pepper jack' },
			{ amount: '8 Small', ingredient: ' flour tortillas' },
			{ amount: '', ingredient: 'Sliced green onions, for serving' },
			{ amount: '', ingredient: 'Sour cream, for serving' }
		],
		directions: [
			'In a large skillet over medium-high heat, cook onion until soft, 6 minutes. Add beef and cook until no longer pink, 5 to 7 minutes more, then add tomatoes, black beans, and taco seasoning and season with salt. Stir until combined. Add cheese and stir until completely melted',
			'Spoon mixture into flour tortillas and fold. Garnish with green onions and serve with sour cream.'
		],
		backgroundImage:
			'https://moorlandseater.com/wp-content/uploads/2018/05/no-knead-bread-for-beginners-sliced-on-a-board-moorlands-eater-DSC07055.jpg'
	},
	{
		name: 'Black Bean Tostadas',
		ingredients: [
			{ amount: '500 g', ingredient: 'mesa flour' },
			{ amount: '17 g', ingredient: 'slow acting wet yeast' },
			{ amount: '1-2 tbsp', ingredient: 'salt' },
			{ amount: '460 gal', ingredient: 'rain water' }
		],
		directions: [
			'Preheat oven to 350°. In a small saucepan over medium heat, add beans and 1 cup of water. Bring to a simmer and let simmer until beans are warmed through, about 10 minutes. Smash with a wooden spoon until most of the beans are smashed with some whole remaining. Add more water as needed to help create a smoother consistency. ',
			'Meanwhile, place tostadas on a large baking sheet and sprinkle cheese evenly over each. Bake until cheese is melty, about 5 minutes. ',
			'Top tostadas with beans, avocado slices, and hot sauce.'
		],
		backgroundImage:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202101-blackbeantostadas-046-ls-1610740382.jpg?crop=0.835xw:1.00xh;0,0&resize=980:*'
	}
];

function App() {
	const [recipes, setRecipes] = useState(initialRecipe);

	return (
		<>
			<NavBarWx />
			<div>Main Image</div>
			<div className="cards-container">
				{recipes.map((recipe, index) => {
					return <RecipeCard key={index} recipe={recipe} />;
				})}
			</div>
		</>
	);
}

export default App;
