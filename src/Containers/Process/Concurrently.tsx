import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemConcurrently, { PropsConcurrently } from '../../Components/ItemProcessing/ItemConcurrently'

export default function Concurrently() {
    const ListConcurrently: PropsConcurrently[] = [
        {
            KN1: 'Kiêm nhiệm 1',
            KN2: 'Kiêm nhiệm 2',
        },
        {
            KN1: 'Kiêm nhiệm 3',
            KN2: 'Kiêm nhiệm 4',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListConcurrently.map((item: any, index: number) => {
                    return (
                        <ItemConcurrently key={index}
                            KN1={item.KN1}
                            KN2={item.KN2}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}