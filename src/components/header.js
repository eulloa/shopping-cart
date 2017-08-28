import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange = (e) => {
		this.props.setCategoryFilter(e.target.value.toUpperCase())
	}

	render() {
		return (
			<header>
				<h1><Link to="/">home</Link></h1>
				<form>
					<select onChange={this.handleOnChange}>
						<option value="all">all</option>
						<option value="books">books</option>
						<option value="kitchen">kitchen</option>
						<option value="music">music</option>
						<option value="technology">technology</option>
					</select>
				</form>
				<Link to="/cart"><h2><span>{this.props.shoppingCart.length}</span></h2></Link>
			</header>
		)
	}
}

export default Header;