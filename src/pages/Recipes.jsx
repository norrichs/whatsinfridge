import React from "react";
import Header from "../components/Header";
import RecipeCondensed from "../components/RecipeCondensed";

const Recipes = ({ savedRecipes }) => {
	console.log(savedRecipes);
	const handleRecipeDisplay = (recipe) => {
		console.log("Recipe handleRecipeDisplay", recipe);
	};

	const selectedRecipes = savedRecipes.map((recipe, index) => {
		return (
			<RecipeCondensed
				handleRecipeDisplay={handleRecipeDisplay}
				recipe={recipe}
				key={index}
			/>
		);
	});
	// TODO delete this, no longer needed, using Link instead
	// const handleRecipeClick = (recipe) => {
	// 	console.log("Recipes handleRecipeClick", recipe);
	// };
	return (
		<div>
			<Header />
			{selectedRecipes}
		</div>
	);
};
export default Recipes;
