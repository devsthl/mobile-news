import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';

interface PropsFamilyProcess {
    HO_TEN?: string,
    RELATIONSHIP?: string,
    BIRTH?: string,
    ADDRESS?: string,
    MST?: string,
    DAYSTART?: string,
    DAYEND?: string,
}

export default function ItemFamilyProcess(data: PropsFamilyProcess) {
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
            <ItemInfo label={'Họ và tên'} value={data.HO_TEN} link={Images.iconFaceID} />
            <ItemInfo label={'Mối quan hệ'} value={data.RELATIONSHIP} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày sinh'} value={data.BIRTH} link={Images.iconFaceID} />
            <ItemInfo label={'Địa chỉ'} value={data.ADDRESS} link={Images.iconFaceID} />
            <ItemInfo label={'Mã số thuế'} value={data.MST} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày bắt đầu'} value={data.DAYSTART} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày kết thúc'} value={data.DAYEND} />
        </View>
    )
}

export type { PropsFamilyProcess }