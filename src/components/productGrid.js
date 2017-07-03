import React from 'react';
import Product from './product';
import { CategoryFilters } from '../actions/actionTypes';
import PropTypes from 'prop-types';

const ProductGrid = (props) => {
	let products = props.visibilityFilter === CategoryFilters.ALL ? props.allProducts :
		props.allProducts.filter(p => { return p.category === props.visibilityFilter })

	return (
		<div className="productGrid">
			{products.map((product, i) => {
				return <Product key={product.productID} product={product} {...props} />
			})}
		</div>
	)
}

ProductGrid.propTypes = {
	
}

export default ProductGrid;