import React from 'react';
import PropTypes from 'prop-types';

const ProductSingleView = (props) => {
	let product = props.allProducts.find((p) => p.productID === parseInt(props.match.params.productID, 10))

	if (product == null) {
		product = props.allProducts.find((p) => p.productID === 1)
	}

	return (
		<div className="product single-view">
			<h4>{product.category}</h4>
			<figure>
				<img src={'/img/' + product.imgSrc} alt={product.description}/>
				<figcaption>
					<h1>{product.name}</h1>
					<h2><sup>$</sup>{product.price}</h2>
					<h3>{product.description}</h3>
					<ul>
						{product.features.map((feature, i) => {
							return <li key={i}>{feature}</li>
						})}
					</ul>
					<button className="button" onClick={() => { props.addToCart(product); props.setModalVisibility(true) }}>Add to cart</button>
				</figcaption>
			</figure>
		</div>
	)
}

ProductSingleView.propTypes = {

}

export default ProductSingleView