/** @format */

import { useState, useEffect } from 'react';
import { getMessageError } from '../Utils/utils';
import { responseStatus } from '../Constants';

function useFetchData(api: any, fnName: any, processFn: any) {
	const [data, setData] = useState<any>([]);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [fetching, setFetching] = useState(false);
	const [allData, setAllData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setFetching(true);
		const params = processFn();
		const request = await api;
		const response = await request[fnName]({ ...params });
		// console.log('response CheckinUnit', response);

		if (response.status != 200) {
			setResponseError(response);
			return;
		}

		const { data } = response;
		// if (data.statusCode !== responseStatus.SUCCESS) {
		// 	return setResponseError(response);
		// }

		setAllData(data);
		setData(data.result || []);
		setFetching(false);
	};

	const setResponseError = (response: any) => {
		setError(true);
		setErrorMessage(getMessageError(response));
		setFetching(false);
	};

	return { data, error, errorMessage, fetching, allData };
}

export default useFetchData;
