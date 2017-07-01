import React from 'react';

class Product extends React.Component {
	constructor(props) {
		super(props);

		this.handeClick = this.handeClick.bind(this)
	}

	handeClick = (productID) => {
		this.props.addToCart(productID)
	}

	render() {
		return (
			<div>
				<h1>{this.props.product.name}</h1>
				<button onClick={() => this.handeClick(this.props.product)}>Add to cart</button>
			</div>
		)
	}
}

export default Product;