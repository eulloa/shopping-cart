import * as actions from '../../src/actions/actions';
import * as actionTypes from '../../src/actions/actionTypes';
import configureStore from 'redux-mock-store';

const middlewares = []
const mockStore = configureStore(middlewares)
const defaultState = {
	allProducts: [],
	shoppingCart: [],
	visibilityFilter: actionTypes.CategoryFilters.ALL
}

describe('addToCart action creator', () => {
	it('should create an action to add a cart item', () => {
		const productID = 1
		const expectedAction = {
			type: actionTypes.ADD_TO_CART,
			productID
		}

		expect(actions.addToCart(1)).toEqual(expectedAction)
	})
})

describe('removeFromCart action creator', () => {
	const store = mockStore(defaultState)
	store.dispatch(actions.removeFromCart(1))

	const storeActions = store.getActions()
	const expectedAction = { type: actionTypes.REMOVE_FROM_CART, index: 1 }

	it('should create an action to remove an item from cart', () => {
		expect(storeActions).toEqual([expectedAction])
	})
})

describe('setCategoryFilter action creator', () => {
	const store = mockStore(defaultState)
	store.dispatch(actions.setCategoryFilter('KITCHEN'))

	const storeActions = store.getActions()
	const expectedAction = { type: actionTypes.SET_CATEGORY_FILTER, filter: actionTypes.CategoryFilters.KITCHEN }

	it('should create an action to update cateogry filter', () => {
		expect(storeActions).toEqual([expectedAction])
	})
})