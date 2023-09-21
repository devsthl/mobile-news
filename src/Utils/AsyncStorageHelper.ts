/** @format */

import {
	USER_ACCOUNT,
	USER_INFO,
	TOKEN,
	LIST_STORAGE_ORG,
	LIST_ORG,
	APP_TOKEN,
	TYPE_REGISTER_LEAVE,
	TYPE_REGISTER_OT,
	TYPE_REGISTER_WLEO,
	NOTIFICATION,
	APP_CONFIG,
	BUSSINESS_CONFIG,
	FIRST_INIT_APP,
	APP_SETTINGS,
	APP_NAVIGATION,
	LIST_PROVINCE,
	LIST_EMP,
	LIST_RELATIONSHIP,
	LIST_GENDER,
	LIST_NATION,
	MENU_DASHBOARD,
	THEMES,
} from '../Config/asyncKey';
import AsyncStorage from '@react-native-community/async-storage';
import { Themes } from '../Hooks/useThemeColors';

export const getToken = async () => {
	try {
		return await AsyncStorage.getItem(TOKEN);
	} catch (error) {
		console.log('error', error);
	}
};

export const setToken = async (token: string) => {
	try {
		await AsyncStorage.setItem(TOKEN, token);
	} catch (error) {
		console.log('error', error);
	}
};

export const removeToken = async () => {
	try {
		await AsyncStorage.removeItem(TOKEN);
	} catch (error) {
		console.log('error', error);
	}
};

export const setUserAccount = async (userAccount: Object) => {
	try {
		const userAccStr = JSON.stringify(userAccount);
		await AsyncStorage.setItem(USER_ACCOUNT, userAccStr);
	} catch (error) {
		console.log('error', error);
	}
};

export const getUserAccount = async () => {
	try {
		const userAccount = await AsyncStorage.getItem(USER_ACCOUNT);
		return JSON.parse(userAccount);
	} catch (error) {
		console.log('error', error);
	}
};

export const removeUserAccount = async () => {
	try {
		await AsyncStorage.removeItem(USER_ACCOUNT);
	} catch (error) {
		console.log('error', error);
	}
};

export const setUserInfo = async (userInfo: Object) => {
	try {
		const userStr = JSON.stringify(userInfo);
		await AsyncStorage.setItem(USER_INFO, userStr);
	} catch (error) {
		console.log('error', error);
	}
};

export const getUserInfo = async () => {
	try {
		const userStr = await AsyncStorage.getItem(USER_INFO);
		return JSON.parse(userStr);
	} catch (error) {
		console.log('error', error);
	}
};

export const removeUserInfo = async () => {
	try {
		await AsyncStorage.removeItem(USER_INFO);
	} catch (error) {
		console.log('error', error);
	}
};

export const setStorageListOrg = async (listOrg: JSON) => {
	try {
		const tempString = JSON.stringify(listOrg);
		await AsyncStorage.setItem(LIST_STORAGE_ORG, tempString);
	} catch (error) {
		console.log('error', error);
	}
};
export const getStorageListOrg = async () => {
	try {
		return await AsyncStorage.getItem(LIST_STORAGE_ORG);
	} catch (error) {
		console.log('error', error);
	}
};
export const removeStorageListOrg = async () => {
	try {
		return await AsyncStorage.removeItem(LIST_STORAGE_ORG);
	} catch (error) {
		console.log('error', error);
	}
};

export const setListOrg = async (listOrg: JSON) => {
	try {
		const tempString = JSON.stringify(listOrg);
		await AsyncStorage.setItem(LIST_ORG, tempString);
	} catch (error) {
		console.log('error', error);
	}
};
export const getListOrg = async () => {
	try {
		const result = await AsyncStorage.getItem(LIST_ORG);
		return JSON.parse(result.toString());
	} catch (error) {
		console.log('error', error);
	}
};
export const removeListOrg = async () => {
	try {
		return await AsyncStorage.removeItem(LIST_ORG);
	} catch (error) {
		console.log('error', error);
	}
};
export const setAppToken = async (token: string) => {
	try {
		// console.log('token', token)
		await AsyncStorage.setItem(APP_TOKEN, token);
	} catch (error) {
		console.log('error', error);
	}
};

