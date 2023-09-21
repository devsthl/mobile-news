import { StyleSheet } from "react-native";
import Styles from "../../Components/Styles/Styles";
import color from "../../Themes/color";
import { Pixel10, Pixel20, Pixel30 } from "../../Utils/Transform";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    ViewBody: {
        flex: 1,
        paddingHorizontal: Pixel20,
        paddingTop: Pixel20,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30
    },
    WrapCamera: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: Pixel10,
    },
    ButtonSnap: {
        paddingVertical: Pixel20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ImageSnap: {
        width: Styles.constants.heightPercent * 9,
        height: Styles.constants.heightPercent * 9,
        borderRadius: Styles.constants.heightPercent * 5,
    }
})
