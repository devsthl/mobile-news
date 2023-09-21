// /** @format */

// // import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';
// // import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import {
// 	AsyncStorageNotification,
// 	setAppToken,
// } from '../Utils/AsyncStorageHelper';
// // import { ConfigEnv } from '../Permission';
// import { AsyncStorageAppConfig } from './AsyncStorageHelper';

// export const getNitificationFromAsyncStorage = async (callback: Function) => {
// 	try {
// 		const notification = await AsyncStorageNotification.get();

// 		if (notification) {
// 			const badge = notification?.badge || 0;
// 			callback(badge);
// 		}

// 		AsyncStorageNotification.set({
// 			badge: 0,
// 			notifications: [],
// 		});
// 	} catch (error) {
// 		console.log('getNitificationFromAsyncStorage', error);
// 	}
// };

// // const setNotificationToAsyncStorage = async (remoteMessage) => {
// const setNotificationToAsyncStorage = async () => {
// 	try {
// 		const notification = await AsyncStorageNotification.get();

// 		if (notification) {
// 			notification['badge'] = (notification.badge || 0) + 1;

// 			const notifications = notification['notifications'];
// 			if (!notifications) {
// 				notification['notifications'] = [
// 					{
// 						title: 'TITLE 1',
// 						body: 'BODY',
// 					},
// 				];
// 			} else {
// 				notifications.unshift({
// 					title: 'TITLE 1',
// 					body: 'BODY',
// 				});
// 			}

// 			AsyncStorageNotification.set(notification);
// 		} else {
// 			const noti = {};
// 			noti['badge'] = 1;
// 			noti['notifications'] = [
// 				{
// 					title: 'TITLE 1',
// 					body: 'BODY',
// 				},
// 			];

// 			AsyncStorageNotification.set(noti);
// 		}
// 	} catch (error) {
// 		console.log('getNitificationToAsyncStorage', error);
// 	}
// };

// export function resetNotificationAsyncStorage() {
// 	const noti = {
// 		badge: 0,
// 		notifications: [],
// 	};

// 	AsyncStorageNotification.set(noti);
// }

// const NotificationConfig = {
// 	getFirebaseToken: async () => {
// 		const token = await messaging().getToken();
// 		return token || '';
// 	},
// 	subscribeToTopic: async () => {
// 		const getCompanyCode = async () => {
// 			try {
// 				const appConfig = await AsyncStorageAppConfig.get();
// 				return appConfig.env.customerKey || '';
// 			} catch (error) {
// 				console.log('getCompanyCode', error);
// 				return '';
// 			}
// 		};

// 		const companyCode = await getCompanyCode();

// 		if (companyCode) {
// 			messaging()
// 				.subscribeToTopic(companyCode.split(' ').join(''))
// 				.then(() => console.log('Subscribed to topic!    TOPIC'))
// 				.catch(() =>
// 					console.log('Subscribed to topic! FAILSE    TOPIC')
// 				);
// 		}
// 	},
// 	requestUserPermission: async () => {
// 		const authStatus = await messaging().requestPermission();
// 		const enabled =
// 			authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
// 			authStatus === messaging.AuthorizationStatus.PROVISIONAL;

// 		if (enabled) {
// 			console.log('Authorization status:', authStatus);
// 		}
// 	},
// 	setBackgroundMessage: function () {
// 		messaging().setBackgroundMessageHandler(async (remoteMessage) => {
// 			setNotificationToAsyncStorage(remoteMessage);
// 		});
// 	},
// 	pushNotification: function () {
// 		PushNotification.configure({
// 			largeIcon: 'ic_launcher',
// 			smallIcon: 'ic_launcher',

// 			// (optional) Called when Token is generated (iOS and Android)
// 			onRegister: function ({ token }: any) {
// 				setAppToken(token);
// 			},

// 			// (required) Called when a remote is received or opened, or local notification is opened
// 			onNotification: function (notification: any) {
// 				setNotificationToAsyncStorage();
// 				// process the notification

// 				// (required) Called when a remote is received or opened, or local notification is opened
// 				notification.finish(PushNotificationIOS.FetchResult.NoData);
// 			},

// 			// (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
// 			onAction: function (notification: any) {
// 				console.log('ACTION:', notification.action);
// 				console.log('NOTIFICATION:', notification);

// 				// process the action
// 			},

// 			// (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
// 			onRegistrationError: function (err:any) {
// 				console.error(err.message, err);
// 			},

// 			// IOS ONLY (optional): default: all - Permissions to register.
// 			permissions: {
// 				alert: true,
// 				badge: true,
// 				sound: true,
// 			},

// 			// Should the initial notification be popped automatically
// 			// default: true
// 			popInitialNotification: true,

// 			/**
// 			 * (optional) default: true
// 			 * - Specified if permissions (ios) and token (android and ios) will requested or not,
// 			 * - if not, you must call PushNotificationsHandler.requestPermissions() later
// 			 * - if you are not using remote notification or do not have Firebase installed, use this:
// 			 *     requestPermissions: Platform.OS === 'ios'
// 			 */
// 			requestPermissions: true,
// 		});
// 	},
// };

// export default NotificationConfig;


