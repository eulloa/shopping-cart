import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<header>
			<h1><Link to="/">home</Link></h1>
			<form>
				<select onChange={props.onChange}>
					<option value="all">all</option>
					<option value="books">books</option>
					<option value="kitchen">kitchen</option>
					<option value="music">music</option>
					<option value="technology">technology</option>
				</select>
			</form>
			<Link to="/cart"><h2><span>{props.shoppingCart.length}</span></h2></Link>
		</header>
	)
}

Header.propTypes = {
	onChange: PropTypes.func.isRequired 
}

export default Header;