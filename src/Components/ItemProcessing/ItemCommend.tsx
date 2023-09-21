import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

interface PropsCommend {
    COM1?: string,
    COM2?: string,
}

export default function ItemCommend(data: PropsCommend) {
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
            <ItemInfo label={'Khen thưởng 1'} value={data.COM1} link={Images.iconFaceID} />
            <ItemInfo label={'Khen thưởng 2'} value={data.COM2} />
        </View>
    )
}

export type { PropsCommend }