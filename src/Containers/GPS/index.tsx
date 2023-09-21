import {
    View,
    Alert,
    TouchableOpacity,
    Platform,
    PermissionsAndroid
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Header from '../../Components/Header'
import { SVGBack } from '../../Assets/SVG'
import styles from './style'
import { RNCamera } from 'react-native-camera'
import DeviceInfo from 'react-native-device-info'
import Geolocation from '@react-native-community/geolocation'
import AppText from '../../Components/AppText'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
interface Props {
    navigation: any
}
const GPS = (props: Props) => {
    const { navigation } = props
    const isFocused = navigation.isFocused()
    // const isFocused = useIsFocused()

    const inputEl = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const themes = useThemeColors().themes || 'default';
    const [locationStatus, setLocationStatus] = useState(true);

    const [SystemVersion, setSystemVersion] = useState('')
    const [SystemName, setSystemName] = useState('')
    const [Model, setModel] = useState('')
    const [currentLatitude, setCurrentLatitude] = useState<any>(null)
    const [currentLongitude, setCurrentLongitude] = useState<any>(null)

    let watchID: any = null;

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                // fetchData()
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Cấp quyền truy cập vị trí',
                            message: 'HistaffProfesional cần bạn cấp quyền truy cập vị trí để thực hiện chấm công',
                            buttonPositive: 'Ok'
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        getOneTimeLocation();
                        //subscribeLocationLocation();
                        setLocationStatus(true)
                    } else {
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchID);
        };
    }, []);
    const getOneTimeLocation = () => {
        setLocationStatus(false);
        Geolocation.getCurrentPosition(
            (position) => {
                setLocationStatus(true);
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);

                setCurrentLongitude(currentLongitude);

                // //Setting Longitude state
                setCurrentLatitude(currentLatitude);
                setIsLoading(false)
            },
            (error) => {
                setLocationStatus(false);
                if (error.PERMISSION_DENIED) {
                    Alert.alert('Cấp quyền truy cập GPS')
                } else {
                    if (error.POSITION_UNAVAILABLE) {
                        Alert.alert('Vui lòng bật GPS để thực hiện chấm công')
                    } else {
                        if (error.TIMEOUT) {
                            Alert.alert(error.message)
                        }
                    }
                }
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 1000
            },
        );
    };
    const _PostQRCode = (Image: any) => {
        console.log('123')
        const uniqueId = DeviceInfo.getUniqueId() || '';
        setIsLoading(true)
        const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer' + JSON.parse('').token
        };

        const data = {
            'latitude': currentLatitude,
            'longitude': currentLongitude,
            'model': Model,
            'openrationSystem': SystemName,
            'operationVersion': SystemVersion,
            'mac': uniqueId,
            'image': Image
        }
        Alert.alert('Chấm công thành công,')
    }
    const takePicture = async () => {
        const options = { quality: 0.5, base64: true }
        const data = await inputEl.current.takePictureAsync(options)
        if (currentLatitude == null || currentLongitude == null) {
            Alert.alert('không có định vị')
        } else {
            _PostQRCode(data?.base64)
        }
    }
    if (!isFocused) {
        return null;
    } else {
        return (
            <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
                <Header
                    title={'Chấm công GPS'}
                    iconLeft={<SVGBack color='white' />}
                    onPressLeft={() => {
                        navigation.goBack()
                    }}
                />
                {locationStatus && isFocused ? <View style={[styles.ViewBody, { backgroundColor: NewColor[themes].background.screen }]}>
                    <View style={styles.WrapCamera}>
                        <RNCamera
                            captureAudio={false}
                            ref={inputEl}
                            style={{ flex: 1 }}
                            type={RNCamera.Constants.Type.front}
                            flashMode={RNCamera.Constants.FlashMode.off}
                            playSoundOnCapture={false}
                            androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message: 'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                        />
                    </View>
                    <View style={styles.ButtonSnap}>
                        <TouchableOpacity onPress={takePicture}>
                            <View style={[styles.ImageSnap, { backgroundColor: NewColor[themes].button.primary }]} />
                        </TouchableOpacity>
                    </View>
                </View>
                    :
                    <View style={styles.ViewBody}>
                        <AppText style={{ textAlign: 'center' }}>Không lấy được thông tin vị trí để chấm công vui lòng thử lại sau</AppText>
                    </View>
                }
                {/* {isLoading ? <LoadingScreen />
                    : null} */}
            </View>
        )
    }
}

export default GPS