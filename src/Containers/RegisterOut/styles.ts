import { StyleSheet } from 'react-native';
import { fontSize } from '../../Themes';
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        fontWeight: 'bold',
    },
    appText: {
        marginTop: 5,
    },
    textItalic: {
        fontWeight: '300',
        fontStyle: 'italic',
        fontSize: fontSize.extraSmall,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: fontSize.extraSmall,
    }
})

export default styles;