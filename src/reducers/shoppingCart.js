import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const shoppingCart = (state = {}, action) => {
	const i = action.index;

	switch (action.type) {
		case ADD_TO_CART:
			return [ 
				...state, 
				action.cartItem
			]

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