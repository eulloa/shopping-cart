import { ADD_TO_CART, REMOVE_FROM_CART, SET_CATEGORY_FILTER } from './actionTypes';

export const addToCart = (productID) => {
	return {
		type: ADD_TO_CART,
		productID
	}
}

export const removeFromCart = (index) => {
	return {
		type: REMOVE_FROM_CART,
		index
	}
}

export const setCategoryFilter = (filter) => {
	return {
		type: SET_CATEGORY_FILTER,
		filter
	}
}