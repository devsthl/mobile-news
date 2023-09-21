import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors } from '../../Themes'
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

interface PropsFamilyProcess {
    HO_TEN?: string,
    RELATIONSHIP?: string,
    BIRTH?: string,
}

export default function ItemFamilyProcess(data: PropsFamilyProcess) {
    const themes = useThemeColors().themes || 'default';
    return (
        <View style={{ padding: 10, borderWidth: 1, marginVertical: 4, marginHorizontal: 10, backgroundColor: NewColor[themes].background.primary, borderColor: NewColor[themes].border, borderRadius: 10 }}>
            <ItemInfo label={'Họ và tên'} value={data.HO_TEN || '-'} />
            <ItemInfo label={'Mối quan hệ'} value={data.RELATIONSHIP || '-'} />
            <ItemInfo label={'Ngày sinh'} value={data.BIRTH || '-'} />
        </View>
    )
}

export type { PropsFamilyProcess }