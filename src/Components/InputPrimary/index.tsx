/** @format */

import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

interface Props {
	value: string,
	onChangeText: Function,
	placeholder?: string,
	autoCapitalize?: string,
	keyboardType?: string,
	editable?: boolean,
	secureTextEntry?: boolean,
	style?: any,
}

function InputPrimary({
	value,
	onChangeText,
	placeholder,
	autoCapitalize,
	keyboardType,
	editable,
	secureTextEntry,
	style,
}: any) {
	const themes = useThemeColors().themes || 'default';

	return (
		<TextInput
			allowFontScaling={false}
			autoCapitalize={autoCapitalize}
			editable={editable}
			keyboardType={keyboardType}
			onChangeText={onChangeText}
			placeholder={placeholder}
			placeholderTextColor={NewColor[themes].text.placeholder}
			secureTextEntry={secureTextEntry}
			style={[styles.input, { borderColor: NewColor[themes].border }, style]}
			value={value}
		/>
	);
}

InputPrimary.defaultProps = {
	value: '',
	onChangeText: () => { },
	placeholder: '',
	style: {},
	autoCapitalize: 'none',
	keyboardType: 'default',
	editable: true,
	secureTextEntry: false,
	allowFontScaling: false,
};

export default InputPrimary;
