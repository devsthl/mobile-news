import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import useFetchData from '../../Hooks/useFetchData'
import api from '../../Utils/generateAPI'

export default function Reward() {

    const { data } = useFetchData(api, 'getListCommend', () => {
        return {}
    })

    console.log('dataReward...', data)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Text>2</Text>

            </ScrollView>
        </View>
    )
}