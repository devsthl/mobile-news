/** @format */

import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
// import styles from './styles';
import { Colors } from '../../Themes';

interface Props {
	source?: any,
	style?: any,
	placeholderColor?: any,
}

function ImageLazy(props: Props) {
	const thumbnailAnimated = new Animated.Value(0);

	const imageAnimated = new Animated.Value(0);

	const handleThumbnailLoad = () => {
		Animated.timing(thumbnailAnimated, {
			toValue: 1,
			useNativeDriver: true
		}).start();
	};

	const onImageLoad = () => {
		Animated.timing(imageAnimated, {
			toValue: 1,
			useNativeDriver: true
		}).start();
	};

	const {
		source,
		style,
		placeholderColor,
		// ...props 
	} = props;
	return (
		<View
			style={[
				style,
				{ backgroundColor: placeholderColor || Colors.translucentBlack },
				styles.container,
			]}
		>
			<Animated.Image
				blurRadius={1}
				onLoad={handleThumbnailLoad}
				source={source}
				style={[
					styles.thumbnai,
					style,
					{ opacity: thumbnailAnimated },
				]}
			/>
			<Animated.Image
				onLoad={onImageLoad}
				source={source}
				style={[
					styles.imageOverlay,
					{ opacity: imageAnimated },
					style,
				]}
			/>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	thumbnai: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
	imageOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
});


export default ImageLazy;
