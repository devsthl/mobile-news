import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { ActivityIndicator } from 'react-native'
const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#00000070' />
        </View>
    )
}

export default LoadingScreen