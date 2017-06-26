import { CategoryFilters } from '../actions/actionTypes';
import { SET_CATEGORY_FILTER } from '../actions/actionTypes';

const visibilityFilter = (state = [], action) => {
	switch (action.type) {
		case SET_CATEGORY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter;