import { View } from 'react-native'
import React from 'react'
import Styles from '../Styles/Styles';
import styles from './style'
import AppText from '../AppText';

import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
interface Props {
    textLeft: string;
    textRight: string;
    styleRight?: any
}
const TextInformation = (props: Props) => {
    const { textLeft, textRight, styleRight } = props;
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={styles.container}>
            <AppText
                numberOfLines={4}
                style={[styles.textLeft, { color: NewColor[themes].text.normal }]}
            >{textLeft}</AppText>
            <AppText
                numberOfLines={4}
                style={[styles.textRight, { color: NewColor[themes].text.input }, styleRight]}>{textRight}</AppText>
        </View>
    )
}

export default TextInformation