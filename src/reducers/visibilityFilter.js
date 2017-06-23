import { CategoryFilters } from '../actions/actions';
import { SET_CATEGORY_FILTER } from '../actions/actions';

const visibilityFilter = (state = [], action) => {
	switch (action.type) {
		case SET_CATEGORY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter;