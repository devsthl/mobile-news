import { StyleSheet, Dimensions } from 'react-native';
import fontsize from '../../../Themes/fontSize';
import { Pixel10, Pixel100, Pixel20 } from '../../../Utils/Transform';

export default StyleSheet.create({
    container: {
        height: Pixel100,
        width: '100%',
        paddingHorizontal: Pixel20,
    },
    textDate: {
        fontSize: fontsize.large,
        fontWeight: 'bold',
    },
    textWifi: {
        marginTop: Pixel10,
        fontSize: fontsize.medium,
        fontWeight: '400',
    }
})
