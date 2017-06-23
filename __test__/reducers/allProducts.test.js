import allProducts from '../../src/reducers/allProducts';

describe('allProducts reducer', () => {
	it('should return the default state', () => {
		expect(allProducts([], {})).toEqual([])
	})
})