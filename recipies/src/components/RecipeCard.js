import React, { useState } from 'react';
import styled from 'styled-components';

const RecipeCardDiv = styled.div`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		transition: all 0.5s ease;
		margin: 0;
		padding: 0;
	}

	#container {
		width: 100%;
		max-width: 400px;
		background: white;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		border-radius: 20px;
		margin: 5% 5% 0 0;
		/* position: absolute; */
		/* top: 50%; */
		/* left: 50%; */
		/* transform: translate(-50%, -50%); */
	}

	#container.closed header,
	header {
		cursor: pointer;
	}

	.header {
		width: 100%;
		height: 250px;
		background: center / cover;
		/* background-image: url('https://moorlandseater.com/wp-content/uploads/2018/05/no-knead-bread-for-beginners-sliced-on-a-board-moorlands-eater-DSC07055.jpg'); */
	}

	.title {
		position: relative;
		z-index: 1;
		font-size: 2rem;
		border-bottom: 2px solid rgba(0, 0, 0, 0.1);
		padding: 20px;
		margin-top: 0px;
	}

	#container.closed .title {
		padding: 40px 20px 10px 20px;
		margin-top: -87px; // this moves the title up into the picture when its closed
		color: white;
		border: none;
	}

	.title:before {
		z-index: -1;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
		opacity: 0;
	}

	#container.closed .title:before {
		opacity: 1;
	}

	article {
		padding: 25px 30px;
		overflow: hidden; // keeps from seeing all the recipe when the card is closed
		/* max-height: 400px; */ //
	}

	#container.closed article {
		max-height: 0px;
		padding: 0 30px;
	}

	.ingredients {
		margin: 0px;
		padding: 0px;
		margin-bottom: 20px;
		padding-left: 4px;
		font-size: 0.9rem;
		display: flex;
		/* justify-content: space-between; */
	}

	.ingredients > li {
		list-style-type: none;
		margin: 4px 0px;
	}

	.ingredients > li > .amount {
		width: 80%;
	}

	.amount {
		color: #9bb4ec;
	}

	.preparation > p {
		margin-bottom: 10px;
	}
`;

export default function RecipeCard({ recipe }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<RecipeCardDiv>
			<div className={isOpen ? '' : 'closed'} id="container" onClick={() => setIsOpen(!isOpen)}>
				<header id="toggle">
					<div className="header" style={{ backgroundImage: `url(${recipe.backgroundImage})` }}></div>
					<div className="title">{recipe.name}</div>
				</header>
				<article>
					<ul>
						{recipe.ingredients.map((ingredient, index) => {
							return (
								<li key="index" className="ingredients">
									<div className="amount">{ingredient.amount} -</div>
									<div className="ingredient"> - {ingredient.ingredient}</div>
								</li>
							);
						})}
					</ul>
					<div className="preparation">
						{recipe.directions.map((direction, index) => {
							return <p key="index">{direction}</p>;
						})}
					</div>
				</article>
			</div>
		</RecipeCardDiv>
	);
}
