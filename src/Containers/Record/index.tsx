import { View, Text } from 'react-native'
import React from 'react'
import ScreenHeader from '../../Components/ScreenHeader';
import AppText from '../../Components/AppText';
import { ButtonPrimary } from '../../Components/Button';

interface Props {
    navigation: any;
}

const Record = ({ navigation }: Props) => {
    return (
        <ScreenHeader
            hideHeader
        >
            <View>
                <AppText>Record</AppText>
                <ButtonPrimary
                    marginTop={8}
                    title={'RecordHr'}
                    onPress={() => {
                        navigation.navigate('RecordHr')
                    }}
                />
            </View>

        </ScreenHeader>
    )
}

export default Record;