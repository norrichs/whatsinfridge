import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";

const Header = () => {

	return (
		<header>
			<div><FontAwesomeIcon icon={faUtensils}/></div>
			<nav>
				<NavLink to='/'><div>search</div></NavLink>
				<NavLink to='/Results'><div>results</div></NavLink>
				<NavLink to='/Recipes'><div>recipes</div></NavLink>
				<NavLink to='/List'><div>shopping</div></NavLink>
				<NavLink to='/About'><div>about</div></NavLink>
			</nav>
		</header>
	)
}
export default Header