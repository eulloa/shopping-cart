import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
	if (!props.shoppingCart.length) {
		return <div className="shoppingCart">There is nothing in your cart yet, click <Link to="/">here</Link> to start shopping!</div>
	}

	return (
		<div className="shoppingCart">
			{props.shoppingCart.map((item, i) => <ShoppingCartItem key={i} index={i} item={item} {...props} />)}
		</div>
	)
}

const ShoppingCartItem = (props) => {
	return (
		<div className="shoppingCartItem">
			<h1>{props.item.name}</h1>
			<img src={'/img/' + props.item.imgSrc} alt={props.item.description} />
			<button className="button" onClick={() => { props.removeFromCart(props.index); props.setModalVisibility(false) }}>Remove</button>
		</div>
	)
}



export default ShoppingCart