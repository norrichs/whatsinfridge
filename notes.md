

https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients

https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?x-rapidapi-key=6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4&ingredients=peaches%2Cchocolate%2Clime%2Ccheese&number=5&ignorePantry=true&ranking=1


https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?api-key=6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4&ingredients=peaches%2Cchocolate%2Clime%2Ccheese&number=5&ignorePantry=true&ranking=1

6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4




fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=peaches%2Cchocolate%2Clime%2Ccheese&number=5&ignorePantry=true&ranking=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});