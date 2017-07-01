import React from 'react';

const CartItem = (props) => {
	return (
		<div>
			<h1>{props.item.name}</h1>
			<button onClick={() => console.log('remove')}>Remove</button>
		</div>
	)
}

export default CartItem