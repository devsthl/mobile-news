import { View, StyleSheet } from "react-native";
import React from "react";
import AppText from "../../../Components/AppText";
import { fontSize } from "../../../Themes";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
interface PropsDesText {
    title?: string,
    value?: string | number
}

export default function DesText(props: PropsDesText) {
    const { title = '', value = '' } = props
    const themes = useThemeColors().themes || 'default';
    return (
        <View style={[styles.container, { borderColor: NewColor[themes].border }]}>
            <AppText numberOfLines={3} style={styles.appTextMonthDesTitle}>{title}</AppText>
            <AppText style={styles.appTextMonthDesValue}>{value != '' ? value : '-'}</AppText>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
    },
    appTextMonthDesTitle: {
        fontSize: fontSize.XXS,
        flex: 5,
    },
    appTextMonthDesValue: {
        fontSize: fontSize.XXS,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right'
    },



})