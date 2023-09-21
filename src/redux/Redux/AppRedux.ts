/** @format */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ConfigBiometry } from '../../Utils/biometryHelper';

const { Types, Creators } = createActions({
	appStartUp: [],
	updateLanguage: ['language'],
	updateEnableFaceId: ['enable'],
});
export const AppTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
	settings: {
		// language: ConfigLanguage.defaultLanguage,
		enableFaceID: ConfigBiometry.enableFaceID,
	},
});

export const appStartUp = (state: any) => {
	return state;
};

// export const updateLanguage = (state: any, { language }: any) => {
// 	return {
// 		...state,
// 		settings: { ...state.settings, language },
// 	};
// };

export const updateEnableFaceId = (state :any, { enable }: any) => {
	return {
		...state,
		settings: { ...state.settings, enableFaceID: enable },
	};
};

export const reducer = createReducer(INITIAL_STATE, {
	[Types.APP_START_UP]: appStartUp,
	// [Types.UPDATE_LANGUAGE]: updateLanguage,
	[Types.UPDATE_ENABLE_FACE_ID]: updateEnableFaceId,
});
