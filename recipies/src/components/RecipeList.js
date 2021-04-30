import {fetchRecipes} from './../Actions/actions.js';
import React, { useEffect} from 'react';
import { connect } from "react-redux";
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

const Div = styled.div`
.Btn{
margin-top:8%;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
text-align:center;
width: 12%;
margin-left: 44%;
border-radius: 7px;
padding-top:5px;
padding-bottom:5px;
color:white;
background: linear-gradient(to right, #ccbe1d, #fc9471);
}
`

const RecipeList = (props) => {

const { push } = useHistory();

const {fetchRecipes} = props;
useEffect(() => {
    fetchRecipes();
},[] );
if (props.isLoading) {
    return <h1>Loading...</h1>;
}


const handleAddRecipe = (e) => {
	e.preventDefault();
	push('/add-recipe')
}
return( 
		<Div>
            <CardsContainer>
				{props.recipes.map((recipe) => {
					return <RecipeCard key={Math.random()} recipe={recipe} />;
				})}
				
			</CardsContainer>
			<button className='Btn' onClick={handleAddRecipe}>Add Recipe</button>
		</Div>
            )
        }










           
const mapStateToProps = (state) => {
    return {
      ...state
    };
  };

export default connect(mapStateToProps, {fetchRecipes})(RecipeList); 