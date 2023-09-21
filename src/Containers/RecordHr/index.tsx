import { View } from 'react-native'
import React from 'react'
import ScreenHeader from '../../Components/ScreenHeader'
import { ButtonPrimary } from '../../Components/Button';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';

interface Props {
    navigation: any,
}

const RecordHr = ({ navigation }: Props) => {
    const themes = useThemeColors().themes || 'default';

    return (
        <ScreenHeader
            hideHeader
            backgroundColor={NewColor[themes].background.screen}
        >
            <View>
                <ButtonPrimary
                    marginTop={8}
                    title={'RecordHr'}
                    onPress={() => {
                        navigation.navigate('RecordHrDetail')
                    }}
                />
                <ButtonPrimary
                    marginTop={8}
                    title={'Cài đặt'}
                    onPress={() => {
                        navigation.navigate('Settings')
                    }}
                />
            </View>
        </ScreenHeader>
    )
}

export default RecordHr;