import { View, TouchableOpacity, FlatList, } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import styles from './style'
import Styles from '../../Components/Styles/Styles'
import {
    SvgHistory,
    SvgOT,
    SvgLateEarly,
    SvgOff,
    SVGBack,
    SVGcontinue
} from '../../Assets/SVG'
import AppText from '../../Components/AppText'
import NewColor from '../../Themes/NewColor'
import useThemeColors from '../../Hooks/useThemeColors'


const width = Styles.constants.widthScreen;

interface Props {
    navigation: any
}
interface typeFlat {
    id: number;
    name: string;
    icon: any;
}
const RegisterScreen = (props: Props) => {
    const { navigation } = props;
    const data = [
        {
            id: 0,
            name: 'Đăng ký vắng/giải trình',
            icon: SvgOff
        },
        {
            id: 1,
            name: 'Đăng ký đi muộn về sớm',
            icon: SvgLateEarly
        },
        {
            id: 2,
            name: 'Đăng ký OT',
            icon: SvgOT
        },
        {
            id: 3,
            name: 'Lịch sử đăng ký',
            icon: SvgHistory
        },
    ]
    const _onNavigation = (index: number) => {
        switch (index) {
            case 0:
                navigation.navigate('RegisterOff')
                break;
            case 1:
                navigation.navigate('RegisterLateInEarlyOut');
                break;
            case 2:
                navigation.navigate('RegisterOT');
                break;
            case 3:
                navigation.navigate('RegisterHistory');
                break;
        }
    }
    const _renderItem = ({ item, index }: { item: typeFlat; index: number }) => {
        return (
            <TouchableOpacity
                onPress={() => _onNavigation(index)}
                style={[styles.wrapFlat, { borderColor: NewColor[themes].border, backgroundColor: NewColor[themes].background.primary }]}>
                <View style={styles.wrapTextFlat}>
                    <View style={styles.wrapViewName}>
                        <View style={{
                            width: width * 0.05,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: width * 0.03,
                        }}>
                            <item.icon />
                        </View>
                        <View style={styles.wrapTextMane}>
                            <AppText style={styles.apptext}>{item.name}</AppText>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => _onNavigation(index)}
                        style={styles.warpButtonNext}
                    >
                        <SVGcontinue color='black' />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                title={'Đăng ký'}
                iconLeft={<SVGBack color='white' />}
                onPressLeft={() => navigation.goBack()}
            />
            <View style={[styles.wrapViewFlat, { backgroundColor: NewColor[themes].background.screen }]}>
                <FlatList
                    data={data}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default RegisterScreen;