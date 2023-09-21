import { Text, TextStyle, TextProps } from 'react-native'
import React from 'react'
import fontSize from '../../Themes/fontSize'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'

interface Props extends TextProps {
    numberOfLines?: number,
    style?: TextStyle | TextStyle[],
    children: any,
    require?: boolean,
}
export default function AppText(props: Props) {
    const themes = useThemeColors().themes || 'default';
    const { style = {} } = props
    return (
        <Text
            allowFontScaling={false}
            numberOfLines={props.numberOfLines || 7}
            style={[{
                color: NewColor[themes].text.normal,
                fontSize: fontSize.small,
            },
                style
            ]}
        >
            {props.children}
            {<Text
                allowFontScaling={false}
                style={{
                    color: NewColor[themes].text.require,
                }}
            >{props.require && `*`}</Text>}
        </Text>
    )
}