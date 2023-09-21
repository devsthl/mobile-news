import { StyleSheet, Dimensions } from 'react-native';
import color from '../../Themes/color';
import fontsize from '../../Themes/fontSize';
import { Pixel10, Pixel100, Pixel12, Pixel150, Pixel16, Pixel18, Pixel2, Pixel20, Pixel24, Pixel30, Pixel4, Pixel40, Pixel6, Pixel70, Pixel8, Pixel80 } from '../../Utils/Transform';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
        paddingBottom: Pixel20
    },
    content: {
        flex: 1,
    },
    header: {
        fontSize: fontsize.small,
        paddingHorizontal: Pixel20,
        paddingVertical: Pixel6,
        marginTop: Pixel10,
        marginBottom: Pixel2,
    },
    avatar: {
        height: Pixel80,
        width: Pixel80,
        borderRadius: Pixel40,
        marginBottom: Pixel16,
    },
    placeholder: {
        marginTop: Pixel6,
        height: Pixel24,
    },
    contactGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: Pixel12,
        width: '80%',
    },
    centerIcons: {
        alignSelf: 'center',
    },
    empInfo: {
        alignItems: 'center',
        marginHorizontal: Pixel20,
        marginTop: Pixel20,
    },
    marginText: {
        marginBottom: Pixel4,
    },
    nameEmp: {
        fontSize: fontsize.large,
    },
    sizeAvatar: {
        height: Pixel150,
        width: Pixel150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textview: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: Pixel10,
    },
    text2: {
        fontSize: fontsize.small,
        fontWeight: '500'
    },
    text3: {
        fontSize: fontsize.small,
        fontWeight: '500'
    },

    headerAnimation: {
        height: Pixel30,
    },
    feature: {
    },
    feature2: {
        flexDirection: 'row',
    },
    featureIcon: {
        width: Pixel30,
        height: Pixel30,
        justifyContent: 'flex-start',
        top: Pixel20,
    },
    icon32: {
        width: Pixel100,
        height: Pixel100,
    },
    lowerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: Pixel70,
    },
    upperHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: Pixel80,
    },
    featureName: {
        fontWeight: 'bold',
        fontSize: fontsize.small,
        lineHeight: Pixel18,
        color: '#FFFFFF',
        marginTop: Pixel24,
        marginLeft: Pixel10
    }
});

export default styles;
