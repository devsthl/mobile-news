/** @format */

import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import AppText from '../AppText';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';
import { ApplicationStyles, Images } from '../../Themes';
import { stackNavigation } from '../../Navigation/nameNavigation';

function DrawerRow({ text = 'Text', onPress = () => { } }) {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={styles.containerDrawerRow}
		>
			<View style={styles.drawerRow}>
				<Image
					source={Images.iconReport}
					style={styles.imageDrawerRow}
				></Image>
				<AppText style={styles.textDrawerRow}>{text}</AppText>
			</View>
		</TouchableOpacity>
	);
}

function DrawerComponent({ navigation }: any) {
	return (
		<SafeAreaView
			forceInset={{ top: 'always' }}
			style={[ApplicationStyles.screen.mainContainer]}
		>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigation.closeDrawer()}>
					<Image
						source={Images.crossClose}
						style={styles.closeIcon}
					></Image>
				</TouchableOpacity>
				<View style={styles.content}>
					<DrawerRow
						text={'Báo cáo'}
						onPress={() =>
							navigation.navigate(stackNavigation.REPORT)
						}
					></DrawerRow>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default DrawerComponent;
