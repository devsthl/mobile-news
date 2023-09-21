import { View } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';
import { Pixel10, Pixel4 } from '../../Utils/Transform';

interface PropsEmployeePaper {
    PAGE_NAME?: string,
    DATE_INPUT?: string,
    URL?: string,
    NOTE?: string,
}

export default function ItemEmployeePaper(data: PropsEmployeePaper) {
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
            <ItemInfo label={'Tên giấy tờ'} value={data.PAGE_NAME} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày nhập'} value={data.DATE_INPUT} link={Images.iconFaceID} />
            <ItemInfo label={'Địa chỉ đường dấn'} value={data.URL} link={Images.iconFaceID} />
            <ItemInfo label={'Ghi chú'} value={data.NOTE} />
        </View>
    )
}

export type { PropsEmployeePaper }