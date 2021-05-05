

https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients

https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?x-rapidapi-key=6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4&ingredients=peaches%2Cchocolate%2Clime%2Ccheese&number=5&ignorePantry=true&ranking=1


https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?api-key=6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4&ingredients=peaches%2Cchocolate%2Clime%2Ccheese&number=5&ignorePantry=true&ranking=1

6d8cba578amshebba4e821ebc3abp1fecbajsndb5067a609b4


### Endpoints

BASE URL
https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/

Find recipes that use as many of the given ingredinets as possible and have as little as possible missing ingredients

	recipes/findByIngredients
	ingredients=${comma separated ingredients string}
	number=${number of requested results}
	ignorePantry=True   (whether to ignore pantry ingredients)
	ranking=${1 or 2}  	(1= maximize used ingredients, 2=minimize missing ingredients)

Recipe Complex Search
Counts as 3 requests

	recipes/complexSearch
	includeIngredients={comma separated ingredients string}  (same as ingredients above)
	type={} (options: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, drink)
	query={	}  (recipe search query - keyword?)
	titleMatch={} (string req'd in recipe title)
	ranking={1 or 2}
	number={1 to 100}
	diet={}	(options: pescetarian, lacto vegetarian, ovo vegetarian, vegan, paleo, primal, vegetarian)
	intolerances={} (options: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat)
	equipment={}

Get Ingredient Substitutes

	food/ingredients/substitutes
	ingredientName={}
	
Summarize Recipe
	https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{recipe-id}/summary

Get Recipe Information




### Recipe list handling

1) after a search by ingredients is performed, run the bulk recipe information, store recipes in a state array
2) when the recipe result list changes, check if those recipes are already cached.  run on all uncached ids, add to cache
3) 
	

	