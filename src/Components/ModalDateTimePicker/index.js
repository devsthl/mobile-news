import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import DatePicker from 'react-native-date-picker'

import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
// interface Props {
//     visible: boolean,
//     _Close: any,
//     _Launch: any,
//     minuteInterval: 1
// }

const ModalDateTimePicker = ({ visible, _Close, _Launch, minuteInterval = 1 }) => {
    const themes = useThemeColors().themes || 'default';

    let date = new Date()
    return (
        <Modal visible={visible} style={styles.container} transparent={true} animationType={'fade'}>
            <TouchableOpacity style={[styles.ModalStyle, { backgroundColor: NewColor[themes].background.modal }]} onPress={_Close}>
            </TouchableOpacity>
            <View style={[styles.ViewContent, { backgroundColor: NewColor[themes].background.primary }]} >
                <View style={styles.HeaderTitle}>
                    <TouchableOpacity style={{ padding: 1 }} onPress={_Close} >
                        <Text allowFontScaling={false}>Đóng</Text>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={[styles.OptionsTitle]}>Chọn thời gian</Text>
                    <TouchableOpacity style={{ padding: 1 }} onPress={() => _Launch(date)} >
                        <Text allowFontScaling={false}>Chọn</Text>
                    </TouchableOpacity>
                </View>
                <DatePicker
                    date={date}
                    mode='time'
                    locale='vi-VN'
                    textColor={NewColor[themes].text.input}
                    // timeZoneOffsetInMinutes={30}
                    minuteInterval={minuteInterval}
                    androidVariant="nativeAndroid"
                    onDateChange={(d) => date = d}
                    is24Hour={true}
                />
            </View>
        </Modal>
    );
};

export default ModalDateTimePicker