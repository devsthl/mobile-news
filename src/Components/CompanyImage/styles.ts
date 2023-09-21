/** @format */

import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginBottom: 32,
	},
	logo: {
		height: 128,
		width: Metrics.screenWidth / 2,
		resizeMode: 'contain',
	},
});
export default styles;
