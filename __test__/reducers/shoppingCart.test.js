import shoppingCart from '../../src/reducers/shoppingCart';
import * as actions from '../../src/actions/actions';

describe('shoppingCart reducer', () => {
	it('should return an empty state array given unknown an action type', () => {
		expect(shoppingCart([], {
			type: 'FOO',
			index: 0
		})).toEqual([])
	})

	it('should handle ADD_TO_CART', () => {
		expect(shoppingCart([], {
			type: actions.ADD_TO_CART,
			productID: 1
		})).toEqual([
			{ productID: 1 }
		])
	})

	it('should handle REMOVE_FROM_CART', () => {
		let state = [
			{ productID: 1 }, { productID: 2 }, { productID: 3 }
		]

		state = shoppingCart(state, { type: actions.REMOVE_FROM_CART, index: 0 })

		expect(state).toEqual([
			{ productID: 2 }, { productID: 3 }
		])
	})
})