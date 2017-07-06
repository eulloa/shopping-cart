import modal from '../../src/reducers/visibilityFilter';
import { SET_MODAL_VISIBILITY } from '../../src/actions/actionTypes';

describe('modal reducer', () => {
	it('should return true when SET_MODAL_VISIBILITY action is dispatched', () => {
		expect(modal(true, {
			type: SET_MODAL_VISIBILITY,
			isVisible: true
		})).toEqual(true)
	})
})