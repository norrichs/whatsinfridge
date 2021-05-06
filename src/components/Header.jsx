import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";

const Header = () => {

	return (
		<header>
			<div><FontAwesomeIcon icon={faUtensils}/></div>
			<nav>
				<NavLink to='/'><div>new search</div></NavLink>
				<NavLink to='/Results'><div>refine results</div></NavLink>
				<NavLink to='/Recipes'><div>recipes</div></NavLink>
				<NavLink to='/List'><div>shopping list</div></NavLink>
				<NavLink to='/About'><div>about</div></NavLink>
			</nav>
		</header>
	)
}
export default Header