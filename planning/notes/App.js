@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');



App.jsx

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Recipes from "./pages/Recipes";
import ShoppingList from "./pages/ShoppingList";
import About from "./pages/About";
import RecipeFull from "./pages/RecipeFull";
import { useState, useEffect } from "react";

function App() {
	const [searchTermsArray, setSearchTermsArray] = useState([]);
	const [resultRecipes, setResultRecipes] = useState([]);
	const [savedRecipes, setSavedRecipes] = useState([]);
	const [savedRecipeInfo, setSavedRecipeInfo] = useState([]);
	const [missingIngredients, setMissingIngredients] = useState([]);
	const [excludeList, setExcludeList] = useState([]);
	const [shoppingList, setShoppingList] = useState([]);
	// const [resultLimit, setResultLimit] = useState(5);
	const apiKey = "6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4";
	const resultLimit = 20;
	const priority = {
		minimizeMissed: 2,
		maximizeUsed: 1,
	};
	// Search form results handler
	//
	const handleSearch = (passedSearchTerm) => {
		console.log("App handleSearch - passedSearchTerm", passedSearchTerm);
		// Use stored search term
		let searchTerm = "";
		if (passedSearchTerm === undefined) {
			searchTerm = searchTermsArray.join("%2C");
		} else if (searchTermsArray.length > 0) {
			searchTerm =
				passedSearchTerm + "%2C" + searchTermsArray.join("%2C");
		} else {
			searchTerm = passedSearchTerm;
		}

		console.log("handleSearch - searchTerm to clean", searchTerm);
		//TODO move searchTerm processing to search page
		const cleanSearchTerm = processSearchTerm(searchTerm);
		// const searchResults = getResult(cleanSearchTerm);
		console.log("handleSearch - cleanSearchTerm to Pass", cleanSearchTerm);

		// TODO
			// Check for any parameters that require complex search
			// Parameters to check: 
			// 		excluded ingredients
			// 		intolerances
			// 		cuisine
			// 		query ?
			// 		type
			// 		equipment
		if (excludeList.length > 0) {
			console.log("handleSearch - cmplx - exlusions:", excludeList);
			getResultComplex(cleanSearchTerm).then((searchResults) => {
				console.log("handleSearch results to pass to cacheRecipeInfo", searchResults)
				cacheRecipeInfo(searchResults.map((recipe) => recipe.id))
			})
			setSearchTermsArray(cleanSearchTerm.split("%2C"))
			console.log("handleSearch after cached", searchTermsArray)

		} else {
			getResult(cleanSearchTerm).then((searchResults) => {
				console.log(
					"handleSearch, search results to pass to cacheRecipeInfo",
					searchResults
				);
				cacheRecipeInfo(searchResults.map((recipe) => recipe.id));
			});

			setSearchTermsArray(cleanSearchTerm.split("%2C"));
			console.log("searchTermsArray", searchTermsArray);
		}
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
	const handleRemoveMissingIngredient = (id) => {
		// console.log('handleRemoveMissingIngredient', id, missingIngredients)
		missingIngredients.forEach((ingredient) => {
			if (ingredient.id === id) {
				missingIngredients.delete(ingredient);
			}
		});
		setMissingIngredients(missingIngredients);
	};
	const handleAddToShoppingList = (ingredient) => {
		console.log("handleAddToShoppingList", ingredient, shoppingList);
		// TODO  - check for uniqueness
		setShoppingList([...shoppingList, ingredient]);
	};
	const handleRemoveFromShoppingList = (clearedIngredient) => {
		console.log(
			"handleRemoveFromShoppingList",
			clearedIngredient,
			shoppingList
		);
		// TODO - check for duplicates?
		setShoppingList(
			shoppingList.filter((listIngredient) => {
				return listIngredient.id !== clearedIngredient.id;
			})
		);
	};
	const handleAddToExcludeList = (ingredient) => {
		console.log("handleAddToExcludeList name", ingredient.name);
		setExcludeList([...excludeList, ingredient.name]);
		handleRemoveMissingIngredient(ingredient.id);
	};
	// Process form string to API compliant search string
	// 		Replace line breaks and commas with '%2C'
	const processSearchTerm = (searchTerm) =>
		searchTerm.replace(/,\n/g, "%2C").replace(/\n/g, "%2C");

	// Call spoonacular API and push results to state
	const getResult = async (searchTerm) => {
		const returnCount = resultLimit;

		const response = await fetch(
			`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${searchTerm}&number=${returnCount}&ignorePantry=true&ranking=${priority.minimizeMissed}`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-key": apiKey,
					"x-rapidapi-host":
						"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
				},
			}
		);
		console.log("App got response", response);
		const data = await response.json();
		console.log("getResult simple json data", data);
		setResultRecipes([...resultRecipes, ...data]);
		console.log("results set", resultRecipes);
		return data;
	};
	const getResultComplex = async (searchTerm) => {
		console.log(searchTerm);
		// const exampleQueryObj = {
		// 	limitLicense: "true",
		// 	offset: "0",
		// 	number: "10",
		// 	intolerances: "peanut, shellfish",
		// 	ranking: "2",
		// 	excludeIngredients: "coconut, mango",
		// 	cuisine: "american",
		// 	query: "",
		// 	includeIngredients: "onions, lettuce, tomato",
		// 	type: "",
		// 	equipment: "",
		// };
		const queryObj = {
			limitLicense: "false",
			// offset: "0",
			// number: resultLimit,
			// intolerances: "peanut, shellfish",
			ranking: "2",
			excludeIngredients: "pineapple",
			// cuisine: "american",
			// query: "",
			includeIngredients: "black beans, beef, cheddar"
			// type: "",
			// equipment: "",
		};
		let queryString = "";
		for (let param in queryObj) {
			// console.log(param,queryObj[param])
			if (queryObj[param] !== "") {
				queryString = queryString.concat(
					"&" + param + "=" + queryObj[param]
				);
			}
		}
		queryString = queryString.substring(1).replace(/,/g, "%2C").replace(/ /g, "");
		console.log("getResultComplex - query", queryString);

		const response = await fetch(
			`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?${queryString}`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-key": apiKey,
					"x-rapidapi-host":
						"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
				},
			}
		);
		const data = await response.json()
		// send result recipe list to cached state
		await console.log('getResultComplex json data', data, data.results)
		setResultRecipes([...resultRecipes,...data.results])
		console.log("getResultComplex results set", resultRecipes)
		// return data for further processing
		return data
	};
	//  API call to retrieve single recipe in full, rather than multiple
	//	  	 not sure there is a reason to include
	// const getRecipe = async (id = 567587) => {
	// 	//492601, 492601, 567587
	// 	console.log("getRecipe", id);
	// 	const response = await fetch(
	// 		`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
	// 		{
	// 			method: "GET",
	// 			headers: {
	// 				"x-rapidapi-key": apiKey,
	// 				"x-rapidapi-host":
	// 					"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	// 			},
	// 		}
	// 	);
	// 	const data = await response.json();
	// 	console.log("recipe result", data);
	// 	return data;
	// };
	const getRecipeBulk = async (idArray) => {
		console.log("bulk id list", idArray);
		const idString = idArray.join("%2C");
		const response = await fetch(
			`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${idString}`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-key": apiKey,
					"x-rapidapi-host":
						"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
				},
			}
		);
		const data = await response.json();
		console.log("recipe bulk results", data);
		return data;
	};

	const cacheRecipeInfo = async (idArray) => {
		console.log("cacheRecipeInfo", idArray);
		// Check if recipes w/ id's are already cached. shrink list
		if (savedRecipeInfo.length > 0) {
			const currentSavedIDs = savedRecipeInfo.map((recipe) => recipe.id);
			console.log("saved ids", currentSavedIDs);
			idArray.filter((id) => currentSavedIDs.includes(id));
		}
		// Get recipe info by calling API
		const recipes = await getRecipeBulk(idArray);
		// Store recipe info in state array cache
		console.log("cacheRecipeInfo - ready to setSavedRecipeInfo", recipes);
		setSavedRecipeInfo([...savedRecipeInfo, ...recipes]);
		console.log(
			"cacheRecipeInfo - saved recipes to State",
			savedRecipeInfo
		);
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
				console.log("useEffect resultRecipes.forEach recipe", recipe)
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
			console.log("pre-state missingSet", missingSet);
			setMissingIngredients(missingSet);
			// console.log("state - missingIngredients", missingIngredients);
		} else {
			console.log("useEffect no data");
		}
	}, [resultRecipes]); // Added missing ingredients to dependency array because of error message.  Check if running too often

	const loading = () => {
		return <div>Loading...</div>;
	};
	const loadedResults = () => {
		return (
			<Results
				handleAddToExcludeList={handleAddToExcludeList}
				handleRefreshRecipes={handleSearch}
				handleAddSearchTerm={handleAddSearchTerm}
				handleSaveClick={handleSaveClick}
				handleNopeClick={handleNopeClick}
				resultRecipes={resultRecipes}
				missingIngredients={missingIngredients}
				handleRemoveMissingIngredient={handleRemoveMissingIngredient}
				handleAddToShoppingList={handleAddToShoppingList}
			/>
		);
	};
	const getSavedRecipeInfoByID = (id) => {
		// console.log("getSavedRecipeInfoByID - saved recipes:", savedRecipeInfo,"this ID:", id)
		const result = savedRecipeInfo.filter(
			(recipe) => recipe.id === parseInt(id)
		);
		// console.log('gSRIBID result', result)
		return result[0];
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
				<Route path="/List">
					<ShoppingList
						shoppingList={shoppingList}
						handleRemoveFromShoppingList={
							handleRemoveFromShoppingList
						}
					/>
				</Route>
				<Route
					path="/Recipe/:id"
					render={(routerProps) => (
						<RecipeFull
							recipe={getSavedRecipeInfoByID(
								routerProps.match.params.id
							)}
							{...routerProps}
						/>
					)}
				/>

				{/* <Route exact path="/Recipe">
					<RecipeFull recipe={recipe}/>
				</Route> */}
				<Route path="/About">
					<About />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
