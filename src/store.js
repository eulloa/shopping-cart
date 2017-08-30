import { createStore } from 'redux';
import { CategoryFilters } from './actions/actionTypes';

import rootReducer from './reducers/index';

//import 'products'
import allProducts from './data/allProducts';

const defaultState = {
	allProducts,
	cartMessage: 'Added to cart!',
	isModalVisible: false,
	shoppingCart: [],
	visibilityFilter: CategoryFilters.ALL,
}

const store = createStore(
	rootReducer, 
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;