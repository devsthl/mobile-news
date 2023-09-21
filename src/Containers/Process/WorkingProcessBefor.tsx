import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemWorkingProcessBefor, { PropsWorkingProcessBefor } from '../../Components/ItemProcessing/ItemWorkingProcessBefor'

export default function WorkingProcessBefor() {
    const ListWorkingProcess: PropsWorkingProcessBefor[] = [
        {
            DON_VI: 'Đơn vị 1',
            PHONG_BAN: 'Phòng ban 1',
            SDT: '0123456789',
            DIA_CHI: '13 Phố Văn quán',
            TU_NGAY: '10/10/2018',
            DEN_NGAY: '10/09/2019',
            MUC_LUONG: '45.000.000',
            CHUC_DANH: 'Chức danh 1',
            LI_DO_NGHI_VIEC: 'Lí do 1',
            MO_TA_CONG_VIEC: 'D',
            THAM_NIEN: '11 tháng',
        },
        {
            DON_VI: 'Đơn vị 2',
            PHONG_BAN: 'Phòng ban 2',
            SDT: '0987656565',
            DIA_CHI: '123 Tây Sơn',
            TU_NGAY: '25/09/2015',
            DEN_NGAY: '20/09/20218',
            MUC_LUONG: '35.000.000',
            CHUC_DANH: 'Chức danh 2',
            LI_DO_NGHI_VIEC: 'Lí do 2',
            MO_TA_CONG_VIEC: 'A',
            THAM_NIEN: '3 năm',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListWorkingProcess.map((item: any, index: number) => {
                    return (
                        <ItemWorkingProcessBefor key={index}
                            DON_VI={item.DON_VI}
                            PHONG_BAN={item.PHONG_BAN}
                            CHUC_DANH={item.CHUC_DANH}
                            SDT={item.SDT}
                            DIA_CHI={item.DIA_CHI}
                            TU_NGAY={item.TU_NGAY}
                            DEN_NGAY={item.DEN_NGAY}
                            MUC_LUONG={item.MUC_LUONG}
                            LI_DO_NGHI_VIEC={item.LI_DO_NGHI_VIEC}
                            MO_TA_CONG_VIEC={item.MO_TA_CONG_VIEC}
                            THAM_NIEN={item.THAM_NIEN}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}