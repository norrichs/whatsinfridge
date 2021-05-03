import React from "react";
import Header from "../components/Header";
import RecipeCondensed from '../components/RecipeCondensed'
const Recipes = ({savedRecipes}) => {
	console.log(savedRecipes)
	const selectedRecipes = savedRecipes.map((recipe, index) => {
		return <RecipeCondensed recipe={recipe} key={index} />;
	});

	return (
		<div>
			<Header />
			<h1>Recipes</h1>
			{selectedRecipes}
		</div>
	);
};
export default Recipes;
