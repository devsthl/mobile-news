import { StyleSheet, Dimensions } from 'react-native';
import { fontSize } from '../../Themes';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ModalStyle: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    HeaderTitle: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        position: "absolute",
        top: 10,
        paddingHorizontal: width * 15 / 375,
    },
    IconStatus: {
        width: width * 25 / 375,
        height: width * 25 / 375,
    },
    ViewContent: {
        width: width - 80,
        height: width / 1.6,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: height / 2.5 - width / 4,
        left: 40,
        right: 40,
        borderRadius: 5,
        paddingTop: 20
    },
    OptionsTitle: {
        fontSize: fontSize.extraLarge,
        color: 'black',
        textDecorationLine: 'underline'
    },
    DatePickerLib: {
        backgroundColor: 'white'
    }
});
export default styles;
