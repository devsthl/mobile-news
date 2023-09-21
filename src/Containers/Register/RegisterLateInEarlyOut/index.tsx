import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import { SVGBack } from '../../../Assets/SVG'
import Styles from '../../../Components/Styles/Styles'
import styles from './style'
import { DatePicker } from '../../../Components/DatePicker'
import { fontSize, } from '../../../Themes'
import NoteRegister from '../../../Components/NoteRegister'
import AppText from '../../../Components/AppText'
import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import { ButtonPrimary } from '../../../Components/Button'
interface Props {
    navigation: any,
}
const RegisterLateInEarlyOut = (props: Props) => {
    const [late, setLate] = useState('')
    const [early, setEarly] = useState('')
    const [searchTerm, setSearchTerm] = useState();
    const [item, setItem] = useState(null);
    const [comment, setComment] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const themes = useThemeColors().themes || 'default';

    const { navigation } = props;

    return (
        <View style={[Styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                title='Đăng ký đi muộn về sớm'
                iconLeft={<SVGBack />}
                onPressLeft={() => navigation.goBack()}
            />
            <ScrollView style={[Styles.wrapViewFlat, { backgroundColor: NewColor[themes].background.screen }]}>
                <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={50}>
                    <View style={styles.bodyCalander}>
                        <View style={{
                            flex: 1,
                        }}>
                            <DatePicker
                                title={'Từ ngày'}
                                required
                                setDateSendServer={setStartDate}

                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <DatePicker
                                title={'Đến ngày'}
                                required
                                setDateSendServer={setEndDate}
                            />
                        </View>
                    </View>
                    <View style={styles.bodyCalander2}>
                        <TouchableOpacity style={[styles.bodyButton, {
                            backgroundColor: NewColor[themes].background.primary,
                            borderColor: NewColor[themes].border,
                        }]}>
                            <TextInput
                                allowFontScaling={false}
                                underlineColorAndroid="transparent"
                                placeholderTextColor={NewColor[themes].text.placeholder}
                                placeholder={'Đi muộn (phút)'}
                                keyboardType={'numeric'}
                                onChangeText={(e) => setLate(e)}
                                style={[styles.txtHours,]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.bodyButton, {
                            backgroundColor: NewColor[themes].background.primary,
                            borderColor: NewColor[themes].border,
                        }]}>
                            <TextInput
                                allowFontScaling={false}
                                underlineColorAndroid="transparent"
                                placeholderTextColor={NewColor[themes].text.placeholder}
                                placeholder={'Về sớm (phút)'}
                                keyboardType={'numeric'}
                                onChangeText={(e) => setEarly(e)}
                                style={[styles.txtHours,]}
                            />
                        </TouchableOpacity>
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
                        {/* <Text
                            allowFontScaling={false}
                            style={[styles.TextReason]}>Lý do*</Text> */}
                        <AppText require style={{ fontWeight: '600' }}>{'Lý do'}</AppText>
                        <View style={[styles.textAreaContainer, {
                            backgroundColor: NewColor[themes].background.primary,
                            borderColor: NewColor[themes].border
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
                            title={`Đăng ký`}
                            onPress={() => { }}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={[styles.detailRested, { backgroundColor: NewColor[themes].background.screen }]}>
                <View>
                    <NoteRegister
                        textLeft={'Tổng phút ĐMVS trong tháng'}
                        textRight={'0'}
                    />
                    <NoteRegister
                        textLeft={'Số lần ĐMVS trong tháng'}
                        textRight={'0'}
                    />
                </View>
            </View>
        </View>
    )
}

export default RegisterLateInEarlyOut