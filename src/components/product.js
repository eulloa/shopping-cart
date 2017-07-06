import React from 'react';

class Product extends React.Component {
	constructor(props) {
		super(props);

		this.handeClick = this.handeClick.bind(this)
	}

	handeClick = (productID) => {
		this.props.addToCart(productID);
		this.props.setModalVisibility(true);
	}

	render() {
		return (
			<div className="product">
				<figure>
					<img src={'/img/' + this.props.product.imgSrc}/>
					<figcaption>
						<h1>{this.props.product.name}</h1>
						<h2><sup>$</sup>{this.props.product.price}</h2>
						<h3>{this.props.product.description}</h3>
						<ul>
							{this.props.product.features.map((feature, i) => {
								return <li key={i}>{feature}</li>
							})}
						</ul>
						<button className="button" onClick={() => this.handeClick(this.props.product)}>Add to cart</button>
					</figcaption>
				</figure>
			</div>
		)
	}
}

export default Product;