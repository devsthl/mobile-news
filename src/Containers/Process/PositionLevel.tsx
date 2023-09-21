import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemPositionLevel, { PropsPositionLevel } from '../../Components/ItemProcessing/ItemPositionLevel'

export default function PositionLevel() {
    const ListPositionLevel: PropsPositionLevel[] = [
        {
            BDV1: 'Bậc định vị 1',
            BDV2: 'Bậc định vị 2',
        },
        {
            BDV1: 'Bậc định vị 3',
            BDV2: 'Bậc định vị 4',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListPositionLevel.map((item: any, index: number) => {
                    return (
                        <ItemPositionLevel key={index}
                            BDV1={item.BDV1}
                            BDV2={item.BDV2}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}