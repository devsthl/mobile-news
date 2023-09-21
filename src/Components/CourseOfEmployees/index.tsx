import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import styles from './styles'
import AppText from '../AppText'
import ChooseCourse from './ChooseCourse'
interface Props {
    style?: TextStyle
    title: any
}
const CourseOfEmployees = (props: Props) => {
    const { style, title } = props
    return (
        <View style={[styles.container, { ...style }]}>
            <View style={styles.top}>
                <AppText style={styles.textTop}>Khóa học</AppText>
                <AppText style={styles.textTopBottom}>của nhân viên</AppText>
            </View>
            <View style={styles.bottom}>
                <ChooseCourse title={title} />
            </View>
        </View>
    )
}

export default CourseOfEmployees