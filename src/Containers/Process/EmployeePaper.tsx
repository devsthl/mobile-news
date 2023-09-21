import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import ItemEmployeePaper from '../../Components/ItemProcessing/ItemEmployeePaper';

export default function EmployeePaper() {
    const { data } = useFetchData(api, 'getListemployeePaper', () => {
        return {}
    })
    console.log(data)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {data.map((item: any, index: number) => {
                    return (
                        <ItemEmployeePaper key={index}
                            PAGE_NAME = {item.pageName||'-'}
                            DATE_INPUT = {item.dateInput||'-'}
                            URL = {item.url||'-'}
                            NOTE = {item.note||'-'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}