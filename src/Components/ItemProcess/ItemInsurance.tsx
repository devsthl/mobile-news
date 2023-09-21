import { View, Text } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo'

interface Props {

}

export default function ItemInsurance(data: Props) {
    return (
        <View style={{ padding: 10 }}>
            <ItemInfo label={''} value={''} />

        </View>
    )
}