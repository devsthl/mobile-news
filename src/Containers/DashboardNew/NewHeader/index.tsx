import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles";
import AppText from "../../../Components/AppText";
import moment from "moment";
import { Colors, fontSize } from "../../../Themes";
import 'moment-lunar';
import dayjs from 'dayjs'
import color from "../../../Themes/color";
import NewColor from "../../../Themes/NewColor";
import useThemeColors from "../../../Hooks/useThemeColors";
interface PropsNewHeader {
    navigation?: any;
    avatar: any;
    fullName?: string;
}

export default function NewHeader({ avatar, fullName = '' }: PropsNewHeader) {

    const [date, setDate] = useState('')
    const [Al, setAl] = useState('')
    const themes = useThemeColors().themes || 'default';

    useEffect(() => {
        const intervel = setInterval(() => {
            setDate(dayjs().format('DD/MM/YYYY HH:mm:ss'))
            setAl(moment().lunar().format('DD/MM/YYYY'))
        }, 1000);
        return () => clearInterval(intervel);
    }, [])
    // console.log("date", date);

    return (
        <View style={[styles.imageHeader, { backgroundColor: NewColor[themes].primary }]}>
            <View style={styles.textTime}><AppText style={styles.textTop}>{date}</AppText></View>
            <View style={[styles.wrapHeader, { backgroundColor: NewColor[themes].primary }]}>
                <View style={[styles.wrapper2, { backgroundColor: 'red' }]}>
                    <View style={{ justifyContent: 'center', height: 30, flex: 1 }}>
                        <Text allowFontScaling={false} style={[styles.textMonent, { fontSize: fontSize.extraSmall, }]}>{`Xin chào `}
                            <AppText style={{ fontWeight: 'bold', color: color.white, fontSize: fontSize.large }}>
                                {`${fullName.split(' ').slice(-1).join(' ')},`}
                            </AppText>
                        </Text>
                    </View>
                    <View style={{ width: 30, height: 30, borderRadius: 30, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image style={{
                            borderWidth: 1,
                            borderColor: 'white',
                            width: 40,
                            height: 40,
                            borderRadius: 40,
                            backgroundColor: Colors.whitesecondary
                        }}
                            source={{ uri: avatar }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.top}>
            </View>
            <View style={styles.viewTop}>
                <AppText style={styles.textTop}>
                    Quỹ nghỉ phép: 6
                </AppText>
                <View style={{ height: 25 }}>
                    <Text style={{ color: color.white, fontSize: fontSize.large, opacity: 0.5 }}>|</Text>
                </View>
                <AppText style={styles.textTop}>
                    Số giờ tăng ca: 9
                </AppText>
            </View>
        </View>
    )
}
