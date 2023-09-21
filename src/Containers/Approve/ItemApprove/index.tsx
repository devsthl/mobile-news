import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../../../Components/AppText";
import { Pixel, Pixel10, Pixel16, Pixel4, Pixel6, Pixel65 } from "../../../Utils/Transform";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import { SVGcontinue } from "../../../Assets/SVG";
import { fontSize } from "../../../Themes";
interface PropsItem {
    onPress?: () => void,
    iconLeft?: JSX.Element,
    iconRight?: JSX.Element,
    title?: string,
    badge?: number,
}

export default function ItemApprove(props: PropsItem) {
    const { onPress, iconLeft, iconRight, title, badge } = props
    const themes = useThemeColors().themes || 'default';

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: Pixel65,
                alignItems: 'center',
                backgroundColor: NewColor[themes].background.primary,
                marginHorizontal: Pixel10,
                paddingHorizontal: Pixel10,
                marginVertical: Pixel6,
                borderRadius: Pixel10,
                borderWidth: Pixel,
                borderColor: NewColor[themes].border
            }}
            onPress={onPress}
        >
            {iconLeft}
            <AppText style={{ flex: 1, paddingHorizontal: Pixel10, fontWeight: 'bold' }}>{title}</AppText>
            {badge && badge > 0 &&
                <View style={{ minWidth: Pixel16, height: Pixel16, backgroundColor: NewColor[themes].background.badge, justifyContent: 'center', alignItems: 'center', borderRadius: Pixel16 / 2, paddingHorizontal: Pixel4, marginRight: Pixel6 }}>
                    <AppText style={{ color: NewColor[themes].text.badge, fontSize: fontSize.XXS, fontWeight: '600' }}>{badge}</AppText>
                </View>
            }
            {iconRight || <SVGcontinue color={NewColor[themes].icon.normal} />}
        </TouchableOpacity>
    );
}
