import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

interface PropsConcurrently {
    KN1: string,
    KN2: string,
}

export default function ItemConcurrently(data: PropsConcurrently) {
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={{
            padding: Pixel10,
            borderWidth: 1,
            marginVertical: Pixel4,
            marginHorizontal: Pixel10,
            backgroundColor: NewColor[themes].background.primary,
            borderColor: NewColor[themes].border,
            borderRadius: Pixel10
        }}>
            <ItemInfo label={'Kiêm nhiệm 1'} value={data.KN1} link={Images.iconFaceID} />
            <ItemInfo label={'Kiêm nhiệm 2'} value={data.KN2} />
        </View>
    )
}

export type { PropsConcurrently }