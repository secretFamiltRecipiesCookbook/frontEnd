import {fetchRecipes} from './../Actions/actions.js';
import React, { useEffect} from 'react';
import { connect } from "react-redux";
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const CardsContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	/* TABLET ZONE */
	@media screen and (max-width: 1024px) {
    	justify-content: space-around;
	}

	/* MOBILE DESIGN  */
	@media screen and (max-width: 768px) {
	
		}
`;

const RecipeList = (props) => {
const {fetchRecipes} = props;
useEffect(() => {
    fetchRecipes();
}, []);
if (props.isLoading) {
    return <h1>Loading...</h1>;
}
console.log (props.recipes)
return( 
            <CardsContainer>
				{props.recipes.map((recipe) => {
					return <RecipeCard key={Math.random()} recipe={recipe} />;
				})}
			</CardsContainer>
            )
        }










           
const mapStateToProps = (state) => {
    return {
      ...state
    };
  };

export default connect(mapStateToProps, {fetchRecipes})(RecipeList); 