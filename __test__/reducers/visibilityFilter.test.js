import visibilityFilter from '../../src/reducers/visibilityFilter';
import * as actions from '../../src/actions/actions';

describe('visibilityFilter reducer', () => {
	let state = actions.CategoryFilters.ALL

	state = visibilityFilter(state, { type: actions.SET_CATEGORY_FILTER, filter: actions.CategoryFilters.BOOKS })

	it('should handle SET_CATEGORY_FILTER', () => {
		expect(state).toEqual(
			actions.CategoryFilters.BOOKS
		)
	})

	it('should return an empty state array given an unknown action type', () => {
		expect(visibilityFilter([], {
			type: 'FOO',
			filter: actions.CategoryFilters.ALL
		})).toEqual([])
	})
})