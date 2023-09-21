import { StyleSheet } from 'react-native'
import { fontSize } from '../../Themes'
import {
    Pixel,
    Pixel10,
    Pixel150,
    Pixel20,
    Pixel26,
    Pixel28,
    Pixel30,
    Pixel330,
    Pixel4,
    Pixel400,
    Pixel450,
    Pixel50,
    Pixel8,
    Pixel185,
} from '../../Utils/Transform'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        flex: 1,
        position: 'absolute',
        height: Pixel450,
        width: '200%',
        borderBottomRightRadius: Pixel400,
        borderBottomLeftRadius: Pixel400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBg: {
        flex: 1,
        resizeMode: 'cover',
        height: Pixel330,
        position: 'absolute',
        top: 0,
        width: '50%',
    },
    all: {
        flex: 1,
        paddingTop: Pixel185,
        width: '88%',
    },
    viewForm: {
        flex: 1,
    },
    viewTop: {
        width: '100%',
        height: Pixel330,
        borderWidth: Pixel,
        borderRadius: Pixel20,
    },
    title: {
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: Pixel20,
        marginTop: Pixel10,
        marginLeft: Pixel10,
    },
    titleText: {
        marginTop: 5,
    },
    input: {
        margin: Pixel10,
        marginHorizontal: Pixel20,
        fontSize: fontSize.extraSmall,
        paddingRight: Pixel4,
    },
    iconPass: {
        height: Pixel26,
        width: Pixel26,
        marginRight: Pixel4,
    },
    iconEye: {
        height: Pixel28,
        width: Pixel28,
        marginRight: Pixel4,
    },
    text: {
        fontSize: fontSize.XS,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Pixel30,
        height: Pixel50,
        marginHorizontal: Pixel20,
    },
    loginButton: {
        width: '82.2%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: Pixel8,
        borderBottomLeftRadius: Pixel8,
    },
    textButton: {
        fontSize: fontSize.medium,
        fontWeight: 'bold',
    },
    faceIDButton: {
        width: '17%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '0.8%',
        borderTopRightRadius: Pixel8,
        borderBottomRightRadius: Pixel8,
    },
    faceIDIcon: {
        height: Pixel28,
        width: Pixel28,
    },
    viewFooter: {
        marginTop: Pixel150,
        width: '85%',
        alignItems: 'center',
        alignSelf: 'center',
    },
})

export default styles
