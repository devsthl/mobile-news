import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextStyle,
    ViewStyle,
    Linking,
    SafeAreaView,
    Animated,
    StatusBar
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style'
import Header from '../../Components/Header'
import { SVGBack } from '../../Assets/SVG'
import color from '../../Themes/color'
import { fontSize } from '../../Themes'
import moment from 'moment'
import Contacts from 'react-native-contacts'
import {
    SvgCard,
    SvgPhone,
    SvgMail,
    SvgBirthDay,
    SvgManager,
    SvgPlus,
    SvgCall,
    SvgMess,
    SvgSendMail,
    SvgZalo,
    SvgWorkSheet
} from '../../Assets/SVG'

// ------------------------- ANIMATIOM
import { getFeatureViewAnimation } from './utils'
import Images from '../../Assets/momo'
import { Pixel10, Pixel20, Pixel24, Pixel30, Pixel4, Pixel50, Pixel6, Pixel8 } from '../../Utils/Transform'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'


const UPPER_HEADER_HEIGHT = 32;
const UPPER_HEADER_PADDING_TOP = 4;
const LOWER_HEADER_HEIGHT = 96;

interface Props {
    navigation: any
}
interface ItemProps {
    label?: string;
    icon?: any;
    styleText?: TextStyle;
    style?: ViewStyle
}
interface ActionProps {
    onPress: () => void | undefined;
    source: any;
    backgroundColor?: string
}
interface TitleProps {
    label: string;
    content: string
}
const PhonebookDetail = (props: Props) => {
    const { navigation } = props
    const id = navigation.state.params.id;
    const name = navigation.state.params.name
    const item = navigation.state.params.item
    const titleName = navigation.state.params.item.titleName

    const animatedValue = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef<ScrollView>(null)
    const lastOffsetY = useRef(0);
    const scrollDirection = useRef('');

    const renderAvatarRecord = (data: any) => {
        if (data?.avatar) {
            return (
                <View style={styles.lowerHeader}>
                    <Animated.View style={[styles.feature,]}>
                        <Animated.Image
                            source={Images.depositc}
                            style={[styles.icon32,]} />
                    </Animated.View>
                </View>
            )
        }
        const fullname = data?.name || ''
        let converName = fullname.split(' ').pop().substr(0, 1).toUpperCase();
        return (
            <View style={styles.lowerHeader}>
                <Animated.View style={[styles.feature,]}>
                    <Animated.Image
                        source={Images.avatar}
                        style={[styles.icon32,]} />
                </Animated.View>
            </View>
        );
    };
    const Item = ({ label = '', icon, styleText = {}, style = {} }: ItemProps) => {
        return (
            <View style={[{
                flexDirection: 'row',
                paddingHorizontal: Pixel6,
                alignItems: 'center',
                marginVertical: Pixel8
            }, style]}>
                <View style={{
                    width: Pixel20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {icon}
                </View>
                <View>
                    <Text
                        allowFontScaling={false}
                        style={[{
                            flex: 1,
                            fontSize: fontSize.small,
                            marginRight: Pixel10,
                            marginLeft: Pixel24
                        }, styleText]}
                    >{label || '-'}</Text>
                </View>
            </View>
        )
    }
    const Action = ({ onPress, source, backgroundColor = '#fff' }: ActionProps) => {
        return (
            <TouchableOpacity
                style={{
                    width: Pixel50,
                    height: Pixel50,
                    borderRadius: Pixel50 / 2,
                    marginHorizontal: Pixel6,
                    backgroundColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={onPress}>
                {source}
            </TouchableOpacity>
        )
    }
    const handleAddContact = (data: any) => {
        const birthday = moment(data.birthday, 'DD-MM-YYYY').toDate();
        let number = data.phone ? data.phone : '';
        let newPerson: any = {
            givenName: data.fullName,
            displayName: data.fullName,
            company: data.org2Name,
            jobTitle: data.titleName,
            birthday: { 'month': birthday.getMonth(), 'day': birthday.getDate(), 'Year': birthday.getFullYear() },
            emailAddresses: [],
            phoneNumbers: [{
                label: "mobile",
                number: number,
            }],
        }
        if (data.email) {
            newPerson.emailAddresses = [{
                label: 'work',
                email: data.email
            }]
        }
        Contacts.openContactForm(newPerson)
    }
    const handlePhoneCall = (phone: any) => {
        Linking.openURL(`tel:${phone}`)
    }
    const handleSentMessage = (mess: String) => {
        Linking.openURL(`sms:${mess}`)
    }
    const handleSendMail = (mail: String) => {
        Linking.openURL(`mailto:${mail}`)
    }
    const handleZalo = (phone: String | number) => {
        const zalo = `https://zalo.me/${phone}`
        Linking.openURL(zalo)
    }
    const handleWorkSheet = () => {

    }
    const themes = useThemeColors().themes || 'default';

    return (
        <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                onPressLeft={() => navigation.goBack()}
                iconLeft={<SVGBack color='white' />}
                title='Chi tiết nhân viên' />
            <View style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    ref={scrollViewRef}
                    onScroll={e => {
                        const offsetY = e.nativeEvent.contentOffset.y;
                        scrollDirection.current =
                            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
                        lastOffsetY.current = offsetY;
                        animatedValue.setValue(offsetY);
                    }}
                    onScrollEndDrag={() => {
                        scrollViewRef.current?.scrollTo({
                            y: scrollDirection.current === 'down' ? 100 : 0,
                            animated: true,
                        });
                    }}
                    scrollEventThrottle={16}
                    style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}
                >
                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: Pixel20
                    }}>
                        {renderAvatarRecord(item)}
                    </View>

                    <View style={{
                        marginHorizontal: Pixel30,
                        marginVertical: Pixel20,
                        backgroundColor: NewColor[themes].background.primary,
                        borderRadius: Pixel30,
                        padding: Pixel10
                    }}>
                        <Item
                            styleText={{
                                fontSize: fontSize.large,
                                fontWeight: 'bold',
                                color: NewColor[themes].primary
                            }}
                            style={{ marginVertical: Pixel4 }}
                            label={name.toUpperCase()}
                            icon={<SvgCard color={NewColor[themes].primary} />} />
                        <Item
                            label={titleName}
                            style={{ marginVertical: Pixel4 }}
                        />
                        <Item
                            icon={<SvgPhone />}
                            label={'0969958863'} />
                        <Item
                            icon={<SvgMail />}
                            label={'tinhvan@gmail.com'} />
                        <Item
                            icon={<SvgBirthDay />}
                            label={'6/8/2007'} />
                        <Item
                            icon={<SvgManager />}
                            label={'Đặng Xuân Hồng'}
                        />
                    </View>
                    <ScrollView horizontal centerContent style={{ flexDirection: 'row' }}>
                        <Action source={<SvgPlus />} onPress={() => handleAddContact(item)} />
                        <Action source={<SvgCall />} onPress={() => handlePhoneCall(item.phone)} />
                        <Action source={<SvgMess />} onPress={() => handleSentMessage(item.mess)} />
                        <Action source={<SvgSendMail />} onPress={() => handleSendMail(item.mail)} />
                        <Action source={<SvgZalo />} onPress={() => handleZalo(item.phone)} />
                        <Action source={<SvgWorkSheet />} onPress={() => handleWorkSheet()} />
                    </ScrollView>
                </ScrollView>
            </View>
        </View>
    )
}

export default PhonebookDetail