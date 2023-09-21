import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemZoning, { PropsZoning } from '../../Components/ItemProcessing/ItemZoning'

export default function Zoning() {
    const ListZoning: PropsZoning[] = [
        {
            QH1: 'Quy hoạch 1',
            QH2: 'Quy hoạch 2',
        },
        {
            QH1: 'Quy hoạch 3',
            QH2: 'Quy hoạch 4',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListZoning.map((item: any, index: number) => {
                    return (
                        <ItemZoning key={index}
                            QH1={item.QH1}
                            QH2={item.QH2}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}