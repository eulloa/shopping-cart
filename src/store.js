import { createStore } from 'redux';
import { CategoryFilters } from './actions/actionTypes';
//import { createBrowserHistory } from 'history';
//import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers/index';

//import 'products'
import allProducts from './data/allProducts';

const defaultState = {
	allProducts,
	shoppingCart: [],
	visibilityFilter: CategoryFilters.ALL,
}

const store = createStore(
	rootReducer, 
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;