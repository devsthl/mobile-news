import { Pixel20, Pixel50, Pixel10, Pixel60, Pixel24, Pixel6 } from './../../../Utils/Transform';
import { StyleSheet } from "react-native";
import Styles from "../../../Components/Styles/Styles";
import color from "../../../Themes/color";
import { fontSize } from "../../../Themes";
import { Pixel16 } from "../../../Utils/Transform";
const heightPercent = Styles.constants.heightScreen / 100
export default StyleSheet.create({
    bodyCalander: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: Pixel16,
    },
    bodyCalander2: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: Pixel20,
        paddingTop: Pixel16,
    },
    bodyButton: {
        width: '44%',
        height: Pixel50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Pixel16,
        paddingVertical: Pixel10,
        borderRadius: Pixel10,
        borderWidth: 1,
    },
    ViewDropDown: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Pixel60,
    },
    TextDayOff: {
        fontSize: fontSize.small,
        fontWeight: '400',
        lineHeight: Pixel24,
        flex: 1
    },
    ViewContentDropDown: {
        width: '100%',
        paddingBottom: Pixel10,
    },
    bodyMorning: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: Pixel20,
        paddingTop: Pixel10,
    },
    bodyButtonMorning: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Pixel6,
        paddingVertical: Pixel6,
        borderRadius: Pixel10,
    },
    TextReason: {
        fontSize: fontSize.small,
        fontWeight: '600',
        marginTop: Pixel10,
    },
    ViewStyleRegion: {
        width: '100%',
        borderRadius: Pixel16,
        alignContent: 'center',
        paddingHorizontal: Pixel20,
        marginTop: Pixel10
    },
    textAreaContainer: {
        padding: Pixel6,
        width: '100%',
        marginTop: Pixel16,
        justifyContent: 'center',
        borderRadius: Pixel10,
        borderWidth: 1,
    },
    textArea: {
        height: heightPercent * 12,
        textAlignVertical: 'top',
        fontWeight: '400',
        fontSize: fontSize.small,
        paddingHorizontal: Pixel10,
    },
    ViewFooter: {
        width: '100%',
        paddingHorizontal: Pixel20,
        justifyContent: 'space-between',
        paddingBottom: Pixel20,
        marginTop: Pixel20
    },
    ButtonLogin: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: heightPercent * 1.8,
        borderRadius: Pixel10,
        height: Pixel60
    },
    detailRested: {
        padding: Pixel20,
        paddingBottom: Pixel16,
    },
    txtHours: {
        fontSize: fontSize.small,
        fontWeight: '400',
        lineHeight: Pixel24,
        flex: 1,
        padding: 0
    }
})