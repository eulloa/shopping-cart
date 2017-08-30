import React from 'react';
import { Link } from 'react-router-dom';

const ProductSingleView = (props) => {
	let product = props.allProducts.find((p) => p.productID === parseInt(props.match.params.productID, 10))

	if (product == null) {
		product = props.allProducts.find((p) => p.productID === 1)
	}

	return (
		<div className="product single-view">
			{ product.images.length > 1 &&
				<ul className="images child">
					{
						product.images.map((img, i) => {
							return <li key={i}><img src={'/img/' + img} alt={product.description} /></li>
						})
					}
				</ul>
			}
			<figure className="child">
				<h4>{product.category}</h4>
				<img src={'/img/' + product.images[0]} alt={product.description}/>
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
					<Link to='/'>View All</Link>
				</figcaption>
			</figure>
		</div>
	)
}

export default ProductSingleView