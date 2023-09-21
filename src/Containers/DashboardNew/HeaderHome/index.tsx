import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles";
import AppText from "../../../Components/AppText";
import moment from "moment";
import { Colors } from "../../../Themes";
import 'moment-lunar';
import dayjs from 'dayjs'

interface PropsHeaderHome {
    navigation: any;
    avatar: any;
    date?: string | number;
    months?: string | number;
    year?: string | number;
    dateAl?: string | number;
    colorAL?: string;
    fullName?: string;
    date2?: any;
}

export default function HeaderHome({ avatar, fullName = '' }: PropsHeaderHome) {

    const [date, setDate] = useState('')
    const [Al, setAl] = useState('')

    useEffect(() => {
        const intervel = setInterval(() => {
            setDate(dayjs().format('DD/MM/YYYY HH:mm:ss'))
            setAl(moment().lunar().format('DD/MM/YYYY'))
        }, 1000);

        return () => clearInterval(intervel);
    }, [])

    return (
        <View style={styles.imageHeader}>
            <View style={styles.wrapHeader}>
                <View style={{ width: 60, height: 70, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: Colors.whitesecondary }}
                        source={{ uri: avatar }}
                    />
                </View>
                <View style={{ marginLeft: 10, justifyContent: 'center', height: 70, flex: 1 }}>
                    <AppText style={styles.textMonth}>{date}</AppText>
                    <AppText style={styles.textMonth}>{Al}</AppText>
                    <Text allowFontScaling={false} style={[styles.textMonent,]}>{`Xin chào ${fullName.split(' ').slice(-1).join(' ')},`}</Text>
                </View>
            </View>
        </View>
    )
}
