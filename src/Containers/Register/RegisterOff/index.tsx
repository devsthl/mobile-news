import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import { SVGcontinue, SVGBack } from '../../../Assets/SVG'
import Styles from '../../../Components/Styles/Styles'
import styles from './style'
import { DatePicker } from '../../../Components/DatePicker'
import color from '../../../Themes/color'
import { fontSize, } from '../../../Themes'
import NoteRegister from '../../../Components/NoteRegister'
import { ButtonPrimary } from '../../../Components/Button'
import { MARGIN } from '../../../Utils/Transform'
import AppText from '../../../Components/AppText'
import NewColor from '../../../Themes/NewColor'
import useThemeColors from '../../../Hooks/useThemeColors'
interface Props {
    navigation: any,
}
const RegisterOff = (props: Props) => {
    const [isShowDropDown, setIsShowDropDown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [item, setItem] = useState(null);
    const [comment, setComment] = useState('')
    const _onShowDropDown = () => {
        setIsShowDropDown(!isShowDropDown)
    }
    const { navigation } = props;

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={[Styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                title='Đăng ký vắng/giải trình'
                iconLeft={<SVGBack />}
                onPressLeft={() => navigation.goBack()}
            />
            <ScrollView style={[Styles.wrapViewFlat, { backgroundColor: NewColor[themes].background.screen }]}>
                <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={50}>
                    <View style={styles.bodyCalander}>
                        <View style={{ flex: 1 }}>
                            <DatePicker
                                title={'Từ ngày'}
                                setDateSendServer={setStartDate}
                                required
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <DatePicker
                                title={'Đến ngày'}
                                setDateSendServer={setEndDate}
                                required
                            />
                        </View>
                    </View>
                    <View style={styles.bodyCalander2}>
                        <TouchableWithoutFeedback onPress={_onShowDropDown}>
                            <View style={[styles.bodyButton, { backgroundColor: NewColor[themes].background.primary, borderColor: NewColor[themes].border }]}>
                                <View style={styles.ViewDropDown}>
                                    <Text
                                        allowFontScaling={false}
                                        numberOfLines={1}
                                        style={[
                                            styles.TextDayOff,
                                        ]}
                                    >Loại công</Text>
                                    <SVGcontinue style={{
                                        transform: [{ rotate: '90deg' }],
                                    }} />
                                </View>
                                {
                                    isShowDropDown ?
                                        <View style={[styles.ViewContentDropDown,]}>
                                            <TextInput
                                                value={searchTerm}
                                                onChangeText={setSearchTerm}
                                                placeholder={'Tìm'}
                                                style={{ color: NewColor[themes].text.input }}
                                                allowFontScaling={false}
                                                numberOfLines={1}
                                            />
                                            <View style={{
                                                borderBottomWidth: 1,
                                                borderBottomColor: NewColor[themes].border,
                                                // borderWidth: 1,
                                            }}></View>
                                            <View style={{ paddingTop: 10 }}>
                                                <Text>Công làm việc ngày thường</Text>
                                                <Text>Công làm việc ngày nghỉ</Text>
                                                <Text>Nghỉ phép hàng năm</Text>
                                                <Text>Công làm việc ngày nghỉ</Text>
                                                <Text>Công làm việc ngày thường</Text>
                                            </View>

                                        </View>
                                        :
                                        null
                                }
                            </View>
                        </TouchableWithoutFeedback>
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
                        <AppText style={{ fontWeight: '600' }} require>{'Lý do'}</AppText>
                        <View style={[styles.textAreaContainer, { borderColor: NewColor[themes].border, backgroundColor: NewColor[themes].background.primary }]}>
                            <TextInput
                                allowFontScaling={false}
                                value={comment}
                                style={styles.textArea}
                                numberOfLines={5}
                                underlineColorAndroid="transparent"
                                placeholder={'Vui lòng nhập lý do'}
                                placeholderTextColor={NewColor[themes].text.placeholder}
                                onChangeText={(e) => setComment(e)}
                                multiline={true} />
                        </View>
                    </View>
                    <ButtonPrimary
                        title='Đăng ký'
                        marginTop={MARGIN}
                        onPress={() => {
                            console.log('start', startDate, 'end', endDate)
                        }}
                    />
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={[styles.detailRested, { backgroundColor: NewColor[themes].background.screen }]}>
                <View>
                    <NoteRegister
                        textLeft={'Số ngày nghỉ phép khả dụng'}
                        textRight={'0'}
                    />
                    <NoteRegister
                        textLeft={'Số ngày nghỉ phép đã dùng'}
                        textRight={'0'}
                    />
                </View>
            </View>
        </View>
    )
}

export default RegisterOff