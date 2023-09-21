/** @format */

import configPermission from './config';
import { AsyncStorageAppConfig } from '../Utils/AsyncStorageHelper';
import api from '../Utils/generateAPI';

async function getUrlApi() {
	try {
		const appConfig = await AsyncStorageAppConfig.get();
		// const url = appConfig.env.linkApi;
		const url = 'http://192.168.60.122:6688/api/';

		return !url ? '' : url;
	} catch (error) {
		return '';
	}
}

function getVersionApp() {
	try {
		const version = configPermission.env.version;

		return !version ? '1.0.0' : version;
	} catch (error) {
		return '1.0.0';
	}
}

function isUpdateVersion(version) {
	try {
		return getVersionApp() !== version ? true : false;
	} catch (error) {
		return false;
	}
}

function isConfigUrlSetup({ baseURL }) {
	return baseURL !== '';
}

async function setBaseURL(url) {
	if (!url) {
		return;
	}

	const request = await api;

	request.api.setBaseURL(url);
}

async function getImageAvatar() {
	try {
		const appConfig = await AsyncStorageAppConfig.get();
		const uriImage = appConfig.env.linkServerImage;

		return !uriImage ? '' : uriImage;
	} catch (error) {
		return '';
	}
}

async function getCompanyCode() {
	try {
		const appConfig = await AsyncStorageAppConfig.get();
		return appConfig.env.customerKey || '';
	} catch (error) {
		console.log('getCompanyCode', error);
		return '';
	}
}

export default {
	getUrlApi,
	getVersionApp,
	isUpdateVersion,
	isConfigUrlSetup,
	setBaseURL,
	getImageAvatar,
	getCompanyCode,
};
