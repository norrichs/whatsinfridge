import React from "react";
import RecipeCondensed from "../components/RecipeCondensed";
import IngredientMissing from "../components/IngredientMissing";
import Header from "../components/Header";

const Results = ({ resultRecipes, handleSaveClick, handleNopeClick}) => {
	console.log("results props", resultRecipes);
	// alert(resultRecipes)
	console.log(resultRecipes);
	const recipeDisplayArray = resultRecipes.map((recipe, index) => {
		return (
			<RecipeCondensed
				handleNopeClick={handleNopeClick}
				handleSaveClick={handleSaveClick}
				index={index}
				recipe={recipe}
				key={index}
			/>
		);
	});
	const dummyMissing = [
		"pickles",
		"ham",
		"string beans",
		"salmon roe",
		"heavy cream",
		"turnips",
		"beef broth",
		"flavored water",
	];
	const missingIngredient = dummyMissing.map((ingredient, index) => {
		return <IngredientMissing ingredient={ingredient} key={index} />;
	});

	return (
		<div className="results-page">
			<Header />
			<h1>you can make...</h1>
			<section className="recipe-area">{recipeDisplayArray}</section>
			<div className="missing-ingredients-header">
				<div>...do you have?</div>
				<button>refresh recipes</button>
			</div>

			<section className="ingredients-area">{missingIngredient}</section>
		</div>
	);
};
export default Results;
