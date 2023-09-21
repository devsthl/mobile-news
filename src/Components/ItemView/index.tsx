import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import AppText from '../AppText'
interface Props {
    title?: String,
    des: String,
    icon?: JSX.Element
    onPress?: () => void
}

const ItemView = (props: Props) => {
    const { title, des, icon, onPress } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.left}>
                <View style={styles.leftIcon}>
                    <View style={{ width: 22, height: 22 }}>{icon}</View>
                </View>
            </View>
            <View style={styles.right}>
                <AppText style={styles.textTop}>{title}</AppText>
                <AppText style={styles.textBottom}>{des}</AppText>
            </View>
        </TouchableOpacity>
    )
}

export default ItemView