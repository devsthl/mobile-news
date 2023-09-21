/** @format */

import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
	login: ['body'],
	loginSuccess: ['user'],
	loginFailure: ['message'],

	checkToken: [],
	checkTokenSuccess: ['user'],
	checkTokenFailure: ['message'],
});

export const AuthTypes = Types;
export default Creators;

/* ---- Init state --- */
const INITIAL_STATE = Immutable({
	user: {},
	fetching: false,
	isSuccess: false,
	message: '',

	authFetching: false,
	authMessage: '',
	authIsSuccess: false,
});

export const login = (state: any) => {
	return {
		...state,
		fetching: true,
		isSuccess: false,
		user: {},
		message: '',
	};
};

export const loginSuccess = (state: any, { user }: any) => ({
	...state,
	fetching: false,
	isSuccess: true,
	user,
});

export const loginFaiure = (state: any, { message }: any) => ({
	...state,
	fetching: false,
	isSuccess: false,
	message,
});

export const checkToken = (state: any) => {
	return {
		...state,
		authFetching: true,
		user: {},
		authMessage: '',
		authIsSuccess: false,
	};
};

export const checkTokenSuccess = (state: any, { user }: any) => {
	return {
		...state,
		authFetching: false,
		user,
		authIsSuccess: true,
	};
};

export const checkTokenFailure = (state: any, { message }: any) => {
	return {
		...state,
		authFetching: false,
		authMessage: message,
		authIsSuccess: false,
	};
};

const HANDLERS = {
	[Types.LOGIN]: login,
	[Types.LOGIN_SUCCESS]: loginSuccess,
	[Types.LOGIN_FAILURE]: loginFaiure,

	[Types.CHECK_TOKEN]: checkToken,
	[Types.CHECK_TOKEN_SUCCESS]: checkTokenSuccess,
	[Types.CHECK_TOKEN_FAILURE]: checkTokenFailure,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
