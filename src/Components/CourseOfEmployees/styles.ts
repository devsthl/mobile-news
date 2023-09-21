import { StyleSheet } from "react-native";
import Styles from "../Styles/Styles";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: 139,
        height: 189,
        backgroundColor: '#FCF5E3',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        flex: 0.35,
        justifyContent: 'center',
    },
    bottom: {
        flex: 0.65
    },
    textTop: {
        color: '#464646',
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 18
    },
    textTopBottom: {
        color: '#464646',
        fontWeight: '400',
        fontSize: 10
    }
})