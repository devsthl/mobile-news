/** @format */

import React from 'react';
import { TextInput, View } from 'react-native';
import { fontSize } from '../../Themes';
import styles from './styles';
import AppText from '../AppText';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

interface Props {
    value: string,
    placeholder?: string,
    style?: any,
    title: string
    require?: boolean,
}

function InputView({
    value,
    placeholder,
    style,
    title,
    require,
}: Props) {
    const themes = useThemeColors().themes || 'default';

    return (
        <View>
            <AppText require={require} style={{ fontSize: fontSize.small, marginTop: 10 }} >{title}</AppText>
            <TextInput
                allowFontScaling={false}
                editable={false}
                placeholder={placeholder || title}
                placeholderTextColor={NewColor[themes].text.placeholder}
                style={[styles.input, { borderColor: NewColor[themes].border }, style]}
                value={value}
            />
        </View>
    );
}
export default InputView;
