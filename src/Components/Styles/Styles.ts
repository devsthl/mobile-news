import { Dimensions } from "react-native"
import { Metrics } from "../../Themes";


const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const MARGIN = 10 * Metrics.ratioH
const MARGIN2 = 20 * Metrics.ratioH
const Pixel = Metrics.ratioH;
const Pixel24 = Pixel * 24;
const Pixel40 = Pixel * 40;
const Pixel66 = Pixel * 66;
const Pixel16 = Pixel * 16;
const Pixel22 = Pixel * 22;
const MARGIN_ICON = 8 * Metrics.ratioH


export default {
    margin: {
        MARGIN_ICON,
        MARGIN,
        MARGIN2,
    },
    Pixel: {
        Pixel24,
        Pixel40,
        Pixel66,
        Pixel16,
        Pixel22
    },
    constants: {
        widthScreen,
        heightScreen,
        widthPercent: widthScreen / 100,
        heightPercent: heightScreen / 100
    },
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: color.primary
    },
    wrapViewFlat: {
        width: '100%',
        heightScreen: '100%',
        // backgroundColor: color.whitesecondary,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
    },
}