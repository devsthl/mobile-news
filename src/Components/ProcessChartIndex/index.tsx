import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'
import styles from './styles'
import AppText from '../AppText'
interface Props {
    percent: number,
    style?: TextStyle
}
const ProcessChartIndex = (props: Props) => {
    const { percent, style } = props
    return (
        <View style={[styles.container, { ...style }]}>
            <View style={styles.top}>
                <AppText style={styles.textTop}>Chỉ số hài lòng</AppText>
                <AppText style={styles.textTopBottom}>của nhân viên</AppText>
            </View>
            <View style={styles.bottom}>
                <ProgressCircle
                    percent={percent}
                    radius={50}
                    borderWidth={8}
                    color="#FFD952"
                    shadowColor="#E6E6E9"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>{percent}%</Text>
                </ProgressCircle>
            </View>
        </View>
    )
}

export default ProcessChartIndex