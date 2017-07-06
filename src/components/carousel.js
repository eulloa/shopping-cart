import React from 'react';
import PropTypes from 'prop-types';

const Carousel = (props) => {
	let products = props.carouselProducts.filter((p) => p.featured === true)

	return (
		<div className="carousel">
			{products.map((product, i) => { 
				return <CarouselProduct key={product.productID} product={product} {...props} />
			})}
		</div>
	)
}

Carousel.propTypes = {
	carouselProducts: PropTypes.array.isRequired
}

const CarouselProduct = (props) => {
	return (
		<div>
			<h1>{props.product.name}</h1>
			<button onClick={() => props.addToCart(props.product)}>Add to cart</button>
		</div>
	)
}

CarouselProduct.propTypes = {
	product: PropTypes.object.isRequired
}

export default Carousel