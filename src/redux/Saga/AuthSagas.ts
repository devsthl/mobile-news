/** @format */

import { call, put, delay } from 'redux-saga/effects';
import AuthActions from '../Redux/AuthRedux';
import { getMessageError } from '../../Utils/utils';
import { responseStatus } from '../../Constants';
import { ConfigEnv } from '../../Permission';

export function* login(api: any, { body }: any) {
	yield delay(600);

	const response = yield call(api.login, body);
	console.log('response11111....', response);

	if (!response.ok) {
		return yield put(AuthActions.loginFailure(getMessageError(response))); //sua 
	}
	console.log("response2", response);

	const { data } = response;
	console.log("response21", data);

	if (data.statusCode !== responseStatus.SUCCESS) {
		return yield put(AuthActions.loginFailure(getMessageError(response)));
	}

	const uriImage = yield ConfigEnv.getImageAvatar();
	const userInfo = {
		...data.data,
		uriImage,
	};

	yield put(AuthActions.loginSuccess(userInfo));
}

export function* checkToken(api: any) {
	try {
		const response = yield call(api.checkToken, {});

		if (!response.ok) {
			return yield put(
				AuthActions.checkTokenFailure(getMessageError(response))
			);
		}

		const { data } = response;
		if (data.ResponseStatus !== responseStatus.SUCCESS) {
			return yield put(
				AuthActions.checkTokenFailure(getMessageError(response))
			);
		}

		const uriImage: string = yield ConfigEnv.getImageAvatar();

		const userInfo = {
			Avatar: data.ParameterOutput.Avatar,
			CompanyCode: data.ParameterOutput.CompanyCode,
			Email: data.ParameterOutput.Email,
			FullName: data.ParameterOutput.FullName,
			Mobile: data.ParameterOutput.Mobile,
			UserID: data.ParameterOutput.UserID,
			uriImage,
		};
		yield put(AuthActions.checkTokenSuccess(userInfo));
	} catch (error) {
		console.log('error', error);
	}
}
