import { combineReducers } from 'redux';

import allProducts from './allProducts';
import cartMessage from './cartMessage';
import shoppingCart from './shoppingCart';
import visibilityFilter from './visibilityFilter';
import modal from './modal';

const rootReducer = combineReducers({
	allProducts,
	cartMessage,
	isModalVisible: modal,
	shoppingCart,
	visibilityFilter
})

export default rootReducer;