import {
    Pixel450,
    Pixel400,
    Pixel330,
    Pixel,
    Pixel20,
    Pixel10,
    Pixel34,
    Pixel4,
    Pixel26,
    Pixel30,
    Pixel8,
    Pixel14,
    Pixel60,
    Pixel50,
    Pixel28,
    Pixel185,
} from './../../Utils/Transform'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../Themes'

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
        height: Pixel450,
        borderWidth: Pixel,
        borderRadius: Pixel20,
    },
    logo: {
        alignSelf: 'center',
        marginBottom: Pixel20,
        marginTop: Pixel10,
        marginLeft: Pixel10,
    },
    input: {
        margin: Pixel10,
        marginHorizontal: Pixel20,
        fontSize: fontSize.extraSmall,
        paddingRight: Pixel4,
    },
    iconUser: {
        height: Pixel34,
        width: Pixel34,
        marginRight: Pixel4,
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
    under: {
        flexDirection: 'row',
        marginTop: Pixel8,
        alignItems: 'center',
    },
    rememberPass: {
        flexDirection: 'row',
        paddingLeft: Pixel14,
        alignItems: 'center',
    },
    forgetPass: {
        alignItems: 'center',
        marginLeft: Pixel60,
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
        marginTop: Pixel30,
        width: '85%',
        alignItems: 'center',
        alignSelf: 'center',
    },
})

export default styles