export const getAppToken = async () => {
	try {
		return await AsyncStorage.getItem(APP_TOKEN);
	} catch (error) {
		console.log('error', error);
	}
};

export const removeAppToken = async () => {
	try {
		return await AsyncStorage.removeItem(APP_TOKEN);
	} catch (error) {
		console.log('error', error);
	}
};

export const AsyncStorageTypeRegisterLeave = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(TYPE_REGISTER_LEAVE);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageTypeRegisterLeave.get', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(TYPE_REGISTER_LEAVE);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(TYPE_REGISTER_LEAVE, result);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterLeave.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(TYPE_REGISTER_LEAVE);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterLeave.remove', error);
		}
	},
};

export const AsyncStorageThemes = {
	get: async () => {
		try {
			const result: Themes | null = await AsyncStorage.getItem(THEMES);
			return result;
		} catch (error) {
			console.log('AsyncStorageTypeRegisterLeave.get', error);
			return 'default';
		}
	},
	set: async (data: Themes) => {
		try {
			await AsyncStorage.removeItem(THEMES);
			AsyncStorage.setItem(THEMES, data);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterLeave.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(THEMES);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterLeave.remove', error);
		}
	},
};

export const AsyncStorageTypeRegisterOt = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(TYPE_REGISTER_OT);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageTypeRegisterOt.get', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(TYPE_REGISTER_OT);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(TYPE_REGISTER_OT, result);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterOt.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(TYPE_REGISTER_OT);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterOt.remove', error);
		}
	},
};

export const AsyncStorageTypeRegisterWLEO = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(TYPE_REGISTER_WLEO);
			return JSON.parse(result);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterWLEO.get', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(TYPE_REGISTER_WLEO);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(TYPE_REGISTER_WLEO, result);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterWLEO.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(TYPE_REGISTER_WLEO);
		} catch (error) {
			console.log('AsyncStorageTypeRegisterWLEO.remove', error);
		}
	},
};

export const AsyncStorageNotification = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(NOTIFICATION);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageNotification.get', error);
			return null;
		}
	},
	set: async (data: JSON) => {
		try {
			const result = JSON.stringify(data);
			AsyncStorage.setItem(NOTIFICATION, result);
		} catch (error) {
			console.log('AsyncStorageNotification.set', error);
		}
	},
};

export const AsyncStorageAppConfig = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(APP_CONFIG);
			return JSON.parse(result);
		} catch (error) {
			console.log('AsyncStorageAppConfig.get', error);
			return null;
		}
	},
	set: async (data: any) => {
		try {
			// await AsyncStorage.removeItem(APP_CONFIG);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(APP_CONFIG, result);
		} catch (error) {
			console.log('AsyncStorageAppConfig.set', error);
			return null;
		}
	},
	remove: async () => {
		try {
			await AsyncStorage.removeItem(APP_CONFIG);
			console.log('xóa ...')
		} catch (error) {
			console.log('AsyncStorageAppConfig.remove', error);
		}
	},
};
export const AsyncStorageMenuDashboard = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(MENU_DASHBOARD);
			return JSON.parse(result);
		} catch (error) {
			console.log('AsyncStorageMenuDashboard.get', error);
			return null;
		}
	},
	set: async (data: any) => {
		try {
			const result = JSON.stringify(data);
			AsyncStorage.setItem(MENU_DASHBOARD, result);
		} catch (error) {
			console.log('AsyncStorageMenuDashboard.set', error);
			return null;
		}
	},
	remove: async () => {
		try {
			await AsyncStorage.removeItem(MENU_DASHBOARD);
			console.log('xóa ...')
		} catch (error) {
			console.log('AsyncStorageMenuDashboard.remove', error);
		}
	},
};

export const AsyncStorageNavigationConfig = {
	get: async () => {
		try {
			const result: any = await AsyncStorage.getItem(APP_NAVIGATION);
			return JSON.parse(result);
		} catch (error) {
			console.log('AsyncStorageNavigationConfig.get', error);
			return {};
		}
	},
	set: async (data: JSON) => {
		try {
			const result = JSON.stringify(data);
			AsyncStorage.setItem(APP_NAVIGATION, result);
		} catch (error) {
			console.log('AsyncStorageNavigationConfig.set', error);
			return null;
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(APP_NAVIGATION);
		} catch (error) {
			console.log('AsyncStorageNavigationConfig.remove', error);
		}
	},
};

