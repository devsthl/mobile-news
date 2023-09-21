import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, InteractionManager } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import { SVGcontinue, SVGBack } from '../../../Assets/SVG'
import Styles from '../../../Components/Styles/Styles'
import styles from './style'
import { DatePicker } from '../../../Components/DatePicker'
import { fontSize, } from '../../../Themes'
import NoteRegister from '../../../Components/NoteRegister'
import CheckBox from '@react-native-community/checkbox'
import moment from 'moment'
import ModalDateTimePicker from '../../../Components/ModalDateTimePicker'
import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import { ButtonPrimary } from '../../../Components/Button'
interface Props {
    navigation: any,
}
const RegisterOT = (props: Props) => {
    const { navigation } = props;
    const [Day, setDay] = useState('Ngày');

    const [item, setItem] = useState(null);
    const [TimeStart, setTimeStart] = useState('Bắt đầu');
    const [TimeEnd, setTimeEnd] = useState('Kết thúc');
    const [date, setDate] = useState(new Date());
    const [comment, setComment] = useState('')
    const [checked, setChecked] = useState(false)
    const [IsStart, setIsStart] = useState(true);
    const [VisibleTimePicker, setVisibleTimePicker] = useState(false);
    const [fromDate, setFromDate] = useState('')

    useEffect(() => {

    }, [])
    const _LaunchTimePicker = (date: Date) => {
        const dateTemp = moment(date).format('HH:mm');
        const startTemp = moment(TimeStart).format('HH:mm');
        const endTemp = moment(TimeEnd).format('HH:mm');
        const ti = moment(date);
        var Time = moment(date).format('MM/DD/YYYY HH:mm:ss');
        if (IsStart == true) {
            setTimeStart(moment(Time).format('MM/DD/YYYY HH:mm'));
            if ((dateTemp > endTemp) || (TimeEnd === 'Kết thúc')) {
                setTimeEnd(moment(Time).add(30, 'm').format('MM/DD/YYYY HH:mm'));
            }
        }
        else {
            setTimeEnd(moment(Time).format('MM/DD/YYYY HH:mm'));
            if (startTemp > dateTemp) {
                setTimeStart(moment(Time).format('MM/DD/YYYY HH:mm'));
            }
        }
        setVisibleTimePicker(false);
    }
    const _onTimeStart = () => {
        setIsStart(true)
        setVisibleTimePicker(true)
    }
    const _onTimeEnd = () => {
        setIsStart(false)
        setVisibleTimePicker(true)
    }
    const _CloseTimePicker = () => {
        setVisibleTimePicker(false);
    }
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={[Styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                title='Đăng ký OT'
                iconLeft={<SVGBack />}
                onPressLeft={() => navigation.goBack()}
            />
            <ScrollView style={[Styles.wrapViewFlat, { backgroundColor: NewColor[themes].background.screen }]}>
                <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={50}>
                    <View style={styles.bodyCalander}>
                        <View style={{ flex: 1 }}>
                            <DatePicker
                                title={'Từ ngày'}
                                required
                                setDateSendServer={setFromDate}
                            />
                        </View>
                    </View>
                    <View style={styles.bodyCalander2}>
                        <TouchableOpacity
                            onPress={() => _onTimeStart()}
                            style={[styles.bodyClock, { borderColor: NewColor[themes].border }]}>
                            <Text style={[styles.textCalender]}>
                                {TimeStart != 'Bắt đầu' ? TimeStart.slice(10) : 'Bắt đầu'}
                            </Text>
                            <SVGcontinue style={{ transform: [{ rotate: '90deg' }] }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => _onTimeEnd()}
                            style={[styles.bodyClock, { borderColor: NewColor[themes].border }]}>
                            <Text style={[styles.textCalender]}>
                                {TimeEnd != 'Kết thúc' ? TimeEnd.slice(10) : 'Kết thúc'}
                            </Text>
                            <SVGcontinue style={{ transform: [{ rotate: '90deg' }] }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyCalander3}>
                        <CheckBox
                            disabled={false}
                            value={checked}
                            style={{ width: 18, height: 18, paddingRight: 30 }}
                            onCheckColor={'black'}
                            tintColor={'black'}
                            onTintColor={'black'}
                            animationDuration={0.2}
                            boxType={'square'}
                            onValueChange={(value) => setChecked(value)} />
                        <Text style={{ color: NewColor[themes].text.normal }}>Chuyển sang quỹ nghỉ bù</Text>
                    </View>

                    {
                        item !== null ?
                            <View style={styles.bodyMorning}>
                                <View style={styles.bodyButtonMorning}>
                                    <Text>test</Text>
                                </View>
                                <View style={styles.bodyButtonMorning}>
                                    <Text>test</Text>
                                </View>
                            </View>
                            :
                            null
                    }
                    <View style={styles.ViewStyleRegion}>
                        <Text
                            allowFontScaling={false}
                            style={[styles.TextReason]}>Lý do*</Text>
                        <View style={[styles.textAreaContainer, {
                            borderColor: NewColor[themes].border,
                            backgroundColor: NewColor[themes].background.primary
                        }]}>
                            <TextInput
                                allowFontScaling={false}
                                value={comment}
                                style={
                                    comment.length == 0 ?
                                        [styles.textArea, { fontSize: fontSize.small, color: NewColor[themes].text.placeholder }]
                                        :
                                        [styles.textArea]
                                }
                                numberOfLines={5}
                                underlineColorAndroid="transparent"
                                placeholder={'Vui lòng nhập lý do'}
                                placeholderTextColor={NewColor[themes].text.placeholder}
                                onChangeText={(e) => setComment(e)}
                                multiline={true} />
                        </View>
                    </View>
                    <View style={styles.ViewFooter}>
                        <ButtonPrimary
                            onPress={() => { }}
                            title={`Đăng ký`}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={[styles.detailRested, { backgroundColor: NewColor[themes].background.screen }]}>
                <View>
                    <NoteRegister
                        textLeft={'Tổng số phút OT trong tháng'}
                        textRight={'0'}
                    />
                </View>
            </View>
            <ModalDateTimePicker visible={VisibleTimePicker} _Close={_CloseTimePicker} _Launch={_LaunchTimePicker} />
        </View>
    )
}

export default RegisterOT