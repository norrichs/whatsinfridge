import React from "react";
import RecipeCondensed from "../components/RecipeCondensed";
import IngredientMissing from "../components/IngredientMissing";
import Header from "../components/Header";

const Results = ({
	resultRecipes,
	missingIngredients,
	handleSaveClick,
	handleNopeClick,
	handleAddSearchTerm,
	handleRefreshRecipes
}) => {
	console.log("results recipes", resultRecipes);
	// alert(resultRecipes)
	// console.log(resultRecipes);
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

	const handleRefresh = () => {
		handleRefreshRecipes()
	}




	let missingIngredientsDisplay = null;
	// console.log("missing ingredients (results)", missingIngredients);
	if (missingIngredients !== undefined) {
		missingIngredientsDisplay = [...missingIngredients.values()].map(
			(ingredient, index) => {
				return (
					<IngredientMissing
						handleAddSearchTerm={handleAddSearchTerm}
						ingredient={ingredient}
						key={index}
					/>
				);
			}
		);
		// console.log(missingIngredientsDisplay);
	}

	return (
		<div className="results-page">
			<Header />
			<h1>you can make...</h1>
			<section className="recipe-area">{recipeDisplayArray}</section>
			<div className="missing-ingredients-header">
				<div>...do you have?</div>
				<button onClick={handleRefresh}>refresh recipes</button>
			</div>

			<section className="ingredients-area">
				{missingIngredientsDisplay
					? missingIngredientsDisplay
					: "loading"}
			</section>
		</div>
	);
};
export default Results;
