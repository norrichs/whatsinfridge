import React ,{useState} from "react";
import {useHistory} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'


const MultiItemInput = (props) => {
	const [searchString, setSearchString] = useState(null)
	const history = useHistory()
	
	const handleChange = (event) => {
		// console.log(event.target.value)
		setSearchString(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.value)
		props.handleSearch(searchString);
		// REDIRECT to results page on form submit
		history.push("/Results")
	};

	return (
		<>
			<form className="multi-item-input" onSubmit={handleSubmit}>
				<input  onChange={handleChange} type="text" placeholder="tell me about your fridge" />
				<input
					className="mii-button"
					type="submit"
					value="what can I make with all of this?"
				/>
			</form>
		</>
	);
};
export default MultiItemInput;

// TODO make a slide up panel to enter filter details