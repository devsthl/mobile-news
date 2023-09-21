import { View, Text, AppState } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
// import moment from 'moment';
import color from '../../../Themes/color';
import AppText from "../../../Components/AppText";
import dayjs from 'dayjs';
import Geolocation from '@react-native-community/geolocation';

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
interface wifiConnect {
    ssid: string,
    bssid?: string,
}

export default function DetailWifi({ ssid, bssid }: wifiConnect) {
    const [date, setDate] = useState(dayjs())
    const themes = useThemeColors().themes || 'default';

    useEffect(() => {
        Geolocation.getCurrentPosition(info => console.log('info...', info));

        const intervel = setInterval(() => {
            setDate(dayjs())
        }, 1000);

        return () => clearInterval(intervel);
    }, [])

    return (
        <View style={[styles.container, { backgroundColor: NewColor[themes].background.screen }]}>
            <AppText style={[styles.textDate, { color: NewColor[themes].primary }]}>{date.format('DD.MM.YYYY HH:mm')}</AppText>
            {ssid !== '' && <Text allowFontScaling={false} style={[styles.textWifi]}>Wifi: <Text allowFontScaling={false} style={{ color: NewColor[themes].primary }}>{ssid}</Text></Text>}
            {bssid !== '' && <Text allowFontScaling={false} style={[styles.textWifi]}>bssid: <Text allowFontScaling={false} style={{ color: NewColor[themes].primary }}>{bssid}</Text></Text>}
        </View>
    )
}