import { StyleSheet } from "react-native";
import Styles from "../Styles/Styles";
import { fontSize } from "../../Themes";
import color from "../../Themes/color";


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    textLeft: {
        opacity: 0.9,
        fontSize: fontSize.small,
        fontWeight: '400',
        minWidth: '30%',
        maxWidth: '70%'
    },
    textRight: {
        fontSize: fontSize.small,
        fontWeight: '400',
        minWidth: '30%',
        maxWidth: '70%',
        textAlign: 'right'
    }
})