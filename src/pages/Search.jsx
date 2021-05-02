import React from 'react'
import MultiItemInput from '../components/MultiItemInput'
// import Dropdown from '../components/DropDown'

const Search = (props) => {


	return (
		<div className="search-page">
			<h1>what's in the fridge?</h1>
			<MultiItemInput handleSearch={props.handleSearch} />
			{/* TODO integrate a dropdown into the inputs */}
		</div>

	)
}
export default Search