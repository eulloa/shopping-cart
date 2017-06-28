import React from 'react';
import Product from './product';

const ProductGrid = (props) => {
	return (
		<div className="productGrid">
			{props.allProducts.map((product, i) => <Product key={i} product={props.allProducts[i]} />)}
		</div>
	)
}

export default ProductGrid;