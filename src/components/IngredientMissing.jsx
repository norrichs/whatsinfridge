import React from "react";

const IngredientMissing = ({ ingredient, handleAddSearchTerm }) => {
	// console.log("Ingredient missing props", ingredient);

	//
	const handleHave = (name) => {
		console.log("handleHave", name);
		handleAddSearchTerm(name)
	};
	const handleGet = (id) => {
		console.log("handleGet", id);
	};
	const handleExclude = (id) => {
		console.log("handleExclude", id);
	};

	return (
		<div className="missing-ingredient">
			<div>{ingredient.name}</div>
			<div>
				{/* TODO fontawesome icons to use maybe: ban, trash, cart-plus, thumbs-up, check-circle, */}
				<button onClick={() => handleHave(ingredient.name)}>have</button>
				<button onClick={() => handleGet(ingredient.id)}>get</button>
				<button onClick={() => handleExclude(ingredient.id)}>
					ban
				</button>
			</div>
		</div>
	);
};
export default IngredientMissing;
