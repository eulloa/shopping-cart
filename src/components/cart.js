import React from 'react';

const Cart = (props) => {
	if (!props.shoppingCart.length) {
		return <div>You do not have anything in your cart!</div>
	}

	return <div>{props.shoppingCart.map((item, i) => <div key={i}>{item.toString()}</div>)}</div>
}

export default Cart