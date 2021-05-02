import React from "react";
import {useHistory} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'

const MultiItemInput = (props) => {
	const history = useHistory()
	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSearch("mozzarella, tomato, plantain");
		// REDIRECT to results page on form submit
		history.push("/Results")
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="tell me about your fridge" />
				<input
					type="submit"
					value="what can I make with all of this?"
				/>
			</form>
		</>
	);
};
export default MultiItemInput;