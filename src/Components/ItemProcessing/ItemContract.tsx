import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';

interface PropsContract {
    CONTRACT_NO?: string,
    CONTRACT_NAME?: string,
    ORG_NAME?: string,
    START_DATE?: string,
    EXPIRE_DATE?: string,
    STATUS?: string,
    SIGNER_NAME?: string,
    SIGNER_POSITION?: string,
    SIGN_DATE?: string,
}

export default function ItemContract(data: PropsContract) {
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
            <ItemInfo label={'Số hợp đồng'} value={data.CONTRACT_NO} link={Images.iconFaceID} />
            <ItemInfo label={'Loại hợp đồng'} value={data.CONTRACT_NAME} />
            <ItemInfo label={'Phòng làm việc'} value={data.ORG_NAME} />
            <ItemInfo label={'Ngày bắt đầu'} value={data.START_DATE} />
            <ItemInfo label={'Ngày hết hạn'} value={data.EXPIRE_DATE} />
            <ItemInfo label={'Trạng thái'} value={data.STATUS} />
            <ItemInfo label={'Người ký'} value={data.SIGNER_NAME} />
            <ItemInfo label={'Vị trí người ký'} value={data.SIGNER_POSITION} />
            <ItemInfo label={'Ngày ký'} value={data.SIGN_DATE} />
        </View>
    )
}

export type { PropsContract }