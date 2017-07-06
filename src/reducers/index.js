import { combineReducers } from 'redux';

import allProducts from './allProducts';
import shoppingCart from './shoppingCart';
import visibilityFilter from './visibilityFilter';
import modal from './modal';

const rootReducer = combineReducers({
	allProducts,
	isModalVisible: modal,
	shoppingCart,
	visibilityFilter
})

export default rootReducer;