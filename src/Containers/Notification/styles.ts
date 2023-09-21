import { StyleSheet } from "react-native";
import Styles from "../../Components/Styles/Styles";
import color from "../../Themes/color";
import { fontSize as fontsize } from "../../Themes";
import { Pixel10, Pixel30, Pixel40, Pixel65, Pixel90 } from "../../Utils/Transform";
const height = Styles.constants.heightScreen
export default StyleSheet.create({
    ViewBody: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30
    },
    styleItem: {
        flexDirection: 'row',
        height: Pixel90
    },
    styleImage: {
        height: Pixel90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewTextLeft: {
        flex: 1,
        marginLeft: Pixel10,
        // width: '100%',
        justifyContent: 'center',
    },
    styleBodyText: {
        // width: '70%',
        height: Pixel65,
        justifyContent: 'flex-start',
    },
    styleTitle: {
        width: '100%',
        justifyContent: 'center',
    },
    styleText: {
        fontSize: fontsize.extraSmall,
        color: "#002336",
        fontWeight: "400"
    },
    styleTextTime: {
        fontSize: fontsize.extraSmall,
        // marginHorizontal: width * 0.03,
    },
    iconNotification: {
        width: Pixel65,
        height: Pixel65,
        borderRadius: Pixel40,
    },
})