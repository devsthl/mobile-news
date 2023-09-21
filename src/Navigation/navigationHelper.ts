/** @format */

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { mapRouter, mapRouterStackLogin, mapDefaultTab } from './routes';
import navigationConfig from './navigationConfig';
import { createDrawerNavigator } from 'react-navigation-drawer';

function generateStackConfig(arr: any) {
	const stackConfig: any = {};

	arr.forEach((screen: any) => {
		stackConfig[screen.container] = {
			screen: mapRouter(screen.container, screen.companyCode),
		};
	});

	return stackConfig;
}

function buildConfigNavigation(data: any) {
	const configNavigation: any = {};

	data.forEach((item: any) => {
		if (item.navigation.includes('tab')) {
			configNavigation[item.tab] = {
				name: item.tab,
				companyCode: item.companyCode,
				stack: [
					{
						container: item.container,
						companyCode: item.companyCode || 'CORE',
					},
				],
			};
		} else {
			configNavigation[item.tab].stack.push({
				container: item.container,
				companyCode: item.companyCode || 'CORE',
			});
		}
	});

	return configNavigation;
}

function generateTabConfig(data: any) {
	const tabConfig: any = {};
	const listConfig = buildConfigNavigation(data);
	// eslint-disable-next-line no-unused-vars
	Object.entries(listConfig).forEach(([key, item]: any[]) => {
		// The 'key' variable is nescessary for this to run, even if it is not used in code
		tabConfig[item.name] = {
			screen: createStackNavigator(
				generateStackConfig(item.stack),
				navigationConfig.stack
			),
			navigationOptions: {
				title: item.name,
			},
		};
	});

	return tabConfig;
}

function generateLoginStackConfigs(data: any) {
	const tabConfig: any = {};

	Object.entries(data).forEach(([key, item]: any) => {
		tabConfig[item.container] = mapRouterStackLogin(
			item.container,
			item.companyCode
		);
	});
	return createStackNavigator(tabConfig, {
		headerMode: 'none',
	});
}

function generateTabBarComponentConfig(data: any) {
	const tabBarConfig: any[] = [];
	let tabIndex = 0;

	data.forEach((item: any) => {
		if (item.navigation.includes('tab')) {
			tabBarConfig.push({
				index: tabIndex,
				tab: item.tab,
				defaultStack: mapDefaultTab(item.tab),
			});
			tabIndex++;
		}
	});
	return tabBarConfig;
}

export {
	generateTabConfig,
	generateLoginStackConfigs,
	generateTabBarComponentConfig,
};
