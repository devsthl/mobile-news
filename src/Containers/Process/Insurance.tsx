import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemInsurance, { PropsInsurance } from '../../Components/ItemProcessing/ItemInsurance'

export default function Insurance() {
    const ListInsurance: PropsInsurance[] = [
        {
            BH1: 'Bảo hiểm 1',
            BH2: 'Bảo hiểm 2',
        },
        {
            BH1: 'Bảo hiểm 3',
            BH2: 'Bảo hiểm 4',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListInsurance.map((item: any, index: number) => {
                    return (
                        <ItemInsurance key={index}
                            BH1={item.BH1}
                            BH2={item.BH2}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}