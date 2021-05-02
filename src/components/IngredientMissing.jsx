import React from "react";

const IngredientMissing = ({ ingredient }) => {
	// console.log("Ingredient missing props", ingredient);

	return (
		<div className="missing-ingredient">
			<div>{ingredient}</div>
			<div>
				<button>+</button>
				<button>-</button>
			</div>
		</div>
	);
};
export default IngredientMissing;
