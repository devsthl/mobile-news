/** @format */

// import { apiConfig } from '../Utils/generateAPI';
import {
	AsyncStorageAppConfig,
	AsyncStorageFirstInitApp,
	AsyncStorageNavigationConfig,
	AsyncStorageAppSettings,
} from '../Utils/AsyncStorageHelper';
import ConfigEnv from './configEnv';
import moment from 'moment';
// import NotificationConfig from '../Utils/pushNotificationHeper';
import APIConfig from '../Services/ApiConfig';
import fakeData from '../Navigation/fakeData';

async function fetchConfigFromServer(companyCode: string) {
	try {
		// const response = await apiConfig.getAppConfig({
		// 	customerCode: companyCode,
		// });
		const response = await APIConfig.create().getAppConfig({
			customerCode: companyCode,
		});

		// console.log('ress...', JSON.stringify(response))

		if (response.problem && response.problem === 'NETWORK_ERROR') {
			return 'Lỗi không có kết nối mạng.';
		}
		if (response.problem && response.problem === 'TIMEOUT_ERROR') {
			return 'Lỗi thời gian server phục vụ quá lâu.';
		}
		if (!response.ok) {
			return 'Lỗi server';
		}

		const { data }: any = response;

		if (data && !data.app && !data.env) {
			return 'Lỗi không tồn tại mã công ty.';
		}

		await AsyncStorageAppConfig.set(data);

		const appSettings = await AsyncStorageAppSettings.get();
		AsyncStorageAppSettings.set({
			...appSettings,
			version: data.env.version,
		});

		// await ConfigEnv.setBaseURL(data.env.linkApi);
		await ConfigEnv.setBaseURL('http://192.168.60.122:6688/api/');
		// NotificationConfig.subscribeToTopic();

		await AsyncStorageNavigationConfig.set(data.screen);

		// console.log("fake data:",fakeData);
		//await AsyncStorageNavigationConfig.set(fakeData);

		return false;
	} catch (error) {
		console.log('error', error);
		return 'Lỗi đường dẫn không thể kết nối với server.';
	}
}

async function serviceConfigApp() {
	try {
		const config = await AsyncStorageAppConfig.get();

		if (!config) {
			return false;
		}

		const timeTokenExpired = config.env.timeTokenExpired;

		if (moment().isAfter(moment(timeTokenExpired, 'YYYY-MM-DD HH:mm:ss'))) {
			const obj = await AsyncStorageFirstInitApp.get();
			const result = await fetchConfigFromServer(obj.companyCode);

			if (result) {
				return;
			}
		}

		// await ConfigEnv.setBaseURL(config.env.linkApi);
		await ConfigEnv.setBaseURL('http://192.168.60.122:6688/api/');

		// const apiTemp = await API.create();
		// apiTemp.api.setBaseURL(config.env.linkApi)
		// NotificationConfig.subscribeToTopic();
	} catch (error) {
		console.log('serviceConfigApp', error);
		return false;
	}
}

async function initConfigApp(companyCode: string) {
	return await fetchConfigFromServer(companyCode);
}

async function getConfigApp() {
	return await serviceConfigApp();
}

export default {
	initConfigApp,
	getConfigApp,
};
