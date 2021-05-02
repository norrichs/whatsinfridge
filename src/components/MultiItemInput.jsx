import React from "react";
// import {Redirect} from 'react-router-dom'

const MultiItemInput = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("handleSubmit");
		console.log(props);
		props.handleSearch("gouda, spaghetti, dill");
		
		window.location.href = "/Results"
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
