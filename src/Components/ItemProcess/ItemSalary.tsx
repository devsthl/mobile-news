import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'

interface PropsSalary {

}

export default function ItemSalary(data: PropsSalary) {
    return (
        <View style={{ padding: 10 }}>
            <ItemInfo label={''} value={''} />

        </View>
    )
}

export type { PropsSalary }