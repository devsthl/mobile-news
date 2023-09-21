/** @format */

import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes';

export default StyleSheet.create({
	modalWrapper: {
		flex: 1,
		position: 'absolute',
		width: Metrics.screenWidth,
		height: Metrics.screenHeight,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: Colors.translucentBlack,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalUnderlay: {
		position: 'absolute',
		width: Metrics.screenWidth,
		height: Metrics.screenHeight,
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
		backgroundColor: Colors.transparent,
	},
	modalStyle: {
		width: Metrics.screenWidth * 0.75,
		backgroundColor: Colors.white,
		opacity: 1,
		borderRadius: 5,
		overflow: 'hidden',
	},
	alertContent: {
		width: Metrics.screenWidth * 0.75,
		alignItems: 'center',
		paddingTop: 15,
	},
	alertView: {
		alignItems: 'flex-start',
	},
	textTitle: {
		color: Colors.black,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginLeft: 15,
		marginRight: 15,
	},
	textMessage: {
		fontSize: 18,
		color: Colors.black,
		textAlign: 'center',
		paddingLeft: 15,
		paddingRight: 15,
	},
	button: {
		width: Metrics.screenWidth * 0.75,
		height: 40,
		justifyContent: 'center',
		borderTopWidth: 1,
		borderTopColor: Colors.grey.lighter,
		marginTop: 15,
		alignItems: 'center',
	},
	buttonText: {
		color: Colors.error,
		fontSize: 18,
		backgroundColor: Colors.transparent,
	},
	scrollViewStyles: {
		maxHeight: Metrics.screenWidth * 0.5,
	},
});
