import { View, Text } from 'react-native'
import React from 'react'
import AppText from '../AppText'

interface Props {
    label: string,
    value: string,
}
export default function ItemInfo({ label, value }: Props) {
    return (
        <View style={{ marginTop: 8, marginLeft: 5 }}>
            <AppText style={{ fontWeight: 'bold' }}>{label}</AppText>
            <AppText>{value.trim() == '' ? '-' : value}</AppText>
        </View>
    )
}