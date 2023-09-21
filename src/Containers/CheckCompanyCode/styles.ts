/** @format */

import { StyleSheet } from 'react-native'
import { fontSize } from '../../Themes'
import {
    Pixel,
    Pixel10,
    Pixel150,
    Pixel185,
    Pixel20,
    Pixel30,
    Pixel330,
    Pixel4,
    Pixel400,
    Pixel450,
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
    logo: {
        alignSelf: 'center',
        marginBottom: Pixel20,
        marginTop: Pixel10,
        marginLeft: Pixel10,
    },
    input: {
        margin: Pixel20,
        marginBottom: Pixel30,
        fontSize: fontSize.extraSmall,
        paddingRight: Pixel4,
    },
    text: {
        fontSize: fontSize.XS,
    },
    viewFooter: {
        // marginTop: Pixel70,
        marginTop: Pixel150,
        width: '85%',
        alignItems: 'center',
        alignSelf: 'center',
    },
})

export default styles
