import React from 'react';
import CartItem from './cartItem';

const Cart = (props) => {
	if (!props.shoppingCart.length) {
		return <div>You do not have anything in your cart!</div>
	}

	return <div className="shoppingCart">{props.shoppingCart.map((item, i) => <CartItem key={i} item={item} />)}</div>
}

export default Cart