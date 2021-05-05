import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

const IngredientToBuy = ({ ingredient, handleRemoveFromShoppingList }) => {
	const [status, setStatus] = useState("to-buy");

	const handleCheck = () => {
		status === "to-buy" ? setStatus("bought") : setStatus("to-buy");
	};
	const handleClear = () => {
		handleRemoveFromShoppingList(ingredient);
	};

	return (
		<div className={`list-ingredient ${status}`}>
			<div>{ingredient.name}</div>
			<div>
				<button onClick={handleCheck}>
					<FontAwesomeIcon icon={faCheck} />
				</button>
				<button onClick={handleClear}>
					<FontAwesomeIcon icon={faBan} />
				</button>
			</div>
		</div>
	);
};
export default IngredientToBuy;


