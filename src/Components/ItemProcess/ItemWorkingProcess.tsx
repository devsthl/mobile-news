import { View, } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'
import NewColor from '../../Themes/NewColor';
import useThemeColors from '../../Hooks/useThemeColors';
import { Pixel10, Pixel4 } from '../../Utils/Transform';

interface PropsWorkingProcess {
    DON_VI?: string,
    DON_VI_CAP3?: string,
    PHONG_BAN?: string,
    CHUC_DANH?: string,
    LOAI_QUYET_DINH?: string,
    SO_QUYET_DINH?: string,
    NGAY_HIEU_LUC?: string,
    NGAY_HET_HIEU_LUC?: string,
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
        }}>
            <ItemInfo label={'Đơn vị'} value={data.DON_VI || '-'} />
            <ItemInfo label={'Đơn vị cấp 3'} value={data.DON_VI_CAP3 || '-'} />
            <ItemInfo label={'Phòng ban'} value={data.PHONG_BAN || '-'} />
            <ItemInfo label={'Chức danh'} value={data.CHUC_DANH || '-'} />
            <ItemInfo label={'Loại quyết định'} value={data.LOAI_QUYET_DINH || '-'} />
            <ItemInfo label={'Số quyết định'} value={data.SO_QUYET_DINH || '-'} />
            <ItemInfo label={'ngày hiệu lực'} value={data.NGAY_HIEU_LUC || '-'} />
            <ItemInfo label={'ngày hết hiệu lực'} value={data.NGAY_HET_HIEU_LUC || '-'} />

        </View>
    )
}

export type { PropsWorkingProcess }