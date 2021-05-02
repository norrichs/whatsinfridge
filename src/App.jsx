import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import { useState } from "react";


function App() {
	const [resultRecipes, setResultRecipes] = useState(null)

	// Search form results handler
	// 		
	const handleSearch = (searchTerm) => {
		console.log("App handleSearch", searchTerm);
		getResult(searchTerm)
	};
	// Process form string to API compliant search string
	const processSearchTerm = (searchTerm) => searchTerm.split(",").map((string) => string.trim()).join("%2C")
	// Call spoonacular API and push results to state
	const getResult = async (searchTerm) => {
		const returnCount = 20
		
		const response = await fetch(
			`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${processSearchTerm(searchTerm)}&number=${returnCount}&ignorePantry=true&ranking=1`,
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
		console.log("App got response")
		const data = await response.json();
		console.log('got api data',data);
		setResultRecipes(data)
		console.log('results set')
	};

	const loading = () => {
		return <div>Loading...</div>
	}
	const loaded = () => {
		return <Results resultRecipes= {resultRecipes} />
	}

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
					<Recipes />
				</Route>
				<Route path="/About">
					<About />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
