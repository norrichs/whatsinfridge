import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const IngredientMissing = ({
	ingredient,
	handleAddSearchTerm,
	handleRemoveMissingIngredient,
	handleAddToShoppingList,
	handleAddToExcludeList
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
		handleAddToShoppingList(ingredient)
	};
	// Currently disabled
	// const handleExclude = (ingredient) => {

	// 	handleAddToExcludeList(ingredient)
	// };

	return (
		<div className="missing-ingredient">
			<div>{ingredient.name}</div>
			<div>
				{/* TODO fontawesome icons to use maybe: ban, trash, cart-plus, thumbs-up, check-circle, */}
				<button onClick={() => handleHave(ingredient)}>
					<FontAwesomeIcon style={{color: "green"}} icon={faThumbsUp} />
				</button>
				<button onClick={() => handleGet(ingredient)}><FontAwesomeIcon style={{color: "cornflowerblue"}} icon={faShoppingCart} /></button>
			
			{/* Ban button is currently disabled as searching with exclusion list not implemented */}
				{/* <button onClick={() => handleExclude(ingredient)}>
				<FontAwesomeIcon style={{color: "red"}} icon={faBan} />
				</button> */}
			
			</div>
		</div>
	);
};
export default IngredientMissing;
