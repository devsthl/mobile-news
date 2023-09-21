/** @format */

import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

const styles = StyleSheet.create({
	border: {
		borderTopWidth: 1,
	},
	avatar: {
		borderRadius: 24 / 2,
		height: 24,
		width: 24,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		justifyContent: 'center',
		alignItems: 'center',
	},
	item: {
		width: Metrics.screenWidth / 6,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	versionBox: {
		position: 'absolute',
		right: -11,
		top: '35%',
	},
	version: {
		fontSize: 10,
		transform: [{ rotate: '270deg' }],
	},
	icon: {
		height: 24,
		width: 24,
	},
});

export default styles;
