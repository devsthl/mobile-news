import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';

interface PropsWorkAbroad {
    CTNN1: string,
    CTNN2: string,
}

export default function ItemWorkAbroad(data: PropsWorkAbroad) {
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
            <ItemInfo label={'Công tác nước ngoài 1'} value={data.CTNN1} link={Images.iconFaceID} />
            <ItemInfo label={'Công tác nước ngoài 2'} value={data.CTNN2} />
        </View>
    )
}

export type { PropsWorkAbroad }