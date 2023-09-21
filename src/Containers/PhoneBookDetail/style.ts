import { StyleSheet, Dimensions } from 'react-native';
import { Pixel100, Pixel20, Pixel30, Pixel70 } from '../../Utils/Transform';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
        paddingBottom: Pixel20,
    },

    feature: {
    },

    icon32: {
        width: Pixel100,
        height: Pixel100,
    },
    lowerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: Pixel70,
    },
});

export default styles;
