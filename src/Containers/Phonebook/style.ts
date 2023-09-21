import { Pixel10, Pixel16, Pixel4, Pixel40, Pixel6, Pixel60, Pixel8 } from './../../Utils/Transform';
import color from "../../Themes/color";
import { fontSize } from "../../Themes";
import { StyleSheet, Dimensions } from "react-native";
import { Pixel30 } from "../../Utils/Transform";
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30
    },
    containerInput: {
        height: Pixel40,
        flexDirection: 'row',
        alignItems: 'center',
        width: width - Pixel30,
        marginHorizontal: Pixel16,
        borderRadius: Pixel8,
        justifyContent: 'space-between',
        paddingLeft: Pixel10,
        marginTop: Pixel16,
        paddingRight: Pixel4,
        marginBottom: Pixel6
    },
    groupInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        fontSize: fontSize.small,
        paddingRight: Pixel30,
        paddingLeft: Pixel8,
        width: '100%',
    },
    sizeAvatar: {
        height: Pixel60,
        width: Pixel60,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: Pixel30
    },
    text: {
        fontSize: fontSize.large,
        fontWeight: '500'
    },
    nameContact: {
        fontWeight: '500',
        fontSize: fontSize.medium
    },
    infoContact: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginLeft: Pixel16,
    },
})