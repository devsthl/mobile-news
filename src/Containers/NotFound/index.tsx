/** @format */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../Components/AppText';

function NotFound() {
	return (
		<View style={styles.container}>
			<AppText numberOfLines={2} style={styles.text}>
				Màn hình chưa được cấu hình. Vui lòng liên hệ với Admin.
			</AppText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 16,
	},
	text: { textAlign: 'center' },
});

export default NotFound;
