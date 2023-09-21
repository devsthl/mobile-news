import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react';
import { fontSize, Metrics } from '../../Themes';
import AppText from '../AppText';
import { Pixel10, Pixel20 } from '../../Utils/Transform';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor'

interface Props {
    onPress: () => void,
    title: string,
    isWrap?: boolean,
    isLoading?: boolean,
    marginTop?: number,
    style?: any,
    boleanText?: boolean,
}

const TextPress = (props: Props) => {
    const { onPress, title, isWrap, isLoading, marginTop, style, boleanText } = props;
    const themes = useThemeColors().themes || 'default';

    const press = () => {
        !isLoading && onPress()
    }
    return (
        <View
            style={[{
                flexDirection: 'row',
            }, style]}>
            <View style={[styles.full, { marginTop: marginTop }]}>
                {isWrap && <View style={{ flex: 1 }} />}
                <TouchableOpacity
                    onPress={press}
                    style={[styles.container,
                    {
                        borderColor: NewColor[themes].border,
                        backgroundColor: NewColor[themes].button.normal,
                    },
                    !isWrap && { flex: 1 },
                    isLoading && { backgroundColor: NewColor[themes].button.loading }, style]}
                >
                    <View style={styles.activityIndicator}>
                        {isLoading && <ActivityIndicator size={'small'} color={NewColor[themes].Indicator} />}
                    </View>
                    <AppText style={boleanText ? [styles.textTrue, { color: NewColor[themes].text.input }] : [styles.text, { color: NewColor[themes].text.title }]}>{title}</AppText>
                    <View style={styles.activityIndicator} />
                </TouchableOpacity>
                {isWrap && <View style={{ flex: 1 }} />}
            </View>
        </View >
    )
}

export default TextPress

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Pixel10,
        borderRadius: Pixel10,
        flexDirection: 'row',
        marginHorizontal: Pixel20,
        borderWidth: 0.5,
    },
    text: {
        fontSize: fontSize.small,
        fontWeight: '500',
    },
    textTrue: {
        fontSize: fontSize.small,
        fontWeight: '500',
    },
    full: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: Metrics.screenHeight * 0.06,

    },
    activityIndicator: {
        width: Pixel20,
        height: Pixel20,
        marginHorizontal: Pixel10,
    }
})