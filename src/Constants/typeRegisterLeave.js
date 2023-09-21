/** @format */

import { Colors } from '../Themes';
import { LanguageKeys } from '../Languages';

const typeRegisterLeave = {
	cancel: {
		title: 'Từ chối',
		alice: 'Từ chối',
		value: 3,
		color: Colors.status.rejected,
		label: 'cancel',
	},
	approve: {
		title: 'Phê duyệt',
		alice: 'Phê duyệt',
		value: 2,
		color: Colors.status.approved,
		label: 'approve',
	},
	pending: {
		title: 'Chờ duyệt',
		alice: 'Chờ duyệt',
		value: 1,
		color: Colors.status.pending,
		label: 'pending',
	},
	register: {
		title: 'Đăng ký',
		alice: 'Đăng ký',
		value: 0,
		color: Colors.status.registered,
		label: 'register',
	},
	// created: {
	// 	title: 'Khởi tạo',
	// 	alice: 'Khởi tạo',
	// 	value: 0,
	// 	color: Colors.status.created,
	// },
};

export const getTitleRegisterLeave = (value) => {
	let element;
	for (element in typeRegisterLeave) {
		if (typeRegisterLeave[element].value === value) {
			return typeRegisterLeave[element].title;
		}
	}

	return '';
};

export default typeRegisterLeave;
