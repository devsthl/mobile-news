import { View, Text } from 'react-native'
import React from 'react'
import '../../I18n';
import ScreenHeader from '../../Components/ScreenHeader'
import AppText from '../../Components/AppText'
import { ButtonNormal } from '../../Components/Button'
import { useTranslation } from 'react-i18next';

interface Props {
    navigation: any,
}

const ChangeLanguage = ({ navigation }: Props) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value)
            .then(() => console.log('success'))
            .catch(err => console.log(err));
    };
    return (
        <ScreenHeader
            hideHeader
        >
            <View>
                <AppText>ChangeLanguage</AppText>
                <AppText>{t('hello')}</AppText>
                <ButtonNormal
                    title='Tiếng Việt'
                    onPress={() => {
                        changeLanguage('vi')
                    }}
                />
                <ButtonNormal
                    marginTop={10}
                    title='Tiếng Anh'
                    onPress={() => {
                        changeLanguage('en')
                    }}
                />
            </View>
        </ScreenHeader>
    )
}

export default ChangeLanguage;