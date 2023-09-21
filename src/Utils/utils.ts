/** @format */

import moment from 'moment';
import { Platform } from 'react-native';
import { ConfigEnv } from '../Permission';
import _ from 'lodash';
// import { languageHelper, LanguageKeys } from '../Languages';

const getMessageError = (response: any) => {
	if (response) {
		console.log('ERROR utils', response);

		const { config } = response;
		if (!ConfigEnv.isConfigUrlSetup(config)) {
			return 'Mã công ty không được để trống';
		}

		// if (response.data && response.data.ResponseStatus !== 1) {
		// 	return response.data.Message;
		// }

		if (response.data && response.data.message === 'ERROR_USERNAME_INCORRECT') {
			return 'Tài khoản không tồn tại';
		}
		if (response.data && response.data.message === 'ERROR_LOCKED') {
			return 'Tài khoản đã bị khóa';
		}
		if (response.data && response.data.message === 'ERROR_PASSWORD_INCORRECT') {
			return 'Mật khẩu không đúng, vui lòng kiểm tra lại';
		}
		if (response.problem && response.problem === 'TIMEOUT_ERROR') {
			// return 'Lỗi đường truyền';
			return 'Lỗi thời gian server phục vụ quá lâu.';
		}
		// if (response.problem && response.problem === 'TIMEOUT_ERROR') {
		// 	return 'Lỗi đường truyền';
		// 	// return 'Lỗi thời gian server phục vụ quá lâu.';
		// }

		return 'Lỗi nghiệp vụ';
		// return 'Lỗi server.';
	}

	return 'Lỗi không xác định'
};

// const logError = async (response) => {
// 	try {
// 		if (typeof response === 'undefined') {
// 			console.log('ERROR UNDEFINED')
// 		} else {
// 			// {"duration":1053,"problem":"CLIENT_ERROR","ok":false,"status":404,"headers":{"x-content-type-options":"nosniff","date":"Thu, 05 Mar 2020 04:40:36 GMT","x-frame-options":"SAMEORIGIN","x-xss-protection":"1","content-length":"0","x-powered-by":"ASP.NET"},"config":{"transformRequest":{},"transformResponse":{},"timeout":10000,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json","Content-Type":"application/json","Authorization":"Bearer N0NBNUQzNjQtRkQ2Qy00M0VDLTkyN0ItQkZFMTRFQTA2MjcyXlRWR14yXjIwMjAwMzA1MTA0NTM0LjAzN2VjNWQ2MTAzMTBjZWNiMGFiNjM2OTY3MTVkMzg0"},"baseURL":"http://192.168.60.80:5555/API/Mobile/","method":"post","url":"http://192.168.60.80:5555/API/Mobile/ListRegisterLeaved","data":"{\"UserID\":2,\"Status\":\"1,2,3,4\",\"ManagerStatus\":0,\"Page\":1,\"PageSize\":5}"},"data":null}
// 			// UserInfo {"companyCode":"TVG","fullName":"TVG Admin","email":"null","userID":2,"avatar":""}
// 			// error title. error code, error detail, user id, -
// 			const userInfo = await AsyncStorage.getItem(USER_INFO)
// 			const parseObj = JSON.parse(userInfo)
// 			const body = {
// 				ErrorCode: '1',
// 				ErrorTitle: 'API',
// 				ErrorDetail: `url: ${response.config.url} | status: ${response.status} | problem: ${response.problem}`, // `url: ${response.config.url}/ data: ${response.config.data}/ status: ${response.status}/ problem: ${response.problem}`,
// 				UserInfo: `userName: ${parseObj.email}`,
// 				UserID: parseObj.userID,
// 			}
// 			const result = await api.loggerError(body)
// 		}
// 	} catch (error) {}
// }

const formatDateTime = (value, stringFormat) =>
	moment(value).isValid() ? moment(value).format(stringFormat) : '';

const decodeBase64 = (codeBase64) => {
	return atob(codeBase64);
};

function convertListToTtree(list) {

	const map = {};
	const root = [];
	let node = {};
	const idRootNode = list[0].ID;
	// console.log('listOrg idRootNode', idRootNode)

	list.forEach((item, index) => {
		map[item.ID] = index;
		item.children = [];
		item.id = item.ID;
		item.name = item.NAME_VN;
	});

	list.forEach((item) => {
		node = item;
		if (node.id === idRootNode) {
			root.push(node);
		} else {
			// console.log('listOrg idRootNodepp', map[node.PARENT_ID], node.id)
			try {
				list[map[node.PARENT_ID]].children.push(node);
			} catch {
				console.log('listOrg err', node.id, node.PARENT_ID)
			}

		}
	});

	return root;
}

function formatDate(
	date,
	outFormat = 'DD/MM/YYYY',
	inFormat = 'YYYY-MM-DD',
	placeholder = '-'
) {
	if (!date) {
		return placeholder;
	}

	return moment(date, inFormat).format(outFormat);
}

