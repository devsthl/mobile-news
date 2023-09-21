import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import AppText from '../AppText';
import { Metrics, fontSize } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor'
import { Pixel40 } from '../../Utils/Transform';

interface Props {
    onPressLeft?: () => void,
    onPressCenter?: () => void,
    onPressRight?: () => void,
    iconLeft?: JSX.Element,
    iconRight?: JSX.Element,
    title?: string,
}

const HEIGHT_CONTAINER = 40 * Metrics.ratioH

const Header = (props: Props) => {
    const { onPressLeft, onPressCenter, onPressRight, iconLeft, iconRight, title } = props;
    // const navigation = useNavigation()
    const themes = useThemeColors().themes || 'default';

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={NewColor[themes].primary} />
            <View
                style={[styles.container, { backgroundColor: NewColor[themes].primary }]}
            >
                <View style={styles.icon}>
                    {iconLeft && onPressLeft &&
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={iconLeft && onPressLeft}
                        >
                            {iconLeft}
                        </TouchableOpacity>}
                </View>
                <TouchableOpacity
                    onPress={onPressCenter}
                    style={styles.viewHeader}
                >
                    <AppText style={[styles.textHeader, { color: NewColor[themes].text.header }]} >{title}</AppText>
                </TouchableOpacity>
                <View style={styles.icon}>
                    {iconRight && onPressRight && <TouchableOpacity
                        style={styles.icon}
                        onPress={iconRight && onPressRight}
                    >
                        {iconRight}
                    </TouchableOpacity>}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: Pixel40,
        height: Pixel40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: fontSize.medium,
        fontWeight: 'bold',
    }
})