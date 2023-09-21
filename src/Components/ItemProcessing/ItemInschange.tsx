import { View, } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';

interface PropsInschange {
    TYPE_NAME?: string,
    MONTH?: string,
    SALARY_OLD?: string,
    SALARY_NEW?: string,
}

export default function ItemInschange(data: PropsInschange) {
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
            <ItemInfo label={'Tên biến động'} value={data.TYPE_NAME} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày thay đổi'} value={data.MONTH} />
            <ItemInfo label={'Mức lương cũ'} value={data.SALARY_OLD} link={Images.iconFaceID} />
            <ItemInfo label={'Mức lương mới'} value={data.SALARY_NEW} link={Images.iconFaceID} />
        </View>
    )
}

export type { PropsInschange }