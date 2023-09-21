import { StyleSheet } from "react-native";
import Styles from "../Styles/Styles";
import color from "../../Themes/color";
import { fontSize } from "../../Themes";
export default StyleSheet.create({
    container: {
        flex: 1,
        width: Styles.Pixel.Pixel66 * 2.1,
        height: Styles.Pixel.Pixel66,
        backgroundColor: color.white,
        borderRadius: 15,
        flexDirection: 'row'
    },
    left: {
        flex: 0.35,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        // borderWidth: 1,
        // borderColor: color.whitesecondary,
    },
    right: {
        flex: 0.65,
        justifyContent: 'center'
    },
    leftIcon: {
        felx: 1,
        // backgroundColor: color.whitesecondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 47,
        height: 47,
        borderRadius: 40,
        // borderWidth: 1,
        // borderColor: color.whitesecondary
    },
    textTop: {
        fontSize: fontSize.small * 0.7,
        color: color.black,
        fontWeight: '400'
    },
    textBottom: {
        fontSize: fontSize.small,
        color: color.black,
        fontWeight: '700'

    }
})