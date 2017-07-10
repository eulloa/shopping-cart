import React from 'react';

const Product = (props) => {
	return (
		<div className="product">
			<h4>{props.product.category}</h4>
			<figure>
				<img src={'/img/' + props.product.imgSrc} alt={props.product.description}/>
				<figcaption>
					<h1>{props.product.name}</h1>
					<h2><sup>$</sup>{props.product.price}</h2>
					<h3>{props.product.description}</h3>
					<ul>
						{props.product.features.map((feature, i) => {
							return <li key={i}>{feature}</li>
						})}
					</ul>
					<button className="button" onClick={() => { props.addToCart(props.product); props.setModalVisibility(true) }}>Add to cart</button>
				</figcaption>
			</figure>
		</div>
	)
}

export default Product;