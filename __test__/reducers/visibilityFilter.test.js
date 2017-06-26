import visibilityFilter from '../../src/reducers/visibilityFilter';
import * as actionTypes from '../../src/actions/actionTypes';

describe('visibilityFilter reducer', () => {
	let state = actionTypes.CategoryFilters.ALL

	state = visibilityFilter(state, { type: actionTypes.SET_CATEGORY_FILTER, filter: actionTypes.CategoryFilters.BOOKS })

	it('should handle SET_CATEGORY_FILTER', () => {
		expect(state).toEqual(
			actionTypes.CategoryFilters.BOOKS
		)
	})

	it('should return an empty state array given an unknown action type', () => {
		expect(visibilityFilter([], {
			type: 'FOO',
			filter: actionTypes.CategoryFilters.ALL
		})).toEqual([])
	})
})