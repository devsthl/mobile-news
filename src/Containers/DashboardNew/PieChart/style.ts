import { StyleSheet } from "react-native";
import color from "../../../Themes/color";
import { MARGIN, MARGIN2, Pixel170 } from "../../../Utils/Transform";

export default StyleSheet.create({
    viewPie: {
        width: '90%',
        height: Pixel170 * 1.5,
        flex: 1,
        marginHorizontal: MARGIN,
        marginVertical: MARGIN,
        backgroundColor: color.white,
        paddingHorizontal: MARGIN,
        borderRadius: MARGIN2,
    }
})