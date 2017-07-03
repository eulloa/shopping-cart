import React from 'react';

const Cart = (props) => {
	if (!props.shoppingCart.length) {
		return <div className="shoppingCart">You do not have anything in your cart!</div>
	}

	return <div className="shoppingCart">{props.shoppingCart.map((item, i) => <CartItem key={i} index={i} item={item} {...props} />)}</div>
}

const CartItem = (props) => {
	return (
		<div>
			<h1>{props.item.name}</h1>
			<button onClick={() => props.removeFromCart(props.index)}>Remove</button>
		</div>
	)
}



export default Cart