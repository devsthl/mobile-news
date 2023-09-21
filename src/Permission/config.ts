/** @format */

const noPermission = 0;
const canView = 1;
// const canExe = 2;
const fullPermission = 3;

const configPermission = {
	env: {
		url: 'http://192.168.60.64:6426/API/Mobile/',
		// url: 'http://222.252.30.92:6426/API/Mobile/',
		version: '1.0.0',
	},
	app: {},
	business: {
		employee: {
			Login: {
				status: canView,
				message: 'Bạn không có quyền truy cập',
			},
			ApproveLeave: {
				status: noPermission,
				message: 'Bạn không có quyền truy cập',
			},
		},
		manager: {
			Login: {
				status: fullPermission,
				message: '',
			},
			AuthLoading: {
				status: fullPermission,
				message: '',
			},
			Dashboard: {
				status: fullPermission,
				message: '',
			},
			RegisterLeave: {
				status: fullPermission,
				message: '',
			},
			RegisterOt: {
				status: fullPermission,
				message: '',
			},
			RegisterLateInEarlyOut: {
				status: fullPermission,
				message: '',
			},
			Notification: {
				status: fullPermission,
				message: '',
			},
		},
	},
};

export default configPermission;
