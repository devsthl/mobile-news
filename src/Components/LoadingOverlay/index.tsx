/** @format */

import React, { Component } from 'react';
import IconSpinner from 'react-native-spinkit';
import { StyleSheet, View, Modal } from 'react-native';
import { Colors } from '../../Themes';
import AppText from '../AppText';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 100,
	},
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
	},
	textContent: {
		top: 80,
		height: 50,
		fontSize: 20,
		fontWeight: 'bold',
	},
});

// const SIZES = ['small', 'normal', 'large'];

interface Props {
	visible: boolean,
	textContent: string,
	position: string,
}

export default class Spinner extends Component {

	constructor(props: Props) {
		super(props);
		const { visible, textContent, position }: any = this.props
		this.state = {
			visible: visible,
			textContent: textContent,
			position: position,
		};
	}

	static getDerivedStateFromProps(nextProps: any) {
		return {
			visible: nextProps.visible,
			textContent: nextProps.textContent,
			position: nextProps.position,
		};
	}

	close() {
		this.setState({ visible: false });
	}

	_handleOnRequestClose() {
		const { cancelable }: any = this.props;
		if (cancelable) {
			this.close();
		}
	}

	_renderDefaultContent() {
		const { textStyle }: any = this.props;
		const { textContent, position }: any = this.state;
		return (
			// <View style={styles.background}>
			<View style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				justifyContent: position === 'TOP' ? 'flex-start' : (position === 'END' ? 'flex-end' : 'center'),
				// justifyContent: '',
				alignItems: 'center',
				marginTop: position === 'TOP' ? '50%' : '0%',
				marginBottom: position === 'END' ? '50%' : '0%',
			}}>
				<View
					style={{
						padding: 25,
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<IconSpinner
						isVisible={true}
						size={100}
						style={{ marginRight: 0, marginBottom: 13 }}
						type='ThreeBounce'
					/>
				</View>
				<View style={styles.textContainer}>
					<AppText style={{ ...styles.textContent, ...textStyle }}>
						{textContent}
					</AppText>
				</View>
			</View>
		);
	}

	_renderSpinner() {
		const { visible }: any = this.state;
		const { children, isNative, overlayColor }: any = this.props;

		if (!visible) {
			return <View
			// display='none' // có thể hiện cái này ra
			/>;
		}

		const spinner = (
			<View
				key={`spinner_${Date.now()}`}
				style={[styles.container, { backgroundColor: overlayColor }]}
			>
				{children || this._renderDefaultContent()}
			</View>
		);

		const nativeModal = (
			<Modal
				onRequestClose={() => this._handleOnRequestClose()}
				supportedOrientations={['landscape', 'portrait']}
				transparent={true}
				visible={visible}
			>
				{spinner}
			</Modal>
		);
		const jsModal = visible ? spinner : null;

		return isNative ? nativeModal : jsModal;
	}

	render() {
		return this._renderSpinner();
	}
}
