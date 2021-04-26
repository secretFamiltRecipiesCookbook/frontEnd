import React, { useState } from 'react';
import '../App.css';
import NavBarWx from './NavBarWx.js';
import RecipeCard from './RecipeCard.js';

const initialRecipe = [
	{
		name: "Mom's Bread",
		ingredients: [
			{ amount: '600 g', ingredient: 'bread flour' },
			{ amount: '7 g', ingredient: 'fast acting dried yeast' },
			{ amount: '1-2 tsp', ingredient: 'salt' },
			{ amount: '460 ml', ingredient: 'water' }
		],
		directions: ['direction set 1', 'direction set 2', 'direction set 3']
	},
	{
		name: "Dad's Bread",
		ingredients: [
			{ amount: '500 g', ingredient: 'mesa flour' },
			{ amount: '17 g', ingredient: 'slow acting wet yeast' },
			{ amount: '1-2 tbsp', ingredient: 'salt' },
			{ amount: '460 gal', ingredient: 'rain water' }
		],
		directions: ['direction set 1a', 'direction set 2a', 'direction set 3a']
	}
];

function App() {
	const [recipes, setRecipes] = useState(initialRecipe);

	return (
		<>
			<NavBarWx />
			<div>Main Image</div>
			{recipes.map((recipe, index) => {
				return <RecipeCard key={index} recipe={recipe} />;
			})}
		</>
	);
}

export default App;
