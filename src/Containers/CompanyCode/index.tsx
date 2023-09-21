import { View, Text, ToastAndroid, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import AppText from '../../Components/AppText'
import ScreenHeader from '../../Components/ScreenHeader'
import { SVGBack, SVGCancel } from '../../Assets/SVG'
import { Modalize } from 'react-native-modalize';
import { Colors } from '../../Themes'
import { ButtonPrimary } from '../../Components/Button'
import WebView from 'react-native-webview';
import Input from '../../Components/Input'
import SimpleToast from 'react-native-simple-toast'

interface Props {
    navigation: any
}

const CompanyCode = ({ navigation }: Props) => {
    const modalizeRef = useRef<Modalize>(null)
    const webViewRef = useRef<WebView>(null);
    const [companyCode, setCompanyCode] = useState('');

    const showToastAndroid = (str: string) => {
        SimpleToast.show(`Toast ${str}`, SimpleToast.SHORT);
    }

    const onOpen = () => {
        console.log(1)
    };

    const PressNext = (com: string) => {
        SimpleToast.show(`Đăng nhập mã công ty: ${com}`, SimpleToast.SHORT)
        navigation.navigate('Login')
    }

    return (
        <>
            <ScreenHeader
                title={'Nhập mã công ty'}
                // hideHeader
                onPressLeft={onOpen}
                onPressRight={() => showToastAndroid('Right')}
                onPressCenter={() => showToastAndroid('Center')}
                paddingVertical
                // paddingHorizontal
                iconLeft={<SVGBack />}
                iconRight={<SVGCancel />}
            >
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder='Mã công ty'
                        value={companyCode}
                        onChangeText={setCompanyCode}
                    />
                    <ButtonPrimary
                        marginTop={10}
                        title='123'
                        onPress={() => PressNext(companyCode)}
                    />

                </View>
            </ScreenHeader>
        </>
    )
}

export default CompanyCode;