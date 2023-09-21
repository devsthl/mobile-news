/** @format */

import { StyleSheet } from 'react-native';
import { Colors, fontSize } from '../../Themes';
import Metrics from '../../Themes/Metrics';
import { MARGIN2, Pixel10, Pixel125, Pixel24, Pixel16, MARGIN, Pixel2, Pixel30, Pixel100, Pixel22, Pixel96, Pixel170 } from '../../Utils/Transform';
import Styles from '../../Components/Styles/Styles';
// const VIEW_LIST = 170 * Metrics.ratioH
// const widtd = Styles.constants.widthScreen
const styles = StyleSheet.create({
    bgColor: {
        backgroundColor: Colors.grey.lightest,
    },
    logo: {
        height: Pixel24,
        width: Pixel24,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    imageHeader: {
        width: Metrics.screenWidth,
        height: Pixel96,
    },
    wrapHeader: {
        paddingBottom: Pixel10,
        paddingHorizontal: Pixel22,
        justifyContent: 'space-between'
    },
    textMonent: {
        fontSize: fontSize.large,
        color: Colors.white,
        fontWeight: "700"
    },
    textMonth: {
        fontSize: fontSize.small,
        fontWeight: "400",
        color: Colors.white,
        marginBottom: Pixel2
    },
    wrapCarousel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Metrics.screenWidth * 2 / 5,
        borderRadius: MARGIN2,
    },
    ImageNew: {
        width: Metrics.screenWidth - 2 * MARGIN2,
        height: Pixel125,
        borderRadius: Pixel16,
    },
    TextTitle: {
        position: 'absolute',
        width: '90%',
        textAlign: 'center',
        fontSize: fontSize.medium,
        fontWeight: "700",

    },
    wrapFlat: {
        height: Pixel170,
        width: '90%',
        marginHorizontal: MARGIN,
        marginVertical: MARGIN,
        backgroundColor: Colors.white,
        paddingHorizontal: MARGIN,
        borderRadius: MARGIN,
    },
    viewPie: {
        width: '90%',
        height: Pixel170 * 1.4,
        flex: 1,
        marginHorizontal: MARGIN,
        marginVertical: MARGIN,
        backgroundColor: Colors.white,
        paddingHorizontal: MARGIN,
        borderRadius: MARGIN,
    },
    wrapper2: {
        flex: 1,
        flexDirection: 'row',
    },
    // countView: {
    //     flex: 1,
    //     alignItems: 'center',
    //     width: widtd,
    //     position: 'absolute',
    //     margin: MARGIN2
    // },
    top: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        height: Pixel30,
        backgroundColor: 'rgb(0, 0, 0.1)',
        opacity: 0.12,
        borderRadius: MARGIN2,
        marginHorizontal: MARGIN2 * 1,
        marginTop: '13.6%'
    },
    viewTop: {
        flex: 1,
        flexDirection: 'row',
        marginTop: MARGIN,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: MARGIN2 * 2
    },
    textTop: {
        position: 'relative',
        fontSize: fontSize.extraSmall,
        fontWeight: '500',
        color: Colors.white,
        // opacity: 0.86,
    },
    controldefault: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: MARGIN,
        marginHorizontal: MARGIN2,
        marginVertical: MARGIN * 0.5,
        // justifyContent: 'center'
    },
    controldefault2: {
        // flex: 1,
        flexDirection: 'row',
        marginHorizontal: MARGIN2,
        marginVertical: MARGIN * 0.5,
        // justifyContent: 'center'
    },
    earlylate: {
        flex: 1,
        borderRadius: Pixel16,
        paddingVertical: MARGIN,
        marginHorizontal: MARGIN2,
        height: Pixel100,
    },
    viewearly: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: MARGIN
    },
    indexofemployees: {
        flex: 1,
        marginHorizontal: MARGIN2 * 0.9,
        marginBottom: MARGIN2
    },
    textTime: {
        marginHorizontal: MARGIN2
    }
});

export default styles;
