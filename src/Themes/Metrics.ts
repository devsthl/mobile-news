/** @format */

import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const Metrics = {
	marginHorizontal: 10,
	marginVertical: 10,
	section: 25,
	baseMargin: 10,
	doubleBaseMargin: 20,
	smallMargin: 5,
	doubleSection: 50,
	horizontalLineHeight: 1,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	ratioH: height / 812,
	ratioW: width / 375,
	buttonRadius: 4,
	goldenRatio: 1.618033,
	icon: {
		extraSmall: 12,
		small: 14,
		medium: 16,
		large: 20,
		extraLarge: 24,
	},
	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200,
		logoSmall: 180,
		logoRadiusSmall: 90,
		logoRadius: 100,
		logo1: 120,
	},
};

export default Metrics;
