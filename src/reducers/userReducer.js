/** @format */

import _ from 'lodash';
import { CREATE_USER, LIST_USERS } from '../constants/type';
export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_USER:
			// console.log('action :  ', action.payload);
			return { ...state, [action.payload.id]: action.payload };
		case LIST_USERS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
