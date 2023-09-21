/** @format */

import configPermission from './config';

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

function isCanView(permission: any) {
	return (CAN_VIEW & permission) === CAN_VIEW;
}

function isCanExe(permission: any) {
	return (CAN_EXE & permission) === CAN_EXE;
}

function isFullPermission(permission: any) {
	return (FULL_PERMISSION & permission) === FULL_PERMISSION;
}

function hasPermissionView(screen: any, role: any) {
	try {
		const permission = configPermission.business[role][screen];

		if (!permission) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		const { status, message } = permission;

		if (isFullPermission(status)) {
			return formatPermission(STATUS_HAS_PERMISSION, EMPTY_STRING);
		}

		if (!isNoPermission(status)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				message || MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		if (!isCanView(status)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				message || MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		return formatPermission(STATUS_HAS_PERMISSION, EMPTY_STRING);
	} catch (error) {
		return formatPermission(
			STATUS_NOT_PERMISSION,
			MESSAGE_NOT_PERMISSION_VIEW
		);
	}
}

function hasPermissionExe(screen: any, role: any) {
	try {
		const permission = configPermission.business[role][screen];

		if (!permission) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		const { status, message } = permission;

		const permissionView = hasPermissionView(screen, role);
		if (!permissionView.status) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				permissionView.message || MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		if (!isCanExe(status)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				message || MESSAGE_NOT_PERMISSION_EXE
			);
		}

		return formatPermission(STATUS_HAS_PERMISSION, EMPTY_STRING);
	} catch (error) {
		return formatPermission(
			STATUS_NOT_PERMISSION,
			MESSAGE_NOT_PERMISSION_VIEW
		);
	}
}

function hasPermissionViewApp(screen: any, role: any) {
	try {
		const permission = configPermission.app[role][screen];

		if (!permission) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		const { status, message } = permission;

		if (isFullPermission(status)) {
			return formatPermission(STATUS_HAS_PERMISSION, EMPTY_STRING);
		}

		if (!isNoPermission(status)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				message || MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		if (!isCanView(status)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				message || MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		return formatPermission(STATUS_HAS_PERMISSION, EMPTY_STRING);
	} catch (error) {
		return formatPermission(
			STATUS_NOT_PERMISSION,
			MESSAGE_NOT_PERMISSION_VIEW
		);
	}
}

export default {
	hasPermissionView,
	hasPermissionExe,
	hasPermissionViewApp,
};
