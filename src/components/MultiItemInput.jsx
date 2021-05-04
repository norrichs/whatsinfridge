import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import {Redirect} from 'react-router-dom'

const MultiItemInput = (props) => {
	const [searchString, setSearchString] = useState('');
	const history = useHistory();

	const handleChange = (event) => {
		// console.log(event.target);
		// console.log(event.target.value);
		if (event.target.value[event.target.value.length - 1] === ",") {
			console.log("comma detected",`${event.target.value}COMMA\r\n`);
			setSearchString(`${event.target.value}\n`);
		}else{setSearchString(event.target.value);}
		
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit search event",event)
		console.log("submit search",event.target.value);
		props.handleSearch(searchString);
		// REDIRECT to results page on form submit
		history.push("/Results");
	};

	return (
		<>
			<form className="multi-item-input" onSubmit={handleSubmit}>
				<textarea
					style={{whiteSpace: "pre-line"}}
					onChange={handleChange}
					type="textarea"
					placeholder="tell me about your fridge"
					value={searchString}
				/>
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
