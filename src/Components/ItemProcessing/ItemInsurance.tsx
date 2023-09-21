import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';
import useThemeColors from '../../Hooks/useThemeColors';

interface PropsInsurance {
    BH1: string,
    BH2: string,
}

export default function ItemInsurance(data: PropsInsurance) {
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={{
            padding: Pixel10,
            borderWidth: 1,
            marginVertical: Pixel4,
            marginHorizontal: Pixel10,
            backgroundColor: NewColor[themes].background.primary,
            borderColor: NewColor[themes].border,
            borderRadius: Pixel10,
        }}>
            <ItemInfo label={'Bảo hiểm 1'} value={data.BH1} link={Images.iconFaceID} />
            <ItemInfo label={'Bảo hiểm 2'} value={data.BH2} />
        </View>
    )
}

export type { PropsInsurance }