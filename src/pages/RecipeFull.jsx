import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const RecipeFull = ({ recipe }) => {
	console.log("RecipeFull recipe:", recipe);
	// console.log("instructions", recipe.analyzedInstructions);

	const ingredientList = () => {
		if (recipe.extendedIngredients.length === 0) {
			return <div>no ingredients listed... wing it!</div>;
		} else {
			return (
				<ul>
					{recipe.extendedIngredients.map((i, index) => {
						return (
							<div key={index} className="recipe-ingredient">
								<span>{i.measures.us.amount}</span>
								<span>{i.measures.us.unitShort}</span>
								<span>{i.nameClean}</span>
							</div>
						);
					})}
				</ul>
			);
		}
	};

	const instructionsList = () => {
		if (recipe.analyzedInstructions.length === 0) {
			return <div>no instructions given ... wing it!</div>;
		} else {
			// console.log("instructions to map",recipe.analyzedInstructions[0].step)
			return (
				<ul>
					{recipe.analyzedInstructions[0].steps.map((instruction) => {
						console.log("mapping instructions", instruction.step);
						return <div>{instruction.step}</div>;
					})}
				</ul>
			);
		}
	};

	return (
		<div>
			<Header />

			<div
				className="recipe-banner"
				style={{
					backgroundImage: `url(${recipe.image}`,
				}}
			>
				<div>
					<span>{recipe.title}</span>
					<a
						href={recipe.sourceUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
				</div>
			</div>

			<section className="ingredients">
				<h3>Ingredients</h3>
				{ingredientList()}
			</section>
			<section className="instructions">
				<h3>Instructions</h3>
				{instructionsList()}
			</section>
		</div>
	);
};
export default RecipeFull;
