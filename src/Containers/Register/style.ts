import { StyleSheet } from "react-native";
import Styles from "../../Components/Styles/Styles";
import { Pixel12, Pixel16, Pixel30, Pixel90, Pixel20, Pixel10 } from "../../Utils/Transform";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapFlat: {
        marginHorizontal: Styles.constants.widthScreen * 0.05,
        height: Pixel90,
        borderRadius: Pixel16,
        marginBottom: Pixel12,
        borderWidth: 1,
    },
    wrapViewFlat: {
        width: Styles.constants.widthScreen,
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
        paddingTop: Pixel20,
    },
    wrapTextFlat: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    wrapViewName: {
        flexDirection: 'row',
        width: '80%',
        height: '100%',
        alignItems: 'center'
    },
    wrapTextMane: {
        marginLeft: Pixel10,
    },
    warpButtonNext: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    apptext: {
        fontWeight: 'bold',
    }
})