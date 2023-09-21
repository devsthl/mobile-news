import { StyleSheet, Dimensions } from 'react-native';
import color from '../../../Themes/color';
const { width, height } = Dimensions.get("window");
const WidthPercent = width / 100;
const HeightPercent = height / 100;
import fontsize from '../../../Themes/fontSize';
import { MARGIN, Pixel30, Pixel50, Pixel6 } from '../../../Utils/Transform';


export default StyleSheet.create({
    ButtonLogin: {
        marginTop: MARGIN,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Pixel50,
        borderRadius: Pixel6,
        marginHorizontal: Pixel6,
    },

    textButton: {
        fontSize: fontsize.small,
        fontWeight: "700",
    },

});
