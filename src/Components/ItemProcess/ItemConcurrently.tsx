import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'

interface PropsConcurrently {
    DON_VI: string,
    DVCAP3: string,
    PHONG_BAN: string,
    VI_TRI: string,
    LOAI_HOP_DONG: string,
    SO_HOP_DONG: string,
    START_DATE: string,
    END_DATE: string,
    SO_QUYET_DINH: string,
    GHI_CHU: string,
}

export default function ItemConcurrently(data: PropsConcurrently) {
    return (
        <View style={{ padding: 10 }}>
            <ItemInfo label={'Đơn vị'} value={data.DON_VI} />
            <ItemInfo label={'Đơn vị cấp 3'} value={data.DVCAP3} />
            <ItemInfo label={'Phòng ban'} value={data.PHONG_BAN} />
            <ItemInfo label={'Vị trí công việc'} value={data.VI_TRI} />
            <ItemInfo label={'Loại hợp đồng'} value={data.LOAI_HOP_DONG} />
            <ItemInfo label={'Số hợp đồng'} value={data.SO_HOP_DONG} />
            <ItemInfo label={'Ngày bắt đầu'} value={data.START_DATE} />
            <ItemInfo label={'Ngày kết thúc'} value={data.END_DATE} />
            <ItemInfo label={'Số quyết định'} value={data.SO_QUYET_DINH} />
            <ItemInfo label={'Ghi chú'} value={data.GHI_CHU} />
        </View>
    )
}

export type { PropsConcurrently }