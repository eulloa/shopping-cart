import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import allProducts from './allProducts';
import shoppingCart from './shoppingCart';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
	allProducts,
	shoppingCart,
	visibilityFilter,
	routing
})

export default rootReducer;