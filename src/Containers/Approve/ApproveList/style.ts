import { StyleSheet } from 'react-native';
import { Pixel30 } from '../../../Utils/Transform';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    bodyContainer: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
    },

    iconFlat2: {
        width: Pixel30,
        height: Pixel30,
    },

});

