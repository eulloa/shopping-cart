import { ADD_TO_CART, REMOVE_FROM_CART, SET_CATEGORY_FILTER, SET_MODAL_VISIBILITY } from './actionTypes';

export const addToCart = (cartItem) => {
	return {
		type: ADD_TO_CART,
		cartItem
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

export const setModalVisibility = (bool) => {
	return {
		type: SET_MODAL_VISIBILITY,
		isVisible: bool
	}
}