import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
	if (!props.shoppingCart.length) {
		return <div className="shoppingCart container">There is nothing in your cart yet, click <Link to="/">here</Link> to start shopping!</div>
	}

	return (
		<div className="shoppingCart container">
			{props.shoppingCart.map((item, i) => <ShoppingCartItem key={i} index={i} item={item} {...props} />)}
		</div>
	)
}

const ShoppingCartItem = (props) => {
	return (
		<div className="shoppingCartItem">
			<h1>{props.item.name}</h1>
			<img src={'/img/' + props.item.images[0]} alt={props.item.description} />
			<button className="button" onClick={() => { props.removeFromCart(props.index); props.setModalVisibility(true); props.updateCartMessage('Removed from Cart!') }}>Remove</button>
		</div>
	)
}



export default ShoppingCart