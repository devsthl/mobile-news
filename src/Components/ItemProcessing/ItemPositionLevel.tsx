import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';

interface PropsPositionLevel {
    BDV1: string,
    BDV2: string,
}

export default function ItemPositionLevel(data: PropsPositionLevel) {
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
        }}>         <ItemInfo label={'Bậc định vị 1'} value={data.BDV1} link={Images.iconFaceID} />
            <ItemInfo label={'Bậc định vị 2'} value={data.BDV2} />
        </View>
    )
}

export type { PropsPositionLevel }