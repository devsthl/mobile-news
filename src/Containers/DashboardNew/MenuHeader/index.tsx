import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Metrics, fontSize } from "../../../Themes";
import color from "../../../Themes/color";
import AppText from "../../../Components/AppText";
import { SvgGPS, SvgRegister } from "../../../Assets/SVG";
import { SvgJoboard } from "../../../Assets/SVG";
import { SvgPaycheck } from "../../../Assets/SVG";

const pixel = Metrics.ratioH
const VIEW_CONTAINER = 110 * pixel
const VIEW_ICON = 65 * pixel
const MARGIN = 10 * pixel
const MARGIN_ICON = 8 * pixel
const SIZE_ICON = 35 * pixel

interface PropsIcons {
    linkSvg?: any;
    label: string;
    onPress?: any;
}

export const IconHeader = (props: PropsIcons) => {
    const { linkSvg, label, onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: VIEW_ICON,
                height: VIEW_ICON,
                marginHorizontal: MARGIN_ICON,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View style={{
                width: SIZE_ICON,
                height: SIZE_ICON,
                justifyContent: "center",
                alignItems: 'center'
            }}>
                {linkSvg}
            </View>
            <AppText
                style={{ fontSize: fontSize.XXXS, fontWeight: 'bold', marginTop: MARGIN_ICON, textAlign: 'center' }}
            >
                {label}
            </AppText>
        </TouchableOpacity>
    )
}

interface PropsMenu {
    navigation: any,
    textLeft?: string,
    textRight?: string,
}

export default function MenuHeader(props: PropsMenu) {
    const { navigation, textLeft, textRight } = props
    return (
        <View
            style={styles.container}
        >
            <View style={styles.top}>
                <View
                    style={[styles.topLeft, { borderRightWidth: 1 }]}
                >
                    <AppText style={styles.textTop} children={textLeft} />
                </View>
                <View
                    style={styles.topLeft}
                >
                    <AppText style={styles.textTop} children={textRight} />
                </View>
            </View>

            <View style={{
                height: 70 * pixel,
                // marginHorizontal: MARGIN,
                // marginVertical: MARGIN,
                // backgroundColor: color.yellow,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',

            }}>
                <IconHeader linkSvg={<SvgGPS />} label="GPS" onPress={() => navigation.navigate('GPSCheckIn')} />
                <IconHeader linkSvg={<SvgJoboard />} label="Bảng công" onPress={() => navigation.navigate('TimeSheetsWebview')} />
                <IconHeader linkSvg={<SvgRegister />} label="Đăng ký" onPress={() => navigation.navigate('Register')} />
                <IconHeader linkSvg={<SvgPaycheck />} label="Phiếu lương" onPress={() => navigation.navigate('PayCheckStack')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: VIEW_CONTAINER,
        backgroundColor: color.white,
        width: '90%',
        marginTop: -pixel * 30,
        borderRadius: MARGIN,
        borderWidth: 1,
        borderColor: color.boder,
        marginBottom: MARGIN,
    },
    top: {
        flexDirection: 'row',
        height: 30 * pixel,
        backgroundColor: color.accent,
        borderTopLeftRadius: MARGIN,
        borderTopRightRadius: MARGIN,
    },
    topLeft: {
        flex: 1,
        // borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: color.boder,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTop: {
        marginLeft: MARGIN,
        fontSize: fontSize.extraSmall,
        fontWeight: 'bold',
        color: color.white
    }
})
