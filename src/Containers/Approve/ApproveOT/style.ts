import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../Themes/color';
const { width, height } = Dimensions.get("window");
const HeightPercent = height / 100;
import fontsize from '../../../Themes/fontSize';
import { Pixel10, Pixel16, Pixel18, Pixel20, Pixel30, Pixel40, Pixel6 } from '../../../Utils/Transform';


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    scrollView: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
    },

    TextNote: {
        fontSize: fontsize.small,
        fontWeight: '400',
    },

    textAreaContainer: {
        paddingHorizontal: Pixel16,
        paddingVertical: Pixel6,
        width: '92%',
        marginLeft: '4%',
        //elevation: 5,
        borderRadius: Pixel10,
        height: HeightPercent * 14,
        borderWidth: 1,
    },

    textArea: {
        padding: 0,
        textAlignVertical: 'top',
        fontSize: fontsize.small
    },

    body: {
        width: '92%',
        marginHorizontal: '4%',
        alignItems: 'center',
        paddingVertical: Pixel10,
        paddingHorizontal: Pixel20,
        marginTop: Pixel40,
        borderRadius: Pixel18,
        borderWidth: 1,
    },

    viewInputContainer: {
        width: '100%',
        alignContent: 'center',
        paddingBottom: Pixel10
    },

    viewTitleInput: {
        width: '100%',
        paddingHorizontal: Pixel20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ViewFooter: {
        width,
        flexDirection: 'row',
        paddingHorizontal: Pixel20,
        justifyContent: 'space-between',
    },

});
