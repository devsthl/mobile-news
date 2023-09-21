/** @format */

import { Dimensions, Platform } from 'react-native';

const isIPhoneX = () => {
	const dimensions = Dimensions.get('window');
	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTV &&
		(dimensions.height === 812 || dimensions.width === 812)
	);
};

// eslint-disable-next-line
export { isIPhoneX };
