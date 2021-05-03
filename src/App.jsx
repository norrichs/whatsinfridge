import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import { useState } from "react";

function App() {
	const [resultRecipes, setResultRecipes] = useState(null);
	const [savedRecipes, setSavedRecipes] = useState([]);

	// Search form results handler
	//
	const handleSearch = (searchTerm) => {
		console.log("App handleSearch", searchTerm);
		getResult(searchTerm);
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
	// Process form string to API compliant search string
	const processSearchTerm = (searchTerm) =>
		searchTerm
			.split(",")
			.map((string) => string.trim())
			.join("%2C");
	// Call spoonacular API and push results to state
	const getResult = async (searchTerm) => {
		const returnCount = 20;

		const response = await fetch(
			`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${processSearchTerm(
				searchTerm
			)}&number=${returnCount}&ignorePantry=true&ranking=1`,
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
		console.log("App got response");
		const data = await response.json();
		console.log("got api data", data);
		setResultRecipes(data);
		console.log("results set");
	};

	const loading = () => {
		return <div>Loading...</div>;
	};
	const loaded = () => {
		return (
			<Results
				handleSaveClick={handleSaveClick}
				handleNopeClick={handleNopeClick}
				resultRecipes={resultRecipes}
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
					{resultRecipes ? loaded() : loading()}
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
