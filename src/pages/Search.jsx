import React from "react";
import MultiItemInput from "../components/MultiItemInput";
// import Dropdown from '../components/DropDown'

const Search = (props) => {

	// const handleGetRecipe = () => props.getRecipe()
	return (
		<div className="search-page">
			<h1>what's in the fridge?</h1>
			<MultiItemInput handleSearch={props.handleSearch} />
			{/* TODO integrate a dropdown into the inputs */}

			{/* <div onClick={handleGetRecipe}>get recipe</div> */}
		</div>
	);
};
export default Search;
