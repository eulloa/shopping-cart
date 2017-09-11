import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';
import _ from 'lodash';

const shoppingCart = (state = [], action) => {
	const i = action.index;

	switch (action.type) {
		case ADD_TO_CART:
			let itemToAdd = action.cartItem
			//is item already in shoppingCart array?
			if ( state.some(item => item === itemToAdd) ) {
				itemToAdd.qty++
				let index = _.findIndex(state, { productID: itemToAdd.productID })
				return [
					...state.slice(0, index),
					itemToAdd,
					...state.slice(index + 1)
				]
			} else {
				itemToAdd.qty = 1
				return [ 
					...state, 
					itemToAdd
				]
			}

		case REMOVE_FROM_CART:
			return [
				...state.slice(0, i),
				...state.slice(i + 1)
			]

		default:
			return state
	}
}

export default shoppingCart;