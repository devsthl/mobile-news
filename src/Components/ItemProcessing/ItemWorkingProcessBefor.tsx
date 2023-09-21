import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import { Colors, fontSize, Images } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';
import NewColor from '../../Themes/NewColor';

interface PropsWorkingProcessBefor {
    DON_VI?: string,
    PHONG_BAN?: string,
    SDT?: string,
    DIA_CHI?: string,
    TU_NGAY?: string,
    DEN_NGAY?: string,
    MUC_LUONG?: string,
    CHUC_DANH?: string,
    LI_DO_NGHI_VIEC?: string,
    MO_TA_CONG_VIEC?: string,
    THAM_NIEN?: string,
}

export default function ItemWorkingProcessBefor(data: PropsWorkingProcessBefor) {
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
            <ItemInfo label={'Đơn vị'} value={data.DON_VI || '-'} link={Images.iconFaceID} />
            <ItemInfo label={'Phòng ban'} value={data.PHONG_BAN || '-'} />
            <ItemInfo label={'Số điện thoại'} value={data.SDT || '-'} />
            <ItemInfo label={'Địa chỉ công ty'} value={data.DIA_CHI || '-'} />
            <ItemInfo label={'Từ ngày'} value={data.TU_NGAY || '-'} />
            <ItemInfo label={'Đến ngày'} value={data.DEN_NGAY || '-'} />
            <ItemInfo label={'Mức lương'} value={data.MUC_LUONG || '-'} />
            <ItemInfo label={'Chức danh công việc'} value={data.CHUC_DANH || '-'} />
            <ItemInfo label={'Lí do nghỉ việc'} value={data.LI_DO_NGHI_VIEC || '-'} />
            <ItemInfo label={'Mô tả công việc'} value={data.MO_TA_CONG_VIEC || '-'} />
            <ItemInfo label={'Thâm niên'} value={data.THAM_NIEN || '-'} />

        </View>
    )
}

export type { PropsWorkingProcessBefor }