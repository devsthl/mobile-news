import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Header from '../Header'
import { Colors } from '../../Themes'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import { Pixel10 } from '../../Utils/Transform'

interface Props {
    onPressLeft?: () => void,
    onPressCenter?: () => void,
    onPressRight?: () => void,
    iconLeft?: JSX.Element,
    iconRight?: JSX.Element,
    title?: string,
    hideKeyboard?: () => void,
    children: JSX.Element,
    hideHeader?: boolean,
    paddingHorizontal?: boolean,
    paddingVertical?: boolean,
    backgroundColor?: string,
}

const ScreenHeader = (props: Props) => {
    const {
        onPressLeft,
        onPressCenter,
        onPressRight,
        iconLeft,
        iconRight,
        title,
        children,
        hideHeader,
        paddingHorizontal,
        paddingVertical,
        backgroundColor,
    } = props;
    const themes = useThemeColors().themes || 'default';
    return (
        <View
            style={{ flex: 1, backgroundColor: backgroundColor || NewColor[themes].primary }}
        >
            {hideHeader ? <SafeAreaView
                style={{ flex: 1, backgroundColor: NewColor[themes].primary }}
            >
                {/* <StatusBar backgroundColor={NewColor[themes].primary} /> */}
                <View style={{ flex: 1, backgroundColor: NewColor[themes].background.screen }}>
                    {children}
                </View>
            </SafeAreaView> :
                <View
                    style={{ flex: 1, backgroundColor: backgroundColor || NewColor[themes].primary }}
                >
                    <Header
                        title={title}
                        onPressCenter={onPressCenter}
                        onPressLeft={onPressLeft}
                        onPressRight={onPressRight}
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                    />
                    <View
                        style={{ flex: 1, paddingHorizontal: paddingHorizontal ? Pixel10 : 0, paddingVertical: paddingVertical ? Pixel10 : 0, backgroundColor: NewColor[themes].background.screen }}
                    >
                        {children}
                    </View>
                </View>
            }
        </View>
    )
}

export default ScreenHeader

const styles = StyleSheet.create({})