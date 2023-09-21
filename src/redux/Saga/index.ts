
import { takeLatest, all, spawn } from 'redux-saga/effects';
import asyncApi from '../../Utils/generateAPI';

import { AppTypes } from '../Redux/AppRedux';
import { AuthTypes } from '../Redux/AuthRedux';

import { appStartUp, updateEnableFaceID } from './AppSaga';
import { login, checkToken } from './AuthSagas';



export default function* root() {
	const api = yield asyncApi;

	const sagas = [
		takeLatest(AppTypes.APP_START_UP, appStartUp),
		takeLatest(AppTypes.UPDATE_ENABLE_FACE_ID, updateEnableFaceID),

		takeLatest(AuthTypes.LOGIN, login, api),
		takeLatest(AuthTypes.CHECK_TOKEN, checkToken, api),
    ]

	yield all(
		sagas.map((saga) =>
			spawn(function* () {
				try {
					yield saga;
				} catch (error) {
					console.log('error in children saga', error);
				}
			})
		)
	);
}