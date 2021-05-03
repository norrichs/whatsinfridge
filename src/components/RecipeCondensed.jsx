import React from "react";

const RecipeCondensed = ({index, recipe, handleSaveClick, handleNopeClick }) => {
	// console.log("RecipeCondensed props", recipe);
	return (
		<div className="recipe-condensed">
			<div>
				<div><span>{index}</span>{recipe.title}</div>
				<div>{recipe.image}</div>
			</div>
			<div>
				<button onClick={()=>{handleNopeClick(recipe)}}>nope</button>
				<button onClick={()=>{handleSaveClick(recipe)}}>save</button>
			</div>
		</div>
	);
};
export default RecipeCondensed;
