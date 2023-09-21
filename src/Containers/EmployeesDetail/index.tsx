import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextStyle,
    ViewStyle,
    Linking,
    SafeAreaView,
    Animated,
} from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'
import Header from '../../Components/Header'
import { SVGBack } from '../../Assets/SVG'
import { fontSize } from '../../Themes'
import moment from 'moment'
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


import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import { Pixel10, Pixel20, Pixel24, Pixel30, Pixel4, Pixel50, Pixel6, Pixel8 } from '../../Utils/Transform'


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
const EmployeesDetail = (props: Props) => {
    const { navigation } = props
    const id = navigation.state.params.id;
    const name = navigation.state.params.name
    const item = navigation.state.params.item
    const titleName = navigation.state.params.item.titleName

    const animatedValue = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef<ScrollView>(null)
    const lastOffsetY = useRef(0);
    const scrollDirection = useRef('');

    const avatarViewAnimation = getFeatureViewAnimation(animatedValue, -40)
    const qrViewAnimation = getFeatureViewAnimation(animatedValue, -90);

    const [open, setOpen] = useState<Boolean>()
    const featureAvatarLargeAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }
    const featureAvatarSmallAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
    }
    const featureNameAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        }),
    }
    const featureNameAnimationHiden = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 10],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }
    const themes = useThemeColors().themes || 'default';

    console.log("true,false", open);

    const renderAvatarRecord = (data: any) => {
        if (data?.avatar) {
            return (
                <View style={styles.lowerHeader}>
                    <Animated.View style={[styles.feature, avatarViewAnimation]}>
                        <Animated.Image
                            source={Images.depositc}
                            style={[styles.icon32, featureAvatarLargeAnimation]} />
                    </Animated.View>
                </View>
            )
        }
        const fullname = data?.name || ''
        let converName = fullname.split(' ').pop().substr(0, 1).toUpperCase();
        return (
            <View style={styles.lowerHeader}>
                <Animated.View style={[styles.feature, avatarViewAnimation]}>
                    <Animated.Image
                        source={Images.avatar}
                        style={[styles.icon32, featureAvatarLargeAnimation]} />
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
    const TextView = ({ label = '', content = '' }: TitleProps) => {
        return (
            <View style={styles.textview}>
                <Text style={[styles.text2, { color: NewColor[themes].primary }]}>{label}:</Text>
                <Text style={[styles.text3, { color: NewColor[themes].text.warning }]}>{content}</Text>
            </View>
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
        // Contacts.openContactForm(newPerson)
    }
    const handlePhoneCall = (phone: any) => {
        Linking.openURL(`tel:${phone}`)
    }
    const handleSentMessage = () => {

    }
    const handleSendMail = () => {

    }
    const handleZalo = () => {

    }
    const handleWorkSheet = () => {

    }
    return (
        <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                onPressLeft={() => navigation.goBack()}
                iconLeft={<SVGBack color='white' />}
                title='Chi tiết nhân viên' />
            <SafeAreaView style={styles.headerAnimation}>
                <View style={styles.upperHeader}>
                    <Animated.View style={[styles.feature2, avatarViewAnimation]}>
                        <Animated.Image
                            source={Images.avatar}
                            style={[styles.featureIcon, featureAvatarSmallAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                            {name} - {titleName}
                        </Animated.Text>
                    </Animated.View>
                </View>
            </SafeAreaView>
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
                    style={styles.bodyContainer}
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
                        padding: Pixel10,
                    }}>

                        <Item
                            styleText={{
                                fontSize: fontSize.large,
                                fontWeight: 'bold',
                                color: NewColor[themes].text.icon
                            }}
                            style={{ marginVertical: Pixel4 }}
                            label={name.toUpperCase()}
                            icon={<SvgCard color={NewColor[themes].icon.primary} />} />


                        <Item
                            label={titleName}
                            style={{ marginVertical: Pixel4 }}
                        />
                        <Item
                            icon={<SvgPhone color={NewColor[themes].primary} />}
                            label={'0969958863'} />
                        <Item
                            icon={<SvgMail color={NewColor[themes].primary} />}
                            label={'tinhvan@gmail.com'} />
                        <Item
                            icon={<SvgBirthDay color={NewColor[themes].primary} />}
                            label={'6/8/2007'} />
                        <Item
                            icon={<SvgManager color={NewColor[themes].primary} />}
                            label={'Đặng Xuân Hồng'}
                        />
                    </View>
                    <View style={{
                        marginHorizontal: Pixel30,
                        marginBottom: Pixel20,
                        backgroundColor: NewColor[themes].background.primary,
                        borderRadius: Pixel30,
                        padding: Pixel10,
                    }}>
                        <TextView label={'Thu nhập'} content={'30.000.000đ'} />
                        <TextView label={'Ngày nghỉ'} content={'12/1/2023'} />
                        <TextView label={'Làm thêm(h)'} content={'8h'} />
                        <TextView label={'Đi muộn về sớm'} content={'3'} />
                        <TextView label={'% Công việc'} content={'30%'} />
                        <TextView label={'Kết quả đánhh giá'} content={'Tốt'} />
                        <TextView label={'Năng lực'} content={'Giỏi'} />
                        <TextView label={'Lộ trình'} content={'Leader'} />
                        <TextView label={'Thành tích'} content={'Giỏi'} />
                        <TextView label={'Xếp hạng'} content={'Bậc 1'} />
                        <TextView label={'Điểm đạt được'} content={'90'} />
                        <TextView label={'Tiền thưởng'} content={'20.000.000đ'} />
                        <TextView label={'Năm công tác'} content={'10'} />
                        <TextView label={'Mức độ hài lòng'} content={'10'} />
                        <TextView label={'Khả năng gắn bó'} content={'10'} />
                    </View>
                    <ScrollView horizontal centerContent style={{ flexDirection: 'row' }}>
                        <Action source={<SvgPlus />} onPress={() => handleAddContact(item)} />
                        <Action source={<SvgCall />} onPress={() => handlePhoneCall(item.phone)} />
                        <Action source={<SvgMess />} onPress={() => handleSentMessage()} />
                        <Action source={<SvgSendMail />} onPress={() => handleSendMail()} />
                        <Action source={<SvgZalo />} onPress={() => handleZalo()} />
                        <Action source={<SvgWorkSheet />} onPress={() => handleWorkSheet()} />
                    </ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}

export default EmployeesDetail