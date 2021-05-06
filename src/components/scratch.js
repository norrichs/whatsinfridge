
const apiKey = "6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4"

const getResultComplex = async (searchTerm) => {
	console.log(searchTerm)
	const queryObj = {
		limitLicense: 'true',
		offset: '0',
		number: '10',
		intolerances: 'peanut, shellfish',
		ranking: '2',
		excludeIngredients: 'coconut, mango',
		cuisine: 'american',
		query: '',
		includeIngredients: 'onions, lettuce, tomato',
		type: '',
		equipment: ''
	}
	let queryString = ''
	for(param in queryObj){
		// console.log(param,queryObj[param])
		if(queryObj[param] !== ''){
			queryString = queryString.concat("&" + param +"="+ queryObj[param])
		}
	}
	queryString = queryString.replace(/,/g,"%2C").replace(/ /g,'')
	console.log(queryString)

	const data = await fetch(
		`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?${queryString}`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-key":
					apiKey,
				"x-rapidapi-host":
					"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			},
		}
	);
	console.log(data)

};


getResultComplex('corn, spinach, kale, cheddar')