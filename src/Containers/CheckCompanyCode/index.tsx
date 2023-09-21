/** @format */

import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    ImageBackground,
    ScrollView,
    Linking,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
} from 'react-native'
import { Colors, Images } from '../../Themes'
import styles from './styles'
import LoadingOverlay from '../../Components/LoadingOverlay'
import Alert from '../../Components/Alert'
import { ButtonPrimary } from '../../Components/Button'
import AppText from '../../Components/AppText'
import { AsyncStorageFirstInitApp } from '../../Utils/AsyncStorageHelper'
import { PermissionServices } from '../../Permission'
import SimpleToast from 'react-native-simple-toast'
// import NotificationConfig from '../../Utils/pushNotificationHeper';
import ContextApp from '../../ContextApp'
import OutlineInput from '../../Components/OutlineInput'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import { TextInput } from 'react-native-paper'
import { SvgLogo } from '../../Assets/SVG'
interface Props {
    navigation?: any
    onGetCompanyCode?: any
}

function CheckCompanyCode({ navigation, onGetCompanyCode }: Props) {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [firstClick, setFirstClick] = useState(true)
    const { configNavigation, setConfigNavigation } = useContext(ContextApp)

    useEffect(() => {
        // NotificationConfig.requestUserPermission();
        if (!firstClick) {
            if (!value) {
                // setError('Mã công ty không được để trống')
                setError(true)
                SimpleToast.show('Mã công ty không được để trống')
            } else if (value.toString().length < 3) {
                // setError('Mã công ty tối thiểu 3 kí tự')
                setError(true)
                SimpleToast.show('Mã công ty tối thiểu 3 kí tự')
            } else {
                // setError(undefined)
                setError(false)
            }
        }
    }, [value, firstClick])

    const handlePress = () => {
        if (!value) {
            // setError('Mã công ty không được để trống')
            setError(true)
            SimpleToast.show('Mã công ty không được để trống')
            // return SimpleToast.show(
            // 	'Nhập mã công ty'
            // );
        } else if (value.toString().length < 3) {
            // setError('Mã công ty tối thiểu 3 kí tự')
            setError(true)
            SimpleToast.show('Mã công ty tối thiểu 3 kí tự')
            // return SimpleToast.show(
            // 	'Mã công ty tối thiếu 3 kí tự'
            // );
        } else {
            // setError(undefined)
            setError(false)
        }
        if (error == false) {
            getConfigApp()
            setFirstClick(false)
        }
    }

    const getConfigApp = async () => {
        setLoading(true)
        const messageError = await PermissionServices.initConfigApp(value)
        console.log('mess...', messageError)
        if (messageError) {
            setLoading(false)
            AsyncStorageFirstInitApp.set(
                AsyncStorageFirstInitApp.setModel(true)
            )

            return Alert.alert(messageError)
        }

        await AsyncStorageFirstInitApp.set(
            AsyncStorageFirstInitApp.setModel(false, value)
        )
        setLoading(false)

        setConfigNavigation(Symbol())

        if (onGetCompanyCode) {
            onGetCompanyCode(value.trim())
        } else {
            navigation.navigate('Login')
        }
    }

    const handleNavigatePrivacyPolicy = () => {
        Linking.openURL('http://histaff.vn/privacy-policy/')
    }

    const handleNavigateTerms = () => {
        Linking.openURL('http://histaff.vn/eula/')
    }
    const themes = useThemeColors().themes || 'default'

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: NewColor[themes].background.primary,
                },
            ]}
        >
            <View
                style={[
                    styles.background,
                    {
                        backgroundColor: '#F3F3F3',
                    },
                ]}
            >
                <Image
                    source={Images.backgroundImageNew}
                    style={[styles.imageBg]}
                />
            </View>
            <StatusBar barStyle="light-content" />
            <LoadingOverlay visible={loading} />
            <TouchableWithoutFeedback
                style={{ flex: 1 }}
                onPress={() => {
                    Keyboard.dismiss()
                }}
            >
                <ScrollView
                    style={[styles.all]}
                    showsVerticalScrollIndicator={false}
                >
                    <KeyboardAvoidingView>
                        <View style={styles.viewForm}>
                            <View
                                style={[
                                    styles.viewTop,
                                    {
                                        backgroundColor:
                                            NewColor[themes].background.primary,
                                        borderColor: NewColor[themes].border,
                                    },
                                ]}
                            >
                                <View style={[styles.logo]}>
                                    <SvgLogo />
                                </View>
                                <TextInput
                                    label="Mã công ty"
                                    value={value}
                                    onChangeText={(item: string) =>
                                        setValue(item)
                                    }
                                    mode="outlined"
                                    outlineColor={NewColor[themes].border}
                                    activeOutlineColor={
                                        NewColor[themes].primary
                                    }
                                    error={error}
                                    selectionColor={NewColor[themes].text.input}
                                    maxLength={20}
                                    autoCapitalize={'characters'}
                                    style={[
                                        styles.input,
                                        {
                                            backgroundColor:
                                                NewColor[themes].background
                                                    .primary,
                                            borderColor:
                                                NewColor[themes].border,
                                        },
                                    ]}
                                />
                                <ButtonPrimary
                                    marginTop={10}
                                    onPress={handlePress}
                                    title={'Tiếp tục'}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={[styles.viewFooter]}>
                                    <AppText style={{ ...styles.text, color: NewColor[themes].text.input }}>
                                        Bằng việc tiếp tục, bạn đồng ý với
                                    </AppText>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            onPress={
                                                handleNavigatePrivacyPolicy
                                            }
                                        >
                                            <AppText
                                                style={{
                                                    ...styles.text,
                                                    // ...styles.primaryText,
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Chính sách bảo mật
                                            </AppText>
                                        </TouchableOpacity>
                                        <AppText style={{ ...styles.text, color: NewColor[themes].text.input }}>
                                            {' '}
                                            và{' '}
                                        </AppText>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            onPress={handleNavigateTerms}
                                        >
                                            <AppText
                                                style={{
                                                    ...styles.text,
                                                    // ...styles.primaryText,
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Điều khoản sử dụng
                                            </AppText>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default CheckCompanyCode
