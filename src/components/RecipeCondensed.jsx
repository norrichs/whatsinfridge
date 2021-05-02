import React from "react";

const RecipeCondensed = ({ recipe }) => {
	console.log("RecipeCondensed props", recipe);
	return (
		<div className="recipe-condensed">
			<div>
				<div>{recipe.name}</div>
				<div>{recipe.snippet}</div>
			</div>
			<div>
				<button>nope</button>
				<button>save</button>
			</div>
		</div>
	);
};
export default RecipeCondensed;
