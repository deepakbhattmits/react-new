/** @format */

import { SIGN_IN, SIGN_OUT } from '../constants/type';
const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			console.log('test :', action.payload);
			return { ...state, isSignedIn: true, userId: action.payload };
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null };
		default:
			return state;
	}
};
