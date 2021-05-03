import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import { useState, useEffect } from "react";

function App() {
	const [searchTermsArray, setSearchTermsArray] = useState([]);
	const [resultRecipes, setResultRecipes] = useState(null);
	const [savedRecipes, setSavedRecipes] = useState([]);
	const [missingIngredients, setMissingIngredients] = useState([]);
	const [shoppingList, setShoppingList] = useState([]);
	const [resultLimit, setResultLimit] = useState(5);
	// Search form results handler
	//
	const handleSearch = (searchTerm) => {
		console.log("App handleSearch", searchTerm);
		//TODO move searchTerm processing to search page
		const cleanSearchTerm = processSearchTerm(searchTerm);
		getResult(cleanSearchTerm);
		setSearchTermsArray(cleanSearchTerm.split("%2C"));
		console.log("searchTermsArray", searchTermsArray);
	};
	const handleSaveClick = (recipe) => {
		// TODO construct query and an call API to retrieve full recipe info and store in array
		console.log("handle save click", recipe.id, recipe.title);
		setSavedRecipes([...savedRecipes, recipe]);
	};
	const handleNopeClick = (recipe) => {
		console.log("handle nope click", recipe.id, recipe.title);
		// TODO remove matching recipe from resultRecipes array by iterating through, looking for matching ID
		//  setResultRecipes( resultRecipes.splice( resultRecipes.map((recipe, index) => {recipe.id}).indexOf(recipeID), 1 )
	};

	const handleAddSearchTerm = (term) => {
		console.log("add search term", term);
		const newSearchTerm = [...searchTermsArray, term];
		console.log("newSearch", newSearchTerm);
		setSearchTermsArray(newSearchTerm);
	};

	// Process form string to API compliant search string
	const processSearchTerm = (searchTerm) =>  searchTerm.replace(/,\n/g, "%2C").replace(/\n/g, "%2C")
		// searchTerm 
		// 	.split("\n")
		// 	.map((string) => string.trim())
		// 	.join("%2C")
		// 	.split(",")
		// 	.map((string) => string.trim())
		// 	.join("%2C");

	// Call spoonacular API and push results to state
	const getResult = async (searchTerm) => {
		console.log("searchterm", searchTerm);
		if (searchTerm === undefined) {
			searchTerm = searchTermsArray.join("%2C");
		}
		const returnCount = resultLimit;

		const response = await fetch(
			`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${searchTerm}&number=${returnCount}&ignorePantry=true&ranking=1`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-key":
						"6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4",
					"x-rapidapi-host":
						"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
				},
			}
		);
		console.log("App got response", response);
		const data = await response.json();
		console.log("got api data", data);
		setResultRecipes(data);
		console.log("results set", resultRecipes);
	};
	// When the resultRecipes list changes, re-initialize the unique Set of missing ingredients
	useEffect(() => {
		// console.log("init useEffect");
		if (resultRecipes) {
			// const currentMissingIngredients = new Set();
			// resultRecipes
			console.log("useEffect result recipes", resultRecipes);

			const missingSet = new Set();

			resultRecipes.forEach((recipe) => {
				if (recipe.missedIngredientCount > 0) {
					// console.log(recipe);
					recipe.missedIngredients.forEach((mi) => {
						missingSet.add({
							id: mi.id,
							name: mi.name,
							image: mi.image,
							originalString: mi.originalString,
						});
					});
				}
			});
			setMissingIngredients(missingSet);
			console.log("state - missingIngredients", missingIngredients);
		} else {
			console.log("useEffect no data");
		}
	}, [resultRecipes]);

	const loading = () => {
		return <div>Loading...</div>;
	};
	const loadedResults = () => {
		return (
			<Results
				handleRefreshRecipes={getResult}
				handleAddSearchTerm={handleAddSearchTerm}
				handleSaveClick={handleSaveClick}
				handleNopeClick={handleNopeClick}
				resultRecipes={resultRecipes}
				missingIngredients={missingIngredients}
			/>
		);
	};

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Search handleSearch={handleSearch} />
				</Route>
				<Route path="/Results">
					{resultRecipes ? loadedResults() : loading()}
				</Route>
				<Route path="/Recipes">
					<Recipes savedRecipes={savedRecipes} />
				</Route>
				<Route path="/About">
					<About />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
