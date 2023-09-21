import { StyleSheet } from "react-native";
import Styles from "../Styles/Styles";

export default StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 9999999999,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        height: Styles.constants.heightScreen,
        justifyContent: "center",
        alignItems: "center"
    }
})