export const AsyncStorageBussinessConfig = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(BUSSINESS_CONFIG);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageBussinessConfig.get', error);
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(BUSSINESS_CONFIG);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(BUSSINESS_CONFIG, result);
		} catch (error) {
			console.log('AsyncStorageBussinessConfig.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(BUSSINESS_CONFIG);
		} catch (error) {
			console.log('AsyncStorageBussinessConfig.remove', error);
		}
	},
};

export const AsyncStorageFirstInitApp = {
	setModel: (status?: any, companyCode: any = '') => {
		return {
			status,
			companyCode: companyCode,
		};
	},
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(FIRST_INIT_APP);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageFirstInitApp.get', error);
			return {
				status: true,
				companyCode: '',
			};
		}
	},
	set: async (data: any) => {
		try {
			await AsyncStorage.removeItem(FIRST_INIT_APP);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(FIRST_INIT_APP, result);
		} catch (error) {
			console.log('AsyncStorageFirstInitApp.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(FIRST_INIT_APP);
		} catch (error) {
			console.log('AsyncStorageFirstInitApp.remove', error);
		}
	},
};

export const AsyncStorageAppSettings = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(APP_SETTINGS);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageAppSettings.get', error);
		}
	},
	set: async (data: JSON) => {
		try {
			const result = JSON.stringify(data);
			AsyncStorage.setItem(APP_SETTINGS, result);
		} catch (error) {
			console.log('AsyncStorageAppSettings.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(APP_SETTINGS);
		} catch (error) {
			console.log('AsyncStorageAppSettings.remove', error);
		}
	},
};

export const AsyncStorageListProvince = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(LIST_PROVINCE);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageListProvince.get', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(LIST_PROVINCE);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(LIST_PROVINCE, result);
		} catch (error) {
			console.log('AsyncStorageListProvince.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(LIST_PROVINCE);
		} catch (error) {
			console.log('AsyncStorageListProvince.remove', error);
		}
	},
};

export const AsyncStorageListEmp = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(LIST_EMP);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageListEmp.get ne', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(LIST_EMP);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(LIST_EMP, result);
		} catch (error) {
			console.log('AsyncStorageListEmp.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(LIST_EMP);
		} catch (error) {
			console.log('AsyncStorageListEmp.remove', error);
		}
	},
};
//
export const AsyncStorageListRelationship = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(LIST_RELATIONSHIP);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageListRelationship.get', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(LIST_RELATIONSHIP);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(LIST_RELATIONSHIP, result);
		} catch (error) {
			console.log('AsyncStorageListRelationship.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(LIST_RELATIONSHIP);
		} catch (error) {
			console.log('AsyncStorageListRelationship.remove', error);
		}
	},
};
export const AsyncStorageListGender = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(LIST_GENDER);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageListGender.get', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(LIST_GENDER);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(LIST_GENDER, result);
		} catch (error) {
			console.log('AsyncStorageListGender.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(LIST_GENDER);
		} catch (error) {
			console.log('AsyncStorageListGender.remove', error);
		}
	},
};
export const AsyncStorageListNation = {
	get: async () => {
		try {
			const result = await AsyncStorage.getItem(LIST_NATION);
			return JSON.parse(result.toString());
		} catch (error) {
			console.log('AsyncStorageListNation.get', error);
			return [];
		}
	},
	set: async (data: JSON) => {
		try {
			await AsyncStorage.removeItem(LIST_NATION);

			const result = JSON.stringify(data);
			AsyncStorage.setItem(LIST_NATION, result);
		} catch (error) {
			console.log('AsyncStorageListNation.set', error);
		}
	},
	remove: () => {
		try {
			AsyncStorage.removeItem(LIST_NATION);
		} catch (error) {
			console.log('AsyncStorageListNation.remove', error);
		}
	},
};
