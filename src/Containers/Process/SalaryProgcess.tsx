import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemSalary, { PropsSalary } from '../../Components/ItemProcessing/ItemSalary'

export default function SalaryProcess() {
    const ListSalary: PropsSalary[] = [
        {
            SALARY1: 'Lương 1',
            SALARY2: 'Lương 2',
        },
        {
            SALARY1: 'Lương 3',
            SALARY2: 'Lương 4',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {ListSalary.map((item: any, index: number) => {
                    return (
                        <ItemSalary key={index}
                            SALARY1={item.SALARY1}
                            SALARY2={item.SALARY2}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}