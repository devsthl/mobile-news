/** @format */

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import navigationConfig from './navigationConfig';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AuthLoading from '../Containers/AuthLoading';
import CheckCompanyCode from '../Containers/CheckCompanyCode';
import TabBarComponent from '../Components/TabBarComponent';
import {
	generateTabConfig,
	generateLoginStackConfigs,
	generateTabBarComponentConfig,
} from './navigationHelper';
import fakeData from './fakeData'
import Rated from '../Containers/Rated';
import ListofEmployees from '../Containers/ListofEmployees';
import Survay from '../Containers/Survey';
export { navigationConfig };

const renderRootNavigation = (dataConfig: any) => {
	// const navigation = useNavigation()
	// const bottomTabs: any[] = [];
	const loginStack = [
		{
			companyCode: 'CORE',
			container: 'Login',
			navigation: ['tab', 'stack'],
			tab: 'Login',
		},
		{
			companyCode: 'CORE',
			container: 'AuthLoading',
			// container: 'EmployeesDetail',
			navigation: ['stack'],
			tab: 'Login',
		},
	];

	// dataConfig.forEach((data: any) => {
	// 	if (!data.switch) {
	// 		bottomTabs.push(data);
	// 	}
	// });

	const bottomTabNavigator = createBottomTabNavigator(
		generateTabConfig(fakeData),
		{
			tabBarComponent: (props) => (
				<TabBarComponent
					tabBarConfig={generateTabBarComponentConfig(fakeData)}
					{...props}
				/>
			),
			lazy: false,
		}
	);

	// const bottomTabStackConfig = generateLoginStackConfigs(dataConfig);
	const loginStackConfig = generateLoginStackConfigs(loginStack);

	const switchNavigation = createSwitchNavigator({
		AuthLoading: {
			screen: AuthLoading,
			// screen: ListofEmployees,
		},
		CheckCompanyCode: {
			screen: CheckCompanyCode,
		},
		LoginStack: {
			screen: loginStackConfig,
		},
		BottomTab: {
			screen: bottomTabNavigator,
		},
	});

	return createAppContainer(switchNavigation);
}

export default renderRootNavigation;
