import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

const ShoppingCart = (props) => {
	if (!props.shoppingCart.length) {
		return <div className="shoppingCart container">You&rsquo;re pushing an empty cart! Click <Link to="/">here</Link> to start shopping.</div>
	}

	return (
		<div className="container">
			<div className="shoppingCart">
				{props.shoppingCart.map((item, i) => <ShoppingCartItem key={i} index={i} item={item} {...props} />)}
			</div>
			<Sidebar {...props} totalCartItems={props.totalCartItems} />
		</div>
	)
}

const ShoppingCartItem = (props) => {
	return (
		<div className="shoppingCartItem">
			<table>
				<tr>
					<th>{props.item.name}</th>
					<th>Price</th>
					<th>Quantity</th>
				</tr>
				<tr>
					<td>
						<img src={'/img/' + props.item.images[0]} alt={props.item.description} />
						<button className="button" onClick={() => { props.removeFromCart(props.index); props.setModalVisibility(true); props.updateCartMessage('Removed from Cart!') }}>Remove</button>
						<Link className="button" to={"/product/" + props.item.productID}>Product Info</Link>	
					</td>
					<td>${props.item.price * props.item.qty}</td>
					<td>{props.item.qty}</td>
				</tr>
			</table>
		</div>
	)
}

export default ShoppingCart