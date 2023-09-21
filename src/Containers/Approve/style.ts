import { StyleSheet, Dimensions, } from 'react-native';
import { Pixel10, Pixel30 } from '../../Utils/Transform';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    bodyContainer: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
        paddingTop: Pixel10
    },
})
