import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import ItemCommend, { PropsCommend } from '../../Components/ItemProcessing/ItemCommend';

export default function CommendProcess() {
    const { data } = useFetchData(api, 'getCommendInfo', () => {
        return {}
    })
    const ListCommend: PropsCommend[] = [
        {
            COM1: 'Khen thưởng 1',
            COM2: 'Khen thưởng 2',
        },
        {
            COM1: 'Khen thưởng 3',
            COM2: 'Khen thưởng 4',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListCommend.map((item: any, index: number) => {
                    return (
                        <ItemCommend key={index}
                            COM1={item.COM1||'-'}
                            COM2={item.COM2||'-'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}