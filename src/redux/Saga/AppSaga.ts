/** @format */

import { put } from 'redux-saga/effects';
import AppActions from '../Redux/AppRedux';
// import { ConfigLanguage, languageHelper } from '../Languages';
import { AsyncStorageAppSettings } from '../../Utils/AsyncStorageHelper';
// import { LocaleConfig } from 'react-native-calendars';
import { ConfigBiometry } from '../../Utils/biometryHelper';

export function* appStartUp() {
	try {
		// setup language
		// let languageSetup = ConfigLanguage.defaultLanguage;

		// setup faceID
		let enableFaceID = ConfigBiometry.enableFaceID;

		const appSettings = yield AsyncStorageAppSettings.get();
		if (!appSettings) {
			const initSettings: any = {
				// language: ConfigLanguage.defaultLanguage,
				enableFaceID,
			};

			AsyncStorageAppSettings.set(initSettings);
		} else {
			// languageHelper.setLanguage(appSettings.language);
			// languageSetup =
			// 	appSettings.language || ConfigLanguage.defaultLanguage;

			// faceID
			enableFaceID =
				appSettings.enableFaceID || ConfigBiometry.enableFaceID;
		}

		// yield put(AppActions.updateLanguage(languageSetup));
		yield put(AppActions.updateEnableFaceId(enableFaceID));
	} catch (error) {
		console.log('appStartUp', error);
	}
}

// export function* updateLanguage({ language }) {
// 	const result = languageHelper.setLanguage(language);
// 	LocaleConfig.defaultLocale = result;

// 	try {
// 		const appSettings = yield AsyncStorageAppSettings.get();
// 		const tempSettings = { ...appSettings, language: result };
// 		yield AsyncStorageAppSettings.set(tempSettings);
// 	} catch (error) {
// 		console.log('updateLanguage', error);
// 	}
// }

export function* updateEnableFaceID({ enable }: any) {
	try {
		const appSettings = yield AsyncStorageAppSettings.get();
		const tempSettings = { ...appSettings, enableFaceID: enable };
		yield AsyncStorageAppSettings.set(tempSettings);
	} catch (error) {
		console.log('updateEnableFaceID', error);
	}
}
