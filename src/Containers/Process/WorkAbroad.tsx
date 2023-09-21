import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemWorkAbroad, { PropsWorkAbroad } from '../../Components/ItemProcessing/ItemWorkAbroad'

export default function WorkAbroad() {
    const ListWorkAbroad: PropsWorkAbroad[] = [
        {
            CTNN1: 'Công tác nước ngoài 1',
            CTNN2: 'Công tác nước ngoài 2',
        },
        {
            CTNN1: 'Công tác nước ngoài 3',
            CTNN2: 'Công tác nước ngoài 4',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListWorkAbroad.map((item: any, index: number) => {
                    return (
                        <ItemWorkAbroad key={index}
                            CTNN1={item.CTNN1}
                            CTNN2={item.CTNN2}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}