function formatPeriod(
	startDate,
	endDate,
	ifEmpty = '-',
	undefinedStartDate = '?',
	undefinedEndDate = '?',
	outFormat = 'DD/MM/YYYY',
	inFormat = 'YYYY-MM-DD'
) {
	// ifEmpty ? null : ifEmpty = '-'

	if (!startDate && !endDate) {
		return ifEmpty;
	}

	if (startDate && !endDate) {
		return (
			moment(startDate, inFormat).format(outFormat) +
			' - ' +
			undefinedEndDate
		);
	}

	if (!startDate && endDate) {
		return (
			undefinedStartDate +
			' - ' +
			moment(endDate, inFormat).format(outFormat)
		);
	}

	return (
		moment(startDate, inFormat).format(outFormat) +
		' - ' +
		moment(endDate, inFormat).format(outFormat)
	);
}

function formatPeriodMMYYYY(
	startDate,
	endDate,
	ifEmpty = '-',
	undefinedStartDate = '?',
	undefinedEndDate = '?',
	outFormat = 'MM/YYYY',
	inFormat = 'YYYY-MM-DD'
) {
	// ifEmpty ? null : ifEmpty = '-'

	if (!startDate && !endDate) {
		return ifEmpty;
	}

	if (startDate && !endDate) {
		return (
			moment(startDate, inFormat).format(outFormat) +
			' - ' +
			undefinedEndDate
		);
	}

	if (!startDate && endDate) {
		return (
			undefinedStartDate +
			' - ' +
			moment(endDate, inFormat).format(outFormat)
		);
	}

	return (
		moment(startDate, inFormat).format(outFormat) +
		' - ' +
		moment(endDate, inFormat).format(outFormat)
	);
}

function formatTime(
	date,
	outFormat = 'HH:mm',
	inFormat = 'YYYY-MM-DD HH:mm:ss',
	placeholder = '-'
) {
	if (!date) {
		return placeholder;
	}

	return moment(date, inFormat).format(outFormat);
}

function getDate(format = 'MM/DD/YYYY') {
	return moment().format(format);
}

const getFieldValue = (data, field, ifEmpty = '-') => {
	if (!data || !data[field] || data[field] === ' ') {
		return ifEmpty;
	}

	return _.get(data, field);
};

const getPendingStep = (data, field, ifEmpty = '-') => {
	if (!data[field] || data[field] === ' ') {
		return ifEmpty;
	}

	return `Chờ duyệt bước ${_.get(
		data,
		field
	)}`;
};

function formatMoney(data, field, ifEmpty = '-') {
	if (!data || !data[field]) {
		return ifEmpty;
	}

	if (Platform.OS === 'android') {
		return (
			_.get(data, field)
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' vnd'
		);
	} else {
		if (!data[field] || data[field] === ' ') {
			return ifEmpty;
		}
		return _.get(data, field).toLocaleString('vi-VN', {
			style: 'currency',
			currency: 'VND',
		});
	}
}

function getBinary(
	data,
	field,
	ifEmpty = '-',
	ifTrue = true,
	ifFalse = false,
	trueValue = -1,
	falseValue = 0
) {
	if (data[field] === falseValue) {
		return ifFalse;
	}

	if (!data[field] || data[field] === ' ') {
		return ifEmpty;
	}

	if (data[field] === trueValue) {
		return ifTrue;
	}
}

function numberWithCommas(x) {
	if (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
}

function calculateLunchBreak(
	selectedStartTime,
	selectedEndTime,
	lunchBreakStart = 1200,
	lunchBreakEnd = 1330
) {
	const selectedEndTimeToInt = parseInt(
		selectedEndTime.toString().replace(':', ''),
		10
	);
	const selectedStartTimeToInt = parseInt(
		selectedStartTime.toString().replace(':', ''),
		10
	);

	if (!selectedEndTimeToInt || !selectedStartTimeToInt) {
		return 0;
	} else {
		if (selectedEndTimeToInt <= lunchBreakStart) {
			return 0;
		} else if (
			selectedEndTimeToInt > lunchBreakStart &&
			selectedEndTimeToInt <= lunchBreakEnd
		) {
			if (selectedStartTimeToInt < lunchBreakStart) {
				return moment(selectedEndTime, 'HH:mm').diff(
					moment('12:00', 'HH:mm'),
					'hours',
					true
				);
			} else if (selectedStartTimeToInt >= lunchBreakStart) {
				if (selectedStartTimeToInt < lunchBreakEnd) {
					return moment(selectedEndTime, 'HH:mm').diff(
						moment(selectedStartTime, 'HH:mm'),
						'hours',
						true
					);
				} else {
					return 0;
				}
			}
		} else if (selectedEndTimeToInt > lunchBreakEnd) {
			if (selectedStartTimeToInt < lunchBreakStart) {
				return '1.5';
			} else if (selectedStartTimeToInt >= lunchBreakStart) {
				if (selectedStartTimeToInt < lunchBreakEnd) {
					return moment('13:30', 'HH:mm').diff(
						moment(selectedStartTime, 'HH:mm'),
						'hours',
						true
					);
				} else {
					return 0;
				}
			}
		}
	}
}

export {
	getMessageError,
	formatDateTime,
	decodeBase64,
	convertListToTtree,
	formatDate,
	formatMoney,
	formatTime,
	formatPeriod,
	formatPeriodMMYYYY,
	getDate,
	getFieldValue,
	getBinary,
	numberWithCommas,
	calculateLunchBreak,
	getPendingStep,
};
