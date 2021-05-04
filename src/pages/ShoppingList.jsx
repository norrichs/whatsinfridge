import React from "react";
import IngredientToBuy from "../components/IngredientToBuy";
import Header from "../components/Header";

const ShoppingList = ({ shoppingList,handleRemoveFromShoppingList }) => {
	const shoppingListDisplay = shoppingList.map((ingredient, index) => {
		return (
			<IngredientToBuy
				ingredient={ingredient}
				handleRemoveFromShoppingList={handleRemoveFromShoppingList}
				key={index}
			/>
		);
	});
	return (
		<div className="shopping-list">
			<Header />
			<h1>buy this stuff</h1>
			<section className="ingredients-area">
				{shoppingListDisplay ? shoppingListDisplay : "loading"}
			</section>
		</div>
	);
};

export default ShoppingList;
