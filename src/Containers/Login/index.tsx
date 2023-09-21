import React, { useCallback, useEffect, useState } from 'react'
import {
    Alert,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native'
import { TextInput } from 'react-native-paper'
import { ButtonPrimary } from '../../Components/Button'
import { stackNavigation } from '../../Navigation/nameNavigation'
import { AsyncStorageNavigationConfig } from '../../Utils/AsyncStorageHelper'
import { switchNavigation } from '../../Navigation/nameNavigation'
import AuthActions from '../../redux/Redux/AuthRedux'
import { useDispatch, useSelector } from 'react-redux'
import { Colors, Images, fontSize } from '../../Themes'
import styles from './styles'
import {
    getUserAccount,
    setUserInfo,
    setToken,
    setUserAccount,
    AsyncStorageFirstInitApp,
    AsyncStorageBussinessConfig,
} from '../../Utils/AsyncStorageHelper'
import OutlineInput from '../../Components/OutlineInput'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import CheckBox from '@react-native-community/checkbox'
import { SvgLogo } from '../../Assets/SVG'
import SimpleToast from 'react-native-simple-toast'
interface Props {
    navigation: any
}
const Login = ({ navigation }: Props) => {
    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state.auth)
    const messageAlert = navigation.state?.params?.messageAlert || '';
    const { user, isSuccess, fetching, message } = selector
    const [username, setUsername] = useState('ngavt')
    const [pass, setPass] = useState('123456')
    const [isLogin, setIsLogin] = useState(false)
    const [firstClick, setFirstClick] = useState(true)
    const [showChangePass, setShowChangePass] = useState(false)
    const [errorUser, setErrorUser] = useState<boolean | undefined>(undefined)
    const [errorPass, setErrorPass] = useState<boolean | undefined>(undefined)
    const callLogin = (body: any) => {
        dispatch(AuthActions.login(body))
    }

    useEffect(() => {
        if (messageAlert !== '') {
            Alert.alert(`${messageAlert}`)
        }
    }, [])
    useEffect(() => {
        if (isLogin && !fetching) {
            if (isSuccess) {
                saveUser(user)
            } else {
                setIsLogin(false)
                if (message !== 'notChangePass') {
                    Alert.alert(message)
                } else {
                    setShowChangePass(true)
                }
            }
        }
    }, [isLogin, fetching])

    async function saveUser(item: any) {
        try {
            const userInfo = {
                companyCode: item.companyCode || '',
                id: item.id || '',
                isAdmin: item.isAdmin || false,
                fullName: item.fullName,
                email: item.email || '',
                mobile: item.mobile || '',
                avatar: item.avatar || '',
            }

            await setUserInfo(userInfo)
            await setToken(item.token)

            navigation.navigate(stackNavigation.DASHBOARD)
        } catch (error) {
            console.log('ERROR', error)
        }
    }

    useEffect(() => {
        if (!firstClick) {
            if (username.trim() == '') {
                setErrorUser(true)
                SimpleToast.show('Tài khoản không được để trống')
                // return SimpleToast.show('Tài khoản không được để trống ');
            } else {
                setErrorUser(undefined)
            }
            if (pass.trim() == '') {
                setErrorPass(true)
                SimpleToast.show('Mật khẩu không được để trống')
                // return SimpleToast.show('Mật khẩu không được để trống')
            } else if (pass.trim().length < 3) {
                setErrorPass(true)
                SimpleToast.show('Mật khẩu tối thiểu 3 kí tự')
                // return SimpleToast.show(' Mật khẩu không được ngắn hơn 3 kí tự')
            } else {
                setErrorPass(undefined)
            }
        }
    }, [username, pass, firstClick])

    const pressNext = (user: string, pas: string) => {
        // SimpleToast.show(`Đăng nhập : tk: ${user}, mk: ${pas}`)
        // Check đăng nhập có để trống hay không? kí tự trong mật khẩu
        if (user.trim() == '') {
            setErrorUser(true)
            SimpleToast.show('Tài khoản không được để trống')
            // return SimpleToast.show('Tài khoản không được để trống ');
        } else {
            setErrorUser(undefined)
        }
        if (pas.trim() == '') {
            setErrorPass(true)
            SimpleToast.show('Mật khẩu không được để trống')
            // return SimpleToast.show('Mật khẩu không được để trống')
        } else if (pas.trim().length < 3) {
            setErrorPass(true)
            SimpleToast.show('Mật khẩu tối thiểu 3 kí tự')
            // return SimpleToast.show(' Mật khẩu không được ngắn hơn 3 kí tự')
        } else {
            setErrorPass(undefined)
        }
        if (errorUser == undefined && errorPass == undefined) {
            // gọi hàm đăng nhập
            const body = {
                UserName: user,
                Password: pas,
                DeviceID: '2FF2610C-56AC-457A-AF06-9CE91B6E8FC4',
                firebase_client_id:
                    'eP7B2hYkzEWQuxXssTmJUt:APA91bHEbS28fwx5hr4ZQBQ2WxGCOcnmVrFDBqpF_vaElMMc-xfACKC4RybNHsrkOI7QF6-on-na8a54hY2kFNzhD2VR_RkAGTMTmNE2slx_q7nSpQNDB-MuOhJMlsnZhjDeHTZIAPbt4',
                Language: 'vi-VN',
            }
            // Lưu tài khoản
            setUserAccount({ UserName: user, Password: pas })
            if (user.trim() !== '' && pas.trim() !== '') {
                callLogin(body)
                setIsLogin(true)
            }
            setFirstClick(false)
        }
    }

    async function setUserNameAndPassword() {
        try {
            const userAccount = await getUserAccount()
            if (userAccount) {
                if (userAccount && Object.keys(userAccount).length === 2) {
                    setUsername(userAccount.UserName)
                }
            }
        } catch (error) {
            console.log('setUserNameAndPassword', error)
        }
    }

    const logout = async () => {
        await AsyncStorageNavigationConfig.remove()
        await navigation.navigate(switchNavigation.CHECK_COMPANY_CODE)
    }
    const themes = useThemeColors().themes || 'default'
    const [select, setSelect] = useState(false)
    const [securePass, setSecurePass] = useState(true)

    const InputUserName = () => {
        return (
            <TextInput
                label="Tên đăng nhập"
                left={
                    <TextInput.Icon
                        name={() => (
                            <Image
                                style={[
                                    styles.iconUser,
                                    {
                                        tintColor: NewColor[themes].icon.normal,
                                    },
                                ]}
                                source={Images.userIcon}
                            />
                        )}
                    />
                }
                value={username}
                onChangeText={setUsername}
                mode="outlined"
                outlineColor={NewColor[themes].border}
                activeOutlineColor={
                    NewColor[themes].primary
                }
                error={errorUser}
                selectionColor={NewColor[themes].text.input}
                maxLength={20}
                style={[
                    styles.input,
                    {
                        backgroundColor: NewColor[themes].background.primary,
                        borderColor: NewColor[themes].border,
                    },
                ]}
            />
        )
    }

    const InputPassword = () => {
        <TextInput
            label="Mật khẩu"
            left={
                <TextInput.Icon
                    name={() => (
                        <Image
                            style={[
                                styles.iconPass, {
                                    tintColor: NewColor[themes].icon.normal,
                                },]}
                            source={Images.passwordIcon}
                        />
                    )}
                />
            }
            right={
                <TextInput.Icon
                    name={() => (
                        <TouchableOpacity
                            onPress={() => { setSecurePass(!securePass) }}
                        >
                            <Image
                                style={[
                                    styles.iconEye, {
                                        tintColor: NewColor[themes].text.input,
                                    },]}
                                source={Images.eyeIcon}
                            />
                        </TouchableOpacity>
                    )}
                />
            }
            value={pass}
            onChangeText={setPass}
            mode="outlined"
            outlineColor={NewColor[themes].border}
            activeOutlineColor={NewColor[themes].primary}
            selectionColor={NewColor[themes].text.input}
            error={errorPass}
            secureTextEntry={securePass}
            maxLength={10}
            style={[
                styles.input, {
                    backgroundColor: NewColor[themes].background.primary,
                    borderColor: NewColor[themes].border,
                },]}
        />
    }

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
                                {/* <Image
                                    source={Images.logoNew}
                                    style={[styles.logo]}
                                /> */}
                                <View style={[styles.logo]}>
                                    <SvgLogo />
                                </View>
                                <TextInput
                                    label="Tên đăng nhập"
                                    left={
                                        <TextInput.Icon
                                            name={() => (
                                                <Image
                                                    style={[
                                                        styles.iconUser,
                                                        {
                                                            tintColor: NewColor[themes].icon.normal,
                                                        },
                                                    ]}
                                                    source={Images.userIcon}
                                                />
                                            )}
                                        />
                                    }
                                    value={username}
                                    onChangeText={setUsername}
                                    mode="outlined"
                                    outlineColor={NewColor[themes].border}
                                    activeOutlineColor={
                                        NewColor[themes].primary
                                    }
                                    error={errorUser}
                                    selectionColor={NewColor[themes].text.input}
                                    maxLength={20}
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
                                <TextInput
                                    label="Mật khẩu"
                                    left={
                                        <TextInput.Icon
                                            name={() => (
                                                <Image
                                                    style={[
                                                        styles.iconPass,
                                                        {
                                                            tintColor:
                                                                NewColor[themes]
                                                                    .icon
                                                                    .normal,
                                                        },
                                                    ]}
                                                    source={Images.passwordIcon}
                                                />
                                            )}
                                        />
                                    }
                                    right={
                                        <TextInput.Icon
                                            name={() => (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setSecurePass(
                                                            !securePass
                                                        )
                                                    }}
                                                >
                                                    <Image
                                                        style={[
                                                            styles.iconEye,
                                                            {
                                                                tintColor:
                                                                    NewColor[
                                                                        themes
                                                                    ].text
                                                                        .input,
                                                            },
                                                        ]}
                                                        source={Images.eyeIcon}
                                                    />
                                                </TouchableOpacity>
                                            )}
                                        />
                                    }
                                    value={pass}
                                    onChangeText={setPass}
                                    mode="outlined"
                                    outlineColor={NewColor[themes].border}
                                    activeOutlineColor={
                                        NewColor[themes].primary
                                    }
                                    selectionColor={NewColor[themes].text.input}
                                    error={errorPass}
                                    secureTextEntry={securePass}
                                    maxLength={10}
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
                                <View style={[styles.under]}>
                                    <View style={[styles.rememberPass]}>
                                        <CheckBox
                                            value={select}
                                            tintColors={{ true: '', false: '#A7A7A7' }}
                                            onValueChange={() =>
                                                setSelect(!select)
                                            }
                                            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
                                        />
                                        <Text
                                            style={[
                                                styles.text,
                                                {
                                                    color: '#A7A7A7',
                                                },
                                            ]}
                                        >
                                            Ghi nhớ đăng nhập
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        style={[styles.forgetPass]}
                                        onPress={() => { }}
                                    >
                                        <Text
                                            style={{
                                                color: NewColor[themes].primary,
                                            }}
                                        >
                                            Quên mật khẩu?
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.button]}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            pressNext(username, pass)
                                        }
                                        style={[
                                            styles.loginButton,
                                            {
                                                backgroundColor:
                                                    NewColor[themes].button
                                                        .primary,
                                            },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.textButton,
                                                {
                                                    color: NewColor[themes]
                                                        .background.primary,
                                                },
                                            ]}
                                        >
                                            Đăng nhập
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => { SimpleToast.show('Check Face ID') }}
                                        style={[
                                            styles.faceIDButton,
                                            {
                                                backgroundColor:
                                                    NewColor[themes].primary,
                                            },
                                        ]}
                                    >
                                        <Image
                                            style={[
                                                styles.faceIDIcon,
                                                {
                                                    tintColor:
                                                        NewColor[themes]
                                                            .background.primary,
                                                },
                                            ]}
                                            source={Images.iconFaceID}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <ButtonPrimary
                                    marginTop={10}
                                    title={'Chọn lại'}
                                    onPress={logout}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={[styles.viewFooter]}>
                                    <Text
                                        style={[
                                            styles.text,
                                            {
                                                color: '#9C9C9C',
                                            },
                                        ]}
                                    >
                                        Copyright © Công ty cổ phần Tư vấn Quản
                                        trị
                                    </Text>
                                    <Text
                                        style={[
                                            styles.text,
                                            {
                                                color: '#9C9C9C',
                                            },
                                        ]}
                                    >
                                        Doanh nghiệp Tinh Vân
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Login
