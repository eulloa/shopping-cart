import shoppingCart from '../../src/reducers/shoppingCart';
import * as actionTypes from '../../src/actions/actionTypes';

describe('shoppingCart reducer', () => {
	it('should return an empty state array given unknown an action type', () => {
		expect(shoppingCart([], {
			type: 'FOO',
			index: 0
		})).toEqual([])
	})

	it('should handle ADD_TO_CART', () => {
		let cartItem = {
			name: 'My awesome product'
		}

		expect(shoppingCart([], {
			type: actionTypes.ADD_TO_CART,
			cartItem
		})).toEqual([
			{ name: 'My awesome product', qty: 1 }
		])
	})

	it('should handle REMOVE_FROM_CART', () => {
		let state = [
			{ productID: 1 }, { productID: 2 }, { productID: 3 }
		]

		state = shoppingCart(state, { type: actionTypes.REMOVE_FROM_CART, index: 0 })

		expect(state).toEqual([
			{ productID: 2 }, { productID: 3 }
		])
	})
})