import React from 'react';
import { Route } from 'react-router-dom';

import { CategoryFilters } from '../actions/actionTypes';

//components
import Header from './header';
import ProductGrid from './productGrid';
import Cart from './cart';

class Main extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<main>
				<Header onChange={this.handleOnChange} />
				<Route exact path="/" component={() => <ProductGrid allProducts={this.getVisibileProducts(this.props.allProducts, this.props.visibilityFilter)} />}/>
				<Route path="/cart" component={Cart} />
			</main>
		)
	}

	handleOnChange = (e) => {
		this.props.setCategoryFilter(e.target.value.toUpperCase())
	}

	getVisibileProducts = (products, filter) => {
		switch(filter) {
			case CategoryFilters.ALL:
				return products
			case CategoryFilters.BOOKS:
				return products.filter(p => p.category === CategoryFilters.BOOKS)
			case CategoryFilters.HOME_IMPROVEMENT:
				return products.filter(p => p.category === CategoryFilters.HOME_IMPROVEMENT)
			case CategoryFilters.KITCHEN:
				return products.filter(p => p.category === CategoryFilters.KITCHEN)
			case CategoryFilters.MUSIC:
				return products.filter(p => p.category === CategoryFilters.MUSIC)
			case CategoryFilters.TECHNOLOGY:
				return products.filter(p => p.category === CategoryFilters.TECHNOLOGY)
			default:
				return products
		}
	}
}

export default Main