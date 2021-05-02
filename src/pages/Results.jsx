import React from "react";
import RecipeCondensed from "../components/RecipeCondensed";
import IngredientMissing from "../components/IngredientMissing";
import Header from "../components/Header";

const Results = (props) => {
	console.log('results props', props)


	const dummyRecipeList = [
		{
			name: "rec 1",
			snippet: "beans, beans, beans",
		},
		{
			name: "rec 2",
			snippet: "carrots and pork",
		},
		{
			name: "rec 3",
			snippet: "rice and muck",
		},
		{
			name: "rec 4",
			snippet: "cheese bits",
		},
	];
	const recipeResults = dummyRecipeList.map((recipe, index) => {
		return <RecipeCondensed recipe={recipe} key={index} />;
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
			<section>{recipeResults}</section>
			<div className="missing-ingredients-header">
				<h2>...do you have?</h2>
				<button>refresh recipes</button>
			</div>

			<section>{missingIngredient}</section>
		</div>
	);
};
export default Results;
