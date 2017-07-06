import { SET_MODAL_VISIBILITY } from '../actions/actionTypes';

const modal = (state = false, action) => {
	switch (action.type) {
		case SET_MODAL_VISIBILITY:
			return action.isVisible
		default:
			return state
	}
}

export default modal