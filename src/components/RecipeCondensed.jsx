import React from "react";
import { useHistory} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimesCircle,
	faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";

const RecipeCondensed = ({
	recipe,
	handleSaveClick,
	handleNopeClick
	// ,
	// handleRecipeDisplay,
}) => {
	// console.log("RecipeCondensed props", recipe);
	const history = useHistory();
	const handleRecipeClick = () => {
		console.log("handleRecipeClick", recipe);
		history.push(`/Recipe/${recipe.id}`)
	};
	const missedIngredients = () => {
		let missedList = null;
		if(recipe.missedIngredients.length > 0){
			missedList = recipe.missedIngredients.map((ingredient)=>{
				 return (
					 <div>{ingredient.name}</div>
				 )
			})
		}else{
			return <div>none</div>
		}

		return (
			<div>
				<div>missing:</div>
				{missedList}
			</div>
		)
	}

	return (
		<div className="recipe-condensed">
			{/* <img src={recipe.image}/> */}
			{/* <Link to={`/Recipe/${recipe.id}`}> */}
				<div
					onClick={handleRecipeClick}
					className="rc-thumbnail"
					style={{ backgroundImage: `url(${recipe.image})` }}
				></div>
			{/* </Link> */}

			<div className="rc-title">
				{recipe.title}
			</div>
			<div className="rc-text">{missedIngredients()}</div>
			<div
				className="rc-button-nope"
				onClick={() => {
					handleNopeClick(recipe);
				}}
			>
				<FontAwesomeIcon icon={faTimesCircle} />
			</div>
			<div
				className="rc-button-save"
				onClick={() => {
					handleSaveClick(recipe);
				}}
			>
				<FontAwesomeIcon icon={faFolderPlus} />
			</div>
		</div>
	);
};
export default RecipeCondensed;
