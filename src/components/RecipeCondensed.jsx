import React from "react";

const RecipeCondensed = ({index, recipe }) => {
	// console.log("RecipeCondensed props", recipe);
	return (
		<div className="recipe-condensed">
			<div>
				<div><span>{index}</span>{recipe.title}</div>
				<div>{recipe.image}</div>
			</div>
			<div>
				<button>nope</button>
				<button>save</button>
			</div>
		</div>
	);
};
export default RecipeCondensed;
