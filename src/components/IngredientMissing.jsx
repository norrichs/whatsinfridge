import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faTimesCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const IngredientMissing = ({
	ingredient,
	handleAddSearchTerm,
	handleRemoveMissingIngredient,
	handleAddToShoppingList
}) => {
	// console.log("Ingredient missing props", ingredient);

	//
	const handleHave = (ingredient) => {
		console.log("handleHave", ingredient);
		handleAddSearchTerm(ingredient.name);
		handleRemoveMissingIngredient(ingredient.id);
		// TODO - implement remove this ingredinet from list
	};
	const handleGet = (ingredient) => {
		console.log("handleGet", ingredient);
		handleAddToShoppingList(ingredient)
	};
	const handleExclude = (id) => {
		console.log("handleExclude", id);
	};

	return (
		<div className="missing-ingredient">
			<div>{ingredient.name}</div>
			<div>
				{/* TODO fontawesome icons to use maybe: ban, trash, cart-plus, thumbs-up, check-circle, */}
				<button onClick={() => handleHave(ingredient)}>
					<FontAwesomeIcon icon={faThumbsUp} />
				</button>
				<button onClick={() => handleGet(ingredient)}><FontAwesomeIcon icon={faShoppingCart} /></button>
				<button onClick={() => handleExclude(ingredient.id)}>
				<FontAwesomeIcon icon={faTimesCircle} />
				</button>
			</div>
		</div>
	);
};
export default IngredientMissing;
