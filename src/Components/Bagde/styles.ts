import { Pixel8 } from './../../Utils/Transform';
/** @format */

import { StyleSheet } from 'react-native';
import { Colors, fontSize } from '../../Themes';
import { Pixel30, Pixel4 } from '../../Utils/Transform';

const styles = StyleSheet.create({
	badge: {
		position: 'absolute',
		top: 0,
		left: Pixel30,
		paddingHorizontal: Pixel4,
		borderRadius: Pixel8,
		fontSize: fontSize.small,
	},
	badgeText: {
		fontSize: fontSize.small,
	},
});

export default styles;
