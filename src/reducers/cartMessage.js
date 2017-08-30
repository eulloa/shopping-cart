import { UPDATE_CART_MESSAGE } from '../actions/actionTypes'

const updateCartMessage = (state = 'Added to cart!', action) => {
	switch (action.type) {
		case UPDATE_CART_MESSAGE:
			return action.message
		default:
			return state
	}
}

export default updateCartMessage