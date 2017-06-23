/* action types */
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

/* category filters */
export const CategoryFilters = {
	ALL: 			   'ALL',
	TECHNOLOGY: 	   'TECHNOLOGY',
	HOME_IMPROVEMENT:  'HOME_IMPROVEMENT',
	KITCHEN: 		   'KITCHEN',
	BOOKS: 			   'BOOKS'
}

/* action creators */
const addToCart = (productID) => {
	return {
		type: ADD_TO_CART,
		productID
	}
}

const removeFromCart = (index) => {
	return {
		type: REMOVE_FROM_CART,
		index
	}
}

const setCategoryFilter = (filter) => {
	return {
		type: SET_CATEGORY_FILTER,
		filter
	}
}

export default { addToCart, removeFromCart, setCategoryFilter }