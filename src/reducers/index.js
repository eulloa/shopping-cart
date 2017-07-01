import { combineReducers } from 'redux';

import allProducts from './allProducts';
import shoppingCart from './shoppingCart';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
	allProducts,
	shoppingCart,
	visibilityFilter
})

export default rootReducer;