import { View } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Images } from '../../Themes';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

interface PropsDiscipline {
    OBJ_NAME?: string,
    REASON?: string,
    TYPE?: string,
    MONEY?: string,
    CREATE_DATE?: string,
    EFFECT_DATE?: string,
    STATUS?: string,
}

export default function ItemDiscipline(data: PropsDiscipline) {
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
            <ItemInfo label={'Tên kỷ luật'} value={data.OBJ_NAME} link={Images.iconFaceID} />
            <ItemInfo label={'Loại kỷ luật'} value={data.TYPE} />
            <ItemInfo label={'Lí do kỷ luật'} value={data.REASON} link={Images.iconFaceID} />
            <ItemInfo label={'Tiền phạt'} value={data.MONEY} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày tạo'} value={data.CREATE_DATE} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày áp dụng'} value={data.EFFECT_DATE} link={Images.iconFaceID} />
            <ItemInfo label={'Trạng thái'} value={data.STATUS} link={Images.iconFaceID} />
        </View>
    )
}

export type { PropsDiscipline }