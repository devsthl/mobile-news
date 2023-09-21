/** @format */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import AppText from '../AppText';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

function Bagde({ count = 0, style }: any) {
	if (!count || count === 0) {
		return null;
	}
	const themes = useThemeColors().themes || 'default';

	return (
		<View style={[styles.badge, { backgroundColor: NewColor[themes].background.badge }, style]}>
			<AppText style={[styles.badgeText, { color: NewColor[themes].text.header }]}>{count}</AppText>
		</View>
	);
}

export default Bagde;
