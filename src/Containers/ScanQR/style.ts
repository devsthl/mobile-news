import { StyleSheet } from 'react-native';
import { Pixel30 } from '../../Utils/Transform';


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
    },

    wrapQrCode: {
        flex: 1,
        paddingVertical: Pixel30,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
    },

})
