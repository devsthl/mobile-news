import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';

interface PropsWorkingProcess {
    DECISION_NO?: string,
    TYPE_NAME?: string,
    SALARY_TYPE?: string,
    SAL_BASIC?: string,
    SAL_TOTAL?: string,
    SAL_PERCENT?: string,
    SIGN_DATE?: string,
    EFFECT_DATE?: string,
    SIGNER_NAME?: string,
    SIGNER_POSITION?: string,
    STATUS_NAME?: string,
    NOTE?: string,
}

export default function ItemWorkingProcess(data: PropsWorkingProcess) {
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
        }}>         <ItemInfo label={'Quyết định số'} value={data.DECISION_NO} link={Images.iconFaceID} />
            <ItemInfo label={'Tên quyết định'} value={data.TYPE_NAME} />
            <ItemInfo label={'Loại lương'} value={data.SALARY_TYPE} />
            <ItemInfo label={'Lương cơ bản'} value={data.SAL_BASIC} />
            <ItemInfo label={'Lương tổng'} value={data.SAL_TOTAL} />
            <ItemInfo label={'Phần trăm lương'} value={data.SAL_PERCENT} />
            <ItemInfo label={'Ngày kí'} value={data.SIGN_DATE} link={Images.iconFaceID} />
            <ItemInfo label={'Ngày áp dụng'} value={data.EFFECT_DATE} link={Images.iconFaceID} />
            <ItemInfo label={'Người kí'} value={data.SIGNER_NAME} link={Images.iconFaceID} />
            <ItemInfo label={'Chức vị người kí'} value={data.SIGNER_POSITION} link={Images.iconFaceID} />
            <ItemInfo label={'Trạng thái'} value={data.STATUS_NAME} link={Images.iconFaceID} />
            <ItemInfo label={'Ghi chú'} value={data.NOTE} link={Images.iconFaceID} />
        </View>
    )
}

export type { PropsWorkingProcess }