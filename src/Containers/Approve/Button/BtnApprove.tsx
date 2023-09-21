import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../../../Components/AppText";
import styles from "./style";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'

interface BtnApproveProps {
    title: string,
    onPress?: () => void;
}
export default function BtnApprove(props: BtnApproveProps) {
    const { title, onPress } = props
    const themes = useThemeColors().themes || 'default';

    return (
        <TouchableOpacity style={[styles.ButtonLogin, { backgroundColor: NewColor[themes].button.approve }]} onPress={onPress}>
            <AppText style={[styles.textButton, { color: NewColor[themes].text.buttonPrimary }]}>
                {title}
            </AppText>
        </TouchableOpacity>
    );
}
