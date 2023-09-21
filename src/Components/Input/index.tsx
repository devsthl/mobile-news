import { View, TextInput } from 'react-native'
import React from 'react'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'

interface Props {
    placeholder: string,
    value: string,
    onChangeText: Function,
    style?: any,
    placeholderTextColor?: any
    autoCapitalize?: boolean,
    secureTextEntry?: boolean,
}

export default function Input(props: Props) {
    const { autoCapitalize, placeholder, value, onChangeText, style, placeholderTextColor, secureTextEntry } = props
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={{ height: 40, paddingHorizontal: 16, borderRadius: 8, borderWidth: 1, borderColor: NewColor[themes].border, marginTop: 10, marginHorizontal: 20, justifyContent: 'center' }}>
            <TextInput
                allowFontScaling={false}
                autoCapitalize={autoCapitalize ? 'characters' : 'none'}
                placeholder={placeholder}
                value={value}
                onChangeText={(text) => onChangeText(text)}
                style={style}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}