import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
	return (
		<div className="product">
			<h5>{props.product.category}</h5>
			<figure>
				<img src={'/img/' + props.product.images[0]} alt={props.product.description}/>
				<figcaption>
					<h1>{props.product.name}</h1>
					<h2>${props.product.price}</h2>
					<h3>{props.product.description}</h3>
					<button className="button" onClick={() => { props.addToCart(props.product); props.setModalVisibility(true); props.updateCartMessage('Added to cart!') }}>Add to cart</button>
					<Link className="button margin" to={'/product/' + props.product.productID}>Learn more</Link>
				</figcaption>
			</figure>
		</div>
	)
}

export default Product;