import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
	const [result, setResult] = useState(null);

	const getResult = async () => {
		const response = await fetch(
			"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=peaches%2Cchocolate%2Clime%2Ccheese&number=5&ignorePantry=true&ranking=1",
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
		const data = await response.json();
		console.log(data);
	};
  useEffect(()=>{
    getResult()
  },[result])
  let recipes = null;
  if(result){
    console.log('using result')
    recipes=result;
  }else{
    recipes="loading"
  }
	return <div className="App">
    {recipes}
  </div>;
}

export default App;
