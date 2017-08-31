import React from 'react';
import Product from './product';
import SlickSlider from './slickSlider';
import { CategoryFilters } from '../actions/actionTypes';

const ProductGrid = (props) => {
	let products = props.visibilityFilter === CategoryFilters.ALL ? props.allProducts :
		props.allProducts.filter(p => { return p.category === props.visibilityFilter })

	return (
		<div className="container">
			<SlickSlider carouselProducts={props.allProducts} />
			<div className="productGrid">
				{products.map((product, i) => {
					return <Product key={product.productID} product={product} {...props} />
				})}
			</div>
		</div>
	)
}

export default ProductGrid;