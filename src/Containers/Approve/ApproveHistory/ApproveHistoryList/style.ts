import { StyleSheet } from 'react-native';
import { Pixel250, Pixel30, Pixel300 } from '../../../../Utils/Transform';

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

    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkboxContainer: {
        position: 'absolute',
        width: '90%',
        justifyContent: 'space-around',
        alignSelf: 'center',
        height: Pixel250,
        borderRadius: Pixel30,
        padding: Pixel30,
        marginTop: Pixel300,
    },

});
