import { View, Text, TouchableOpacity, ViewStyle, } from 'react-native'
import React from 'react'
import styles from './style'
import AppText from '../AppText'
interface Props {
    title: String,
    time: number,
    onPress?: () => void,
    icon?: JSX.Element,
    style: ViewStyle | ViewStyle[],
}
const ItemEarlyLater = (props: Props) => {
    const { title, time, onPress, icon, style } = props
    return (
        <View style={[styles.container, { ...style }]}>
            <View style={styles.left}>
                <View style={styles.leftIcon}>
                    <View style={{ width: 27, height: 27 }}>{icon}</View>
                </View>
            </View>
            <View style={styles.right}>
                <AppText style={styles.textTop}>{title}</AppText>
                <AppText style={styles.textBottom}>{time} phút</AppText>
            </View>
        </View>
    )
}

export default ItemEarlyLater