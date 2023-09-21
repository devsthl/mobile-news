import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../../../Components/AppText";
import styles from "./style";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import { fontSize } from "../../../Themes";

interface BtnCancelProps {
    title: string,
    onPress?: () => void;
}
export default function BtnCancel(props: BtnCancelProps) {
    const { title, onPress } = props
    const themes = useThemeColors().themes || 'default';

    return (
        <TouchableOpacity style={[styles.ButtonLogin, { backgroundColor: NewColor[themes].button.cancle }]} onPress={onPress}>
            <AppText style={[styles.textButton, { color: NewColor[themes].text.badge }]}>{title}</AppText>
        </TouchableOpacity>
    );
}
