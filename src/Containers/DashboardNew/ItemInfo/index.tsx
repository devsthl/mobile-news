import { View, Text } from "react-native";
import React from "react";
import { Metrics, fontSize } from "../../../Themes";
import AppText from "../../../Components/AppText";
import color from "../../../Themes/color";

interface PropsItemInfo {
    textTop?: string,
    textCenter?: string,
    textBottom?: string,
    IconCenter: any,
}
const pixel = Metrics.ratioH
const VIEW_CONTAINER = 100 * pixel
const MARGIN = 10 * pixel

export default function ItemInfo(prpos: PropsItemInfo) {
    const { textTop, textCenter, textBottom, IconCenter } = prpos
    return (
        <View style={{
            width: VIEW_CONTAINER,
            height: VIEW_CONTAINER,
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: MARGIN,
            borderWidth: 1,
            borderColor: color.boder,
            marginLeft: MARGIN,
            backgroundColor: color.white
        }}>
            <AppText style={{ fontWeight: '500', marginBottom: 4, textAlign: 'center', justifyContent: 'center', fontSize: fontSize.XXXS }}>{textTop}</AppText>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {<IconCenter />}
            </View>
            <AppText style={{ fontWeight: '500', marginTop: 4, textAlign: 'center', fontSize: fontSize.extraSmall }}>{textCenter}</AppText>
            <AppText style={{ fontWeight: '500', marginTop: 4, textAlign: 'center', fontSize: fontSize.XXXS }}>{textBottom}</AppText>
        </View>
    );
}
