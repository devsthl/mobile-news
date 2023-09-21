import { Pixel20 } from './../../Utils/Transform';
import { StyleSheet } from "react-native";
import Styles from "../../Components/Styles/Styles";
import color from "../../Themes/color";
import { Pixel10, Pixel30, Pixel80 } from "../../Utils/Transform";
export default StyleSheet.create({
    container: Styles.container,
    bodyContainer: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
        paddingHorizontal: Pixel20,
    },
    styleItem: {
        minHeight: Pixel80,
        marginTop: Pixel10,
        alignItems: 'center',
        flexDirection: 'row',
        padding: Pixel20,
        borderRadius: Pixel10,
        borderWidth: 1,
    }
})