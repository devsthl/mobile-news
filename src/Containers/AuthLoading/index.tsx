import {
    View,
    Text,
    Alert,
    ImageBackground,
    TouchableOpacity,
    Image,
    Keyboard,
    Dimensions,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import AppText from '../../Components/AppText'
import { ButtonPrimary } from '../../Components/Button'
import {
    AsyncStorageFirstInitApp,
    getUserInfo,
    getUserAccount,
    removeUserAccount,
} from '../../Utils/AsyncStorageHelper'
import {
    stackNavigation,
    switchNavigation,
} from '../../Navigation/nameNavigation'
import { Colors, fontSize, Images } from '../../Themes'
import styles from './styles'
import SimpleToast from 'react-native-simple-toast'
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '../../redux/Redux/AuthRedux'
import { setToken } from '../../Utils/AsyncStorageHelper'
import { MARGIN, Pixel24 } from '../../Utils/Transform'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import { SvgLogo } from '../../Assets/SVG'
import { TextInput } from 'react-native-paper'
import OutlineInput from '../../Components/OutlineInput'

const AuthLoading = ({ navigation }: any) => {
    const [pass, setPass] = useState('123456')
    const [fullName, setFullName] = useState('')
    const [companyCode, setCompanyCode] = useState('')
    // const [error, setError] = useState<string | undefined>(undefined);
    const [error, setError] = useState(false)
    const [firstClick, setFirstClick] = useState(true);
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.auth);
    const { user, isSuccess, fetching, message } = selector;
    const [isLogin, setIsLogin] = useState(false);
    const callLogin = (body: any) => {
        dispatch(AuthActions.login(body))
    }
    const themes = useThemeColors().themes || 'default'

    useEffect(() => {
        if (isLogin && !fetching) {
            if (isSuccess) {
                saveUser(user)
            }
        }
    }, [isLogin, fetching])

    async function saveUser(item: any) {
        try {
            await setToken(item.token)

            navigation.navigate(stackNavigation.DASHBOARD)
        } catch (error) {
            console.log('ERROR', error)
        }
    }

    const FaceIdView = () => {
        return (
            <TouchableOpacity onPress={() => { SimpleToast.show('Check Face ID') }}>
                <Image
                    style={{ height: Pixel24, width: Pixel24 }}
                    source={Images.iconFaceID}
                />
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        async function GetDataLocal() {
            const firstInitApp = await AsyncStorageFirstInitApp.get()
            if ((firstInitApp && firstInitApp?.status) || !firstInitApp) {
                return navigation.navigate(switchNavigation.CHECK_COMPANY_CODE)
            } else {
                setCompanyCode(firstInitApp.companyCode)
            }

            const userInfo = await getUserInfo()
            if (userInfo) {
                setFullName(userInfo.fullName)
            } else {
                navigation.navigate(switchNavigation.LOGIN_STACK)
            }
        }

        GetDataLocal()
    }, [])

    useEffect(() => {
        if (!firstClick) {
            if (pass.trim() == '') {
                // setError('Mật khẩu không được để trống')
                setError(true)
                SimpleToast.show('Mật khẩu không được để trống')
            } else if (pass.trim().length < 3) {
                // setError('Mật khẩu không được ngắn hơn 3 kí tự')
                setError(true)
                SimpleToast.show('Mật khẩu tối thiểu 3 kí tự')
            } else {
                // setError(undefined)
                setError(false)
            }
        }
    }, [pass, firstClick])

    const checkLogin = async () => {
        const UserAccount = await getUserAccount()
        const passLocal = UserAccount.Password
        const user = UserAccount.UserName
        if (pass.trim() == '') {
            // setError('Mật khẩu không được để trống')
            setError(true)
            SimpleToast.show('Mật khẩu không được để trống')
        } else if (pass.trim().length < 3) {
            // setError('Mật khẩu không được ngắn hơn 3 kí tự')
            setError(true)
            SimpleToast.show('Mật khẩu tối thiểu 3 kí tự')
        } else if (pass == passLocal) {
            // gọi hàm đăng nhập
            const body = {
                UserName: user,
                Password: pass,
                DeviceID: '2FF2610C-56AC-457A-AF06-9CE91B6E8FC4',
                firebase_client_id:
                    'eP7B2hYkzEWQuxXssTmJUt:APA91bHEbS28fwx5hr4ZQBQ2WxGCOcnmVrFDBqpF_vaElMMc-xfACKC4RybNHsrkOI7QF6-on-na8a54hY2kFNzhD2VR_RkAGTMTmNE2slx_q7nSpQNDB-MuOhJMlsnZhjDeHTZIAPbt4',
                Language: 'vi-VN',
            }

            callLogin(body)
            setIsLogin(true)

            setFirstClick(false)

            // navigation.navigate(stackNavigation.DASHBOARD)
            // setError(undefined)
        } else {
            Alert.alert('Mật khẩu không đúng')
            setError(false)
            // setError(undefined)
        }
        setFirstClick(false)
    }

    const logout = async () => {
        await removeUserAccount()
        navigation.navigate(switchNavigation.LOGIN_STACK)
    }
    const [securePass, setSecurePass] = useState(true)

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
                                <View style={[styles.title]}>
                                    {/* <SvgLogo /> */}
                                    <AppText
                                        style={{
                                            color: NewColor[themes].text.icon,
                                            fontSize: fontSize.extraLarge,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Tiếp tục với tài khoản
                                    </AppText>
                                    <AppText
                                        style={{
                                            color: NewColor[themes].text.input,
                                            fontSize: fontSize.large,
                                            ...styles.titleText
                                        }}
                                    >
                                        {fullName}
                                    </AppText>
                                </View>
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
                                    error={error}
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
                                <View style={[styles.button]}>
                                    <TouchableOpacity
                                        style={[
                                            styles.loginButton,
                                            {
                                                backgroundColor:
                                                    NewColor[themes].button
                                                        .primary,
                                            },
                                        ]}
                                        onPress={checkLogin}
                                    // isLoading={isLogin}
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
                                    marginTop={MARGIN}
                                    title={'Dùng tài khoản khác'}
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
        // <ImageBackground source={Images.backgroundImage} style={styles.imageBg}>
        //     <TouchableWithoutFeedback
        //         style={{ height: Dimensions.get('screen').height }}
        //         onPress={() => {
        //             Keyboard.dismiss()
        //         }}
        //     >
        //         <View style={styles.container}>
        //             <View style={styles.viewTop}>

        //                 <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        //                     <AppText style={{ color: NewColor[themes].text.header, fontSize: fontSize.large, }} >Tiếp tục với tài khoản</AppText>
        //                     <AppText style={{ color: NewColor[themes].text.header, fontSize: fontSize.large, marginTop: 5 }}>{fullName}</AppText>
        //                 </View>

        //                 <OutlineInput
        //                     placeholder={'Mật khẩu'}
        //                     onChangeText={setPass}
        //                     value={pass}
        //                     secureTextEntry={true}
        //                     error={error}
        //                     characterCount={20}
        //                     trailingIcon={FaceIdView}
        //                     inactiveColor={NewColor[themes].border}
        //                     activeColor={NewColor[themes].text.header}
        //                     backgroundColor={'#1c6c82'}
        //                     fontColor={NewColor[themes].text.header}
        //                 />
        //                 <ButtonPrimary
        //                     marginTop={10}
        //                     title={'Đăng nhập'}
        //                     onPress={checkLogin}
        //                     isLoading={isLogin}
        //                 />
        //                 <ButtonPrimary
        //                     marginTop={10}
        //                     title={'Đăng nhập tk khác'}
        //                     onPress={logout}
        //                 />
        //             </View>
        //             <View style={styles.viewBottom}>
        //             </View >
        //         </View>
        //     </TouchableWithoutFeedback>
        // </ImageBackground >
    )
}
export default AuthLoading
