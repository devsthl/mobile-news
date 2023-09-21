import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenHeader from '../../Components/ScreenHeader'
import AppText from '../../Components/AppText'
import { ButtonPrimary } from '../../Components/Button';
import { Colors } from '../../Themes';

import {
    getApplicationName,
    getBrand,
    getDeviceId,
    getDeviceType,
    getDeviceName,
    getIpAddress,
    getMacAddress,
} from 'react-native-device-info';
import WifiManager, { getCurrentWifiSSID } from "react-native-wifi-reborn";
import { NetworkInfo } from "react-native-network-info";
import NetInfo from '@react-native-community/netinfo'
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';
interface Props {
    navigation: any,
}

const WifiCheckIn = ({ navigation }: Props) => {
    const appname = getApplicationName()
    const brank = getBrand();
    const deviceId = getDeviceId()
    const devicetype = getDeviceType()
    const [deviceName, setDeviceName] = useState('')
    const [ipAddress, setIpAddress] = useState('')
    const [mac, setMac] = useState('')
    const [BSSID, setBSSID] = useState('')
    const [NetInfoAddress, setNetInfoAddress] = useState('')
    const [NetInfoV4, setNetInfoV4] = useState('')
    const [NetInfoSSID, setNetInfoSSID] = useState('')
    const [NetInfoBSSID, setNetInfoBSSID] = useState('')
    const [NetInfoSubnet, setNetInfoSubnet] = useState('')
    useEffect(() => {
        const abc = async () => {
            const device = await getDeviceName()
            setDeviceName(device)
            const IpA = await getIpAddress()
            setIpAddress(IpA)
            const m = await getMacAddress()
            setMac(m)
            NetworkInfo.getIPAddress().then(ipAddress => {
                console.log('ipAddress...', ipAddress);
                setNetInfoAddress(ipAddress || 'null')
            });

            NetworkInfo.getIPV4Address().then(ipv4Address => {
                console.log('ipv4...', ipv4Address);
                setNetInfoV4(ipv4Address || 'null')
            });

            // Get SSID
            NetworkInfo.getSSID().then(ssid => {
                console.log('ssid...', ssid);
                setNetInfoSSID(ssid || 'null')
            });

            // Get BSSID
            NetworkInfo.getBSSID().then(bssid => {
                console.log('bssid...', bssid);
                setNetInfoBSSID(bssid || 'null')
            });

            // Get Subnet
            NetworkInfo.getSubnet().then(subnet => {
                console.log('subnet...', subnet);
                setNetInfoSubnet(subnet || 'null')
            });

            // Get Default Gateway IP
            NetworkInfo.getGatewayIPAddress().then(defaultGateway => {
                console.log('defaultGateway...', defaultGateway);
            });

            const bss = await getCurrentWifiSSID()
            setBSSID(bss)
            WifiManager.getBSSID().then(
                ssid => {
                    console.log("Your current connected wifi SSID is " + ssid);
                    setBSSID(ssid)
                },
                () => {
                    console.log("Cannot get current SSID!");
                }
            );

            NetInfo.fetch().then(state => {
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);
            });
        }
        abc()
    }, [])
    const themes = useThemeColors().themes || 'default';

    return (
        <ScreenHeader
            hideHeader
            backgroundColor={NewColor[themes].background.screen}
        >
            <View>
                <AppText>{appname}</AppText>
                <AppText>Brank...{brank}</AppText>
                <AppText>deviceId...{deviceId || 'null'}</AppText>
                <AppText>devicetype...{devicetype}</AppText>
                <AppText>deviceName...{deviceName}</AppText>
                <AppText>ipAddress...{ipAddress}</AppText>
                <AppText>mac...{mac}</AppText>
                <AppText>BSSID...{BSSID}</AppText>
                <AppText>NetInfoAddress ...{NetInfoAddress}</AppText>
                <AppText>NetInfoBSSID ...{NetInfoBSSID}</AppText>
                <AppText>NetInfoSSID ...{NetInfoSSID}</AppText>
                <AppText>NetInfoSubnet ...{NetInfoSubnet}</AppText>
                <AppText>NetInfoV4 ...{NetInfoV4}</AppText>
            </View>
        </ScreenHeader>
    )
}

export default WifiCheckIn;