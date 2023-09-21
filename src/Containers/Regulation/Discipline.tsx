import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import useFetchData from '../../Hooks/useFetchData'
import api from '../../Utils/generateAPI'

export default function Discipline() {
    const { data } = useFetchData(api, 'getListDiscipline', () => {
        return {}
    })

    console.log('datadiscipline...', data)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Text>2</Text>

            </ScrollView>
        </View>
    )
}