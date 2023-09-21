import { View, Text } from 'react-native'
import React from 'react'
import { fontSize } from '../../Themes'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import { Pixel6 } from '../../Utils/Transform'

interface PropsNoteRegister {
    textLeft: string,
    textRight: string,
    style?: any
}


const NoteRegister = (props: PropsNoteRegister) => {
    const { textLeft, textRight, style } = props;
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={[{
            flexDirection: 'row',
            marginTop: Pixel6,
        }, style]
        }>
            <Text
                allowFontScaling={false}
                numberOfLines={2}
                style={[{
                    fontSize: fontSize.small,
                    color: NewColor[themes].text.normal,
                    flex: 1
                }]}>{textLeft}</Text>
            <Text
                allowFontScaling={false}
                style={[{
                    fontSize: fontSize.large,
                    color: NewColor[themes].text.buttonNormal,
                    textAlign: 'right',
                    width: '25%',
                    fontWeight: '700'
                }]}>{textRight.toLowerCase()}</Text>
        </View>
    )
}

export default NoteRegister
