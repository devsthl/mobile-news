/** @format */

import React from 'react';
import { View, StyleSheet, Linking, Platform } from 'react-native';
import { Colors, Metrics, fontSize } from '../../Themes';
import AppText from '../../Components/AppText';
import { ButtonPrimary } from '../../Components/Button';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

function BanAction() {
	const handleNavigateToAppStore = () => {
		let url =
			'itms-apps://itunes.apple.com/us/app/apple-store/id1485982149';

		if (Platform.OS === 'android') {
			url = 'market://details?id=com.histaff';
		}

		Linking.openURL(url);
	};
	const themes = useThemeColors().themes || 'default';

	return (
		<View style={styles.container}>
			<View style={[styles.alert, { backgroundColor: NewColor[themes].text.header }]}>
				<AppText numberOfLines={2} style={styles.text}>
					{`Histaff có bản cập nhật mới`}
				</AppText>
				<AppText numberOfLines={3} style={styles.text}>
					{`Mời bạn tải bản cập nhật mới nhất`}
				</AppText>
				<ButtonPrimary
					onPress={handleNavigateToAppStore}
					title={`Mở trên cửa hàng`}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'red',
		zIndex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	alert: {
		width: Metrics.screenWidth * 0.75,
		marginLeft: 16,
		marginRight: 16,
		borderRadius: 7,
		padding: 16,
		alignItems: 'center',
	},
	text: {
		fontSize: fontSize.large,
		textAlign: 'center',
	},
	button: {
		marginTop: 30,
	},
});

export default BanAction;
