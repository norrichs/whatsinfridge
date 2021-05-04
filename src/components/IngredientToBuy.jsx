import React, {useState} from "react";


const IngredientToBuy = ({ ingredient, handleRemoveFromShoppingList }) => {
	const [status, setStatus] = useState("to-buy")

	const handleCheck = () => {
		status === "to-buy"
			? setStatus("bought")
			: setStatus("to-buy")
	}
	const handleClear = () => {
		handleRemoveFromShoppingList(ingredient)
	}

	return (
		<div className={`list-ingredient ${status}`} >
			<div>{ingredient.name}</div>
			<div>
				<button onClick={handleCheck}>got it</button>
				<button onClick={handleClear}>clear</button>
			</div>
		</div>
	);
}
export default IngredientToBuy;
