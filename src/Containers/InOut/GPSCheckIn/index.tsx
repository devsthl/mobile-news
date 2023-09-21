import { View, Text, SafeAreaView, Platform, PermissionsAndroid, Alert } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import dayjs from 'dayjs'
import AppText from "../../../Components/AppText";
import Geolocation from '@react-native-community/geolocation';
import { RNCamera } from 'react-native-camera';
import Header from "../../../Components/Header";
import { SVGBack } from "../../../Assets/SVG";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
interface PropsGPSCheckIn {
    navigation?: any
}


export default function GPSCheckIn({ navigation }: PropsGPSCheckIn) {

    const [date, setDate] = useState(dayjs())
    const [locationStatus, setLocationStatus] = useState(false)
    let watchID: any = null;
    const inputEl = useRef(null);
    const themes = useThemeColors().themes || 'default';

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
            //Will give you the current location
            (position) => {
                setLocationStatus(true);

                //getting the Longitude from the location json
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);

                //getting the Latitude from the location json
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);

                //Setting Longitude state
                // setCurrentLongitude(currentLongitude);

                // //Setting Longitude state
                // setCurrentLatitude(currentLatitude);
                // setIsLoading(false)
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

    useEffect(() => {
        Geolocation.getCurrentPosition(info => console.log('info...', info));

        const intervel = setInterval(() => {
            setDate(dayjs())
        }, 1000);

        return () => clearInterval(intervel);
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: NewColor[themes].primary }}>
            <Header
                title="Chấm công GPS"
                iconLeft={<SVGBack />}
                onPressLeft={() => navigation.goBack()}
            />
            <View style={{ flex: 1, backgroundColor: NewColor[themes].background.screen }}>

                <AppText>{date.format('dddd DD MMMM')}</AppText>
                <AppText>{date.format('hh:mm:ss')}</AppText>
                <View style={{
                    flex: 1,
                    marginTop: 10,
                    // justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{ height: '60%', width: '100%' }}>
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
                </View>
            </View>
        </SafeAreaView>
    );
}
