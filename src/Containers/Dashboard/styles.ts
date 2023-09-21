/** @format */

import { StyleSheet } from 'react-native';
import { Colors, fontSize } from '../../Themes';
import Metrics from '../../Themes/Metrics';

const styles = StyleSheet.create({
	bgColor: {
		backgroundColor: Colors.grey.lightest,
	},
	pagesContainer: {
		width: Metrics.screenWidth - 32,
		alignSelf: 'center',
		backgroundColor: Colors.white,
		borderRadius: 7,
		overflow: 'hidden',
		marginBottom: 13,
	},
	menuHeader: {
		paddingHorizontal: 21,
		fontSize: fontSize.medium,
		paddingVertical: 14,
		fontWeight: '500',
	},
	specialNavigation: {
		marginVertical: 24,
		marginHorizontal: 16,
	},
	logo: {
		height: 24,
		width: 24,
		resizeMode: 'contain',
		overflow: 'hidden',
	},
	greeting: {
		fontSize: fontSize.large,
		color: Colors.grey.darkest,
		fontWeight: '400',
		paddingHorizontal: 12,
	},
	specialPromotions: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	viewAllPromotions: {
		position: 'absolute',
		right: 16,
		alignSelf: 'center',
	},
	rightNav: {
		height: 24,
		width: 24,
		resizeMode: 'contain',
	},

	imageHeader: {
        width: Metrics.screenWidth,
        height: 170,
        // marginBottom:85,
        backgroundColor: Colors.whitesecondary,
    },
    wrapHeader: {
        paddingBottom: 16,
        height: 170,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        paddingHorizontal: 22,
    },
    textMonent: {
        fontSize: fontSize.large,
        color: Colors.white,
        fontWeight: "700"
    },
    textMonth: {
        fontSize: fontSize.small,
        fontWeight: "400",
        // fontStyle: 'italic',
        color: Colors.white,
        marginBottom: 2
    },
    textMonthAL: {
        fontSize: fontSize.small,
        fontWeight: "400",
        fontStyle: 'italic',
        color: Colors.whitesecondary,
        marginBottom: 2
    },
    wrapCarousel: {
        marginTop: -90,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        height: 145,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    ImageNew: {
        width: Metrics.screenWidth - 32,
        height: 145,
        borderRadius: 20,
    },
    TextTitle: {
        position: 'absolute',
        width: '90%',
        textAlign: 'center',
        fontSize: fontSize.medium,
        fontWeight: "700"
    },
    iconCircle: {
        width: 52,
        height: 52,
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 27,
    },
    iconImageFlat: {
        width: 28,
        height: 28,
        tintColor: Colors.primary
    },
    wrapFlat: {
        flex: 1,
        width: Metrics.screenWidth,
        marginTop: 10,
        backgroundColor: Colors.whitesecondary,
        paddingHorizontal: 8,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    warpItemFlat: {
        justifyContent: "center",
        alignItems: 'center',
    },
    wrapTextFlat: {
        marginTop: 8,
        justifyContent: "center",
        alignItems: "center",
        width: 92
    },
    textNameFlat: {
        fontSize: fontSize.small,
        color: Colors.black,
        fontWeight: "600",
        textAlign: 'center',
    },
    viewBadge: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    badge: {
        backgroundColor: Colors.redPri,
        minWidth: 20,
        minHeight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        position: 'absolute',
        zIndex: 2,
        top: -5,
        right: -5,
    },
    textBadge: {
        fontWeight: '500',
        color: Colors.white,
        paddingHorizontal: 2,
        fontSize: fontSize.small
    },
    Logo: {
        width: 102,
        height: 31,
        tintColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary
    },
});

export default styles;
