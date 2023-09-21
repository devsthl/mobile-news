/** @format */

import apisauce from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';
import { TOKEN } from '../Config/asyncKey';
import moment from 'moment';
import {
	getToken,
	getUserInfo,
	AsyncStorageAppConfig,
	removeUserInfo,
} from '../Utils/AsyncStorageHelper';
// import { ConfigEnv } from '../Permission';
// import NotificationConfig from '../Utils/pushNotificationHeper';
import NavigationService from '../NavigationService';
// our "constructor"
// const axiosInterceptor = apisauce.create({
// 	baseURL: 'http://192.168.60.122:6688/api/',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json',
// 	}
// })
// axiosInterceptor.axiosInstance.interceptors.request.use(

// )
const create = async () => {
	const getUrlApi = async () => {
		try {
			const appConfig = await AsyncStorageAppConfig.get();
			// const url = appConfig.env.linkApi;
			const url = 'http://192.168.60.122:6688/api/';
			// console.log("baseURL:", appConfig.env);

			return !url ? '' : url;
		} catch (error) {
			return '';
		}
	};

	const baseURL = await getUrlApi();
	// console.log('baseUrl', baseURL);

	const api = apisauce.create({
		// base URL is read from the "constructor"
		baseURL,
		// here are some default headers
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bear ${AsyncStorage.getItem(TOKEN)} || ''`
		},
		// 10 second timeout...
		timeout: 10000,
	});
	const getRoot = () => api.get('');
	const getRate = () => api.get('rate_limit');
	const getUser = (username: string) =>
		api.get('search/users', {
			q: username,
		});
	api.axiosInstance.interceptors.request.use(
		async (config) => {
			const newConfig = config
			const token = await AsyncStorage.getItem(TOKEN)

			if (token) {
				newConfig.headers.Authorization = `Bearer 11${token}`
			}
			return config
		},
		(error) => {
			Promise.reject(error)
		}
	)
	api.axiosInstance.interceptors.response.use(
		(response) => {
			// if (response && response.data && response.data.data && response.data.data.rows) {
			// 	return response.data.data.rows;
			// }
			console.log("response", response);
			// if (response && response?.data && response?.data?.data) {
			// 	return response.data.data;
			// }

			if (response.status === 200) {
				return response;
			}
			return response;
		},
		async (error) => {
			// console.log("erroe...", error.response);
			if (error.response?.status === 401 || error.response?.status === 500) {
				// removeUserInfo()
				NavigationService.navigate('Login', { messageAlert: 'Phiên đăng nhập hết hạn, vui lòng đăng nhập lại để tiếp tục' })
			}
			// server quá tải thì back về home

			return Promise.reject(error)
		},
	)
	// AUTH

	const login = async (body: JSON) => {
		// const token = await AsyncStorage.getItem(TOKEN);
		// console.log('token...', token)
		return api.post('authen/clientslogin', body, {
			headers: {
				Authorization: `Bearer`,
			},
		});
	};

	const EmployeeInfo = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		console.log('token...', token)

		return api.get('client/profile/getemployeeinfo', body, {
			// headers: {
			// 	Authorization: `Bearer ${token}`,
			// },
		}

		);
	}

	const getListemployeePaper = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		return api.get('client/profile/getlistemployeepaper', body, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}

	const getEmployeeFamily = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		return api.get('client/profile/getemployeefamily', body, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}

	const getListContract = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		return api.get('client/profile/getcontractinfo', body, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}

	const getListCommend = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		return api.get('client/profile/getcommendinfo', body, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}

	const getListDiscipline = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		return api.get('client/profile/getdisciplineinfo', body, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}

	const getInschange = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		return api.get('client/profile/getinschangeinfo', body, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}

	const getWorking = async (body: JSON) => {
		const token = await AsyncStorage.getItem(TOKEN);
		return api.get('client/profile/getworkinginfo', body, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}


	return {
		api,
		getRoot,
		getRate,
		getUser,
		login,
		EmployeeInfo, //Hồ sơ
		getListemployeePaper, //Giấy tờ
		getEmployeeFamily, //Thân nhân
		getListContract, //Hợp đồng
		getListCommend, //Khen Thưởng
		getListDiscipline, //Kỷ luật
		getInschange, //Biến động bảo hiểm
		getWorking, //Quyết định thay đổi
	};
};

export default {
	create,
};
