/** @format */

const STATUS_NOT_PERMISSION = false;
const STATUS_HAS_PERMISSION = true;
const MESSAGE_NOT_PERMISSION_VIEW = 'Bạn không có quyền truy cập';
const MESSAGE_NOT_PERMISSION_EXE = 'Bạn không có quyền truy thự thi';
const EMPTY_STRING = '';

const NO_PERMISSION = 0;
const CAN_VIEW = 1;
const CAN_EXE = 2;
const FULL_PERMISSION = 3;

function formatPermission(status = false, message = '') {
	return {
		status,
		message,
	};
}

function isNoPermission(permission: any) {
	return NO_PERMISSION === permission;
}

function isCanView(permission:any) {
	return (CAN_VIEW & permission) === CAN_VIEW;
}

function isCanExecute(permission:any) {
	return (CAN_EXE & permission) === CAN_EXE;
}

function isFullPermission(permission: any) {
	return (FULL_PERMISSION & permission) === FULL_PERMISSION;
}

export {
	formatPermission,
	isNoPermission,
	isCanView,
	isCanExecute,
	isFullPermission,
	STATUS_NOT_PERMISSION,
	STATUS_HAS_PERMISSION,
	MESSAGE_NOT_PERMISSION_VIEW,
	MESSAGE_NOT_PERMISSION_EXE,
	EMPTY_STRING,
};
