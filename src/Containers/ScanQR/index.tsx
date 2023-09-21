import { View, PermissionsAndroid, Platform, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Geolocation from "@react-native-community/geolocation";
import DetailScanQR from "./DetailScanQR";
import styles from "./style";
import Header from "../../Components/Header";
import { SVGBack } from "../../Assets/SVG";
import DetailWifi from "./DetailWifi";
import NetInfo from "@react-native-community/netinfo";
import { NetworkInfo } from 'react-native-network-info';
import DeviceInfo from 'react-native-device-info';
import AppText from "../../Components/AppText";
import NewColor from "../../Themes/NewColor";
import useThemeColors from "../../Hooks/useThemeColors";

const ScanQR = ({ navigation }: any) => {
  const [SystemName, setSystemName] = useState("");
  const [SystemVersion, setSystemVersion] = useState("");
  const [Model, setModel] = useState("");
  const [bssid, setbssid] = useState("");
  const isFocused = navigation.isFocused()
  const [wifiState, setWifiState] = useState<any>({
    isConnected: false,
    ssid: "",
  });


  const [currentLongitude, setCurrentLongitude] = useState("");
  const [currentLatitude, setCurrentLatitude] = useState("");
  const [locationStatus, setLocationStatus] = useState<boolean | string>(false);
  let watchID: any = null;

  const getWifiDetails = async () => {
    const { type, isConnected, details } = await NetInfo.fetch("wifi");
    if (type === "wifi" && isConnected) {
      setWifiState({
        isConnected: isConnected,
        ssid: details.ssid,
      });
      NetworkInfo.getBSSID().then((bssid: any) => {
        console.log("bssid...", bssid);
        setbssid(bssid || "");
      });
    }
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "ios") {
        getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This app needs to access your location',
              buttonPositive: "Ok",
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
          } else {
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    if (isFocused) {
      getWifiDetails();
      requestLocationPermission();
    }
  }, []);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "ios") {
        getOneTimeLocation();
        setLocationStatus(true);
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This app needs to access your location',
              buttonPositive: "Ok",
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
            setLocationStatus(true);
          } else {
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    getWifiDetails();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  useEffect(() => {
    let systemVersion = DeviceInfo.getSystemVersion();
    setSystemVersion(systemVersion);
    let brand = DeviceInfo.getBrand();
    setModel(brand);
    let systemName = DeviceInfo.getSystemName();
    setSystemName(systemName);
    // fetchData()
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus(false);
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus(true);

        const currentLongitude = JSON.stringify(position.coords.longitude);

        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLongitude(currentLongitude);

        setCurrentLatitude(currentLatitude);
        console.log(currentLatitude, "...", currentLongitude);
        getWifiDetails();
      },
      (error) => {
        console.log("error...", error);
        if (error.PERMISSION_DENIED) {
          Alert.alert('Please grant location access to the app');
        } else {
          if (error.POSITION_UNAVAILABLE) {
            Alert.alert('Please enable GPS on the device');
          } else {
            if (error.TIMEOUT) {
              Alert.alert(error.message);
            }
          }
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  };
  const DetailQR = React.memo(DetailScanQR);
  const themes = useThemeColors().themes || 'default';

  return (
    <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={"Quét mã QR"}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}>
        <View style={[styles.wrapQrCode, { backgroundColor: NewColor[themes].background.screen }]}>
          <View style={{ height: 160 }}>
            <DetailWifi ssid={wifiState.ssid || ""} bssid={bssid} />
          </View>
          {locationStatus ? <DetailQR _onRead={() => { }} /> :
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <AppText>{'Không lấy được vị trí để chấm công'}</AppText>
            </View>}
        </View>
      </View>
    </View>
  );
};
export default ScanQR;
