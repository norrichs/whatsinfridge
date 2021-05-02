import React from "react";
import Header from "../components/Header";
import RecipeCondensed from '../components/RecipeCondensed'
const Recipes = () => {
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
	const selectedRecipes = dummyRecipeList.map((recipe, index) => {
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
