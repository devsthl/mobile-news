/** @format */

import apisauce from 'apisauce';
// import AsyncStorage from '@react-native-community/async-storage';

const create = (
	baseURL = 'https://mobileapi.histaff.online/MobileGateway'
	// baseURL = 'http://mobileapi.tinhvanconsulting.com:12789/MobileGateway/'
) => {
	const api = apisauce.create({
		// base URL is read from the "constructor"
		baseURL,
		// here are some default headers
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		// 10 second timeout...
		timeout: 10000,
	});

	// ------
	// STEP 2
	// ------
	//
	// Define some functions that call the api.  The goal is to provide
	// a thin wrapper of the api layer providing nicer feeling functions
	// rather than "get", "post" and friends.
	//
	// I generally don't like wrapping the output at this level because
	// sometimes specific actions need to be take on `403` or `401`, etc.
	//
	// Since we can't hide from that, we embrace it by getting out of the
	// way at this level.
	//

	const getAppConfig = async (body: any) => {
		const token = '';

		return api.get(
			'GetConfig',
			// {
			// 	customerCode: 'TVC',
			// },
			body,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

	};

	const getCompanyBenefits = async (body: any) => {
		const token = '';
		return api.get(
			'GetSpecialOffer?customerCode=' + body,
			{},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	};

	const updateSpecialOfferClickTracking = async (body: any) => {
		return api.post('UpdateSpecialOfferHistory', body, {});
	};

	return {
		getAppConfig,
		getCompanyBenefits,
		updateSpecialOfferClickTracking,
	};
};

export default {
	create,
};
