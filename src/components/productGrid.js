import React from 'react';
import Product from './product';
import { CategoryFilters } from '../actions/actionTypes';

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

export default ProductGrid;