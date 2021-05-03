import React from "react";

const RecipeCondensed = ({
	index,
	recipe,
	handleSaveClick,
	handleNopeClick,
}) => {
	// console.log("RecipeCondensed props", recipe);
	return (
		<div className="recipe-condensed">
			{/* <img src={recipe.image}/> */}
			<div
				className="rc-thumbnail"
				style={{ backgroundImage: `url(${recipe.image})` }}
			></div>
			<div className="rc-title">
				<span>{index}</span>
				{recipe.title}
			</div>
			<div className="rc-text">{recipe.image}</div>
			<button
				className="rc-button-nope"
				onClick={() => {
					handleNopeClick(recipe);
				}}
			>
				nope
			</button>
			<button
				className="rc-button-save"
				onClick={() => {
					handleSaveClick(recipe);
				}}
			>
				save
			</button>
		</div>
	);
};
export default RecipeCondensed;
