/** @format */

import { SIGN_IN, SIGN_OUT, LIST_USERS } from '../constants/type';
import users from '../apis/users';
export const createUser = (formValues) => async (dispatch) => {
	users.post('/users', formValues);
};
export const listUser = () => async (dispatch) => {
	const response = await users.get('/users');
	// console.log('test : ',response.data)
	dispatch({ type: LIST_USERS, payload: response.data });
};
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};
export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};
