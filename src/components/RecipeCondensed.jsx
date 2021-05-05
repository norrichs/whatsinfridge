import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimesCircle,
	faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";

const RecipeCondensed = ({
	index,
	recipe,
	handleSaveClick,
	handleNopeClick
	// ,
	// handleRecipeDisplay,
}) => {
	// console.log("RecipeCondensed props", recipe);

	// const handleRecipeClick = () => {
	// 	console.log("handleRecipeClick", recipe);
	// 	handleRecipeDisplay(recipe);
	// };
	return (
		<div className="recipe-condensed">
			{/* <img src={recipe.image}/> */}
			<Link to={`/Recipe/${recipe.id}`}>
				<div
					className="rc-thumbnail"
					style={{ backgroundImage: `url(${recipe.image})` }}
				></div>
			</Link>

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
				<FontAwesomeIcon icon={faTimesCircle} />
			</button>
			<button
				className="rc-button-save"
				onClick={() => {
					handleSaveClick(recipe);
				}}
			>
				<FontAwesomeIcon icon={faFolderPlus} />
			</button>
		</div>
	);
};
export default RecipeCondensed;
