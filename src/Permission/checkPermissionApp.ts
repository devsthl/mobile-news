/** @format */

import {
	formatPermission,
	isCanView,
	STATUS_NOT_PERMISSION,
	MESSAGE_NOT_PERMISSION_VIEW,
	MESSAGE_NOT_PERMISSION_EXE,
	STATUS_HAS_PERMISSION,
	isCanExecute,
} from './common';

function isParamsEmpty(screen: any, permissions: any) {
	return !screen || !permissions || Object.keys(permissions).length === 0;
}

function canView(screen: any, permissions: any) {
	try {
		if (isParamsEmpty(screen, permissions)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		const { status, message } = permissions[screen];

		if (!isCanView(status)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				message || MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		return formatPermission(STATUS_HAS_PERMISSION);
	} catch (e) {
		return formatPermission(
			STATUS_NOT_PERMISSION,
			MESSAGE_NOT_PERMISSION_VIEW
		);
	}
}

function canExecute(screen: any, permissions: any) {
	try {
		// const resultCanView = canView(screen, permissions);
		// if(!resultCanView.status) {
		//     return formatPermission(STATUS_NOT_PERMISSION, resultCanView.message);
		// }
		if (isParamsEmpty(screen, permissions)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				MESSAGE_NOT_PERMISSION_VIEW
			);
		}

		const { status, message } = permissions[screen];

		if (!isCanExecute(status)) {
			return formatPermission(
				STATUS_NOT_PERMISSION,
				message || MESSAGE_NOT_PERMISSION_EXE
			);
		}

		return formatPermission(STATUS_HAS_PERMISSION);
	} catch (e) {
		return formatPermission(
			STATUS_NOT_PERMISSION,
			MESSAGE_NOT_PERMISSION_VIEW
		);
	}
}

function getAppPermission(screen: any, permissions: any) {
	try {
		return {
			view: canView(screen, permissions),
			execute: canExecute(screen, permissions),
		};
	} catch (e) {
		return {
			view: formatPermission(
				STATUS_NOT_PERMISSION,
				MESSAGE_NOT_PERMISSION_VIEW
			),
			execute: formatPermission(
				STATUS_NOT_PERMISSION,
				MESSAGE_NOT_PERMISSION_VIEW
			),
		};
	}
}

export default {
	canView,
	canExecute,
	getAppPermission,
};
