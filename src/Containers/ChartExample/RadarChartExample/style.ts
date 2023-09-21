import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
import { Pixel30 } from '../../../Utils/Transform';


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    scrollView: {
        flex: 1,
        borderTopLeftRadius: Pixel30,
        borderTopRightRadius: Pixel30,
        alignContent: 'center',
    },
});
