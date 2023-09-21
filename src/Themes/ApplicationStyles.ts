/** @format */

import Colors from './color';
import Fonts from './fontSize';
import Metrics from './Metrics';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const TAB_BAR_HEIGHT = 41;
const NAV_BAR_HEIGHT = 56;

const ApplicationStyles = {
	screen: {
		mainContainer: {
			flex: 1,
		},
		mainContainerSafeAreaAddon: {
		},
		alignCenterScreen: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		backgroundImage: {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		},
		container: {
			flex: 1,
			paddingTop: Metrics.baseMargin,
		},
		section: {
			margin: Metrics.section,
			padding: Metrics.baseMargin,
		},
		sectionText: {
			fontSize: Fonts.medium,
			paddingVertical: Metrics.doubleBaseMargin,
			marginVertical: Metrics.smallMargin,
			textAlign: 'center',
		},
		subtitle: {
			padding: Metrics.smallMargin,
			marginBottom: Metrics.smallMargin,
			marginHorizontal: Metrics.smallMargin,
		},
	},
	darkLabelContainer: {
		padding: Metrics.smallMargin,
		paddingBottom: Metrics.doubleBaseMargin,
		borderBottomWidth: 1,
		marginBottom: Metrics.baseMargin,
	},
	darkLabel: {
		fontFamily: 'bold',
	},
	groupContainer: {
		margin: Metrics.smallMargin,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	tabBarNavigation: {
		height: TAB_BAR_HEIGHT,
	},
	navBar: {
		height: NAV_BAR_HEIGHT,
	},
	appBackground: {
		flex: 1,
	},
	footer: {
		marginTop: 8,
	},
	itemContainerApprove: {
		padding: 16,
		paddingBottom: 24,
		marginHorizontal: 16,
		marginBottom: 6,
		marginTop: 6,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		borderRadius: 15,
		elevation: 4,
	},
	listContainerApprove: {
		width: Metrics.screenWidth,
	},
	containerApprove: {
		flex: 1,
	},
	shadowPopup: {
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
};

export default ApplicationStyles;
