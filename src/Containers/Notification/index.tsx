import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { SVGBack } from '../../Assets/SVG'
import color from '../../Themes/color'
import Styles from '../../Components/Styles/Styles'
import styles from './styles'
import LoadingScreen from '../../Components/LoadingScreen'
import Pdf from 'react-native-pdf'
import { Pixel10, Pixel16, Pixel18, Pixel8 } from '../../Utils/Transform'
import NewColor from '../../Themes/NewColor'
import useThemeColors from '../../Hooks/useThemeColors'
import AppText from '../../Components/AppText'
interface Props {
    navigation: any
}
interface Typelist {
    id: number,
    title: String,
    type: number,
    status: boolean | number,
    img: any,
    fullName: String,
    date: String
}
const Notification = (props: Props) => {
    const { navigation } = props;

    const dataList: Typelist[] = [
        {
            id: 1,
            type: 1,
            date: '1/4/2023',
            fullName: 'David Joel',
            status: 1,
            title: 'Thông báo tiệc tổ chức 8/3 cho các chị em',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6jGs_5C6Wpjim4K2KKhU-w-ZrN80s3Pm1w&usqp=CAU'
        },
        {
            id: 2,
            type: 0,
            date: '1/4/2023',
            fullName: 'David Joel',
            status: 1,
            title: 'Thông báo chung việc tuyển thêm nhân sự phòng công nghệ',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6jGs_5C6Wpjim4K2KKhU-w-ZrN80s3Pm1w&usqp=CAU'
        },
        {
            id: 3,
            type: 1,
            date: '1/4/2023',
            fullName: 'David Joel',
            status: 2,
            title: 'Thông báo tiệc tổ chức 8/3 cho các chị em',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6jGs_5C6Wpjim4K2KKhU-w-ZrN80s3Pm1w&usqp=CAU'
        },
        {
            id: 4,
            type: 1,
            date: '1/4/2023',
            fullName: 'David Joel',
            status: 3,
            title: 'Thông báo tiệc tổ chức 8/3 cho các chị em',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6jGs_5C6Wpjim4K2KKhU-w-ZrN80s3Pm1w&usqp=CAU'
        },
    ]
    const themes = useThemeColors().themes || 'default';

    const _renderItem = (item: any) => {
        var picture: any
        var fullName = ''
        let textTitle = ''
        const notify = {
            Notify21: "đã đăng ký đi muộn về sớm",
            Notify22: "Đăng ký đi muộn về sớm đã phê duyệt",
            Notify23: "Đăng ký đi muộn về sớm bị từ chối",

            Notify31: "đã đăng ký làm thêm giờ",
            Notify32: "Đăng ký làm thêm giờ đã được phê duyệt",
            Notify33: "Đăng ký làm thêm giờ bị từ chối",

            Notify11: "đã đăng ký vắng/giải trình",
            Notify12: "Đăng ký vắng/giải trình đã được phê duyệt",
            Notify13: "Đăng ký vắng/giải trình bị từ chối",
        }
        if (item.type == 0) {
            picture = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuI-9U2TqQCNxi8x5tWoS8xxizecZxUFhQA&usqp=CAU' }
            textTitle = item.title
            // fullName = item.fullName + ' '
        }
        if (item.type == 1) {
            picture = { uri: item.img }
            fullName = item.fullName + ' '
            if (item.status == 1) {
                textTitle = notify.Notify11
            }
            if (item.status == 2) {
                textTitle = notify.Notify12
            }
            if (item.status === 3) {
                textTitle = notify.Notify13
            }
        }
        if (item.status == 2) {
            picture = { uri: item.img }
            fullName = item.fullName + ' '
            if (item.status == 1) {
                textTitle = notify.Notify21
            }
            if (item.status == 2) {
                textTitle = notify.Notify22
            }
            if (item.status === 3) {
                textTitle = notify.Notify23
            }
        }
        if (item.status == 3) {
            picture = { uri: item.img }
            fullName = item.fullName + ' '
            if (item.status == 1) {
                textTitle = notify.Notify31
            }
            if (item.status == 2) {
                textTitle = notify.Notify32
            }
            if (item.status === 3) {
                textTitle = notify.Notify33
            }
        }
        const _redirect = (typeX: number, statusX: number) => {
            if (typeX == 0) {
                navigation.navigate('Home')
            }
            if (typeX == 1) {
                if (statusX == 1) {
                    navigation.navigate('Home')
                } else {
                    navigation.navigate('Home')
                }
            }
            if (typeX == 0) {
                if (statusX == 1) {
                    navigation.navigate('Home')
                } else {
                    navigation.navigate('Home')
                }
            }
            if (typeX == 0) {
                if (statusX == 1) {
                    navigation.navigate('Home')
                } else {
                    navigation.navigate('Home')
                }
            }
        }
        console.log("picture", picture);

        return (
            <TouchableOpacity
                onPress={() => {
                    // _redirect(item.type, item.status)
                }}
                style={[
                    styles.styleItem,
                    {
                        backgroundColor: NewColor[themes].background.primary,
                        borderRadius: Pixel18,
                        marginHorizontal: Pixel16,
                        paddingHorizontal: Pixel10,
                        marginTop: Pixel8,
                        borderWidth: 1,
                        borderColor: NewColor[themes].border,
                        alignItems: 'center',
                    }
                ]}>
                <View style={styles.styleImage}>
                    <Image
                        style={styles.iconNotification}
                        source={picture} />
                </View>
                <View style={styles.ViewTextLeft}>
                    <View style={styles.styleBodyText}>
                        <View style={styles.styleTitle}>
                            <AppText style={[styles.styleText, { color: NewColor[themes].text.normal }]}><Text allowFontScaling={false} style={{ fontWeight: 'bold' }}>{fullName}</Text>{textTitle}</AppText>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AppText style={[styles.styleTextTime, { color: NewColor[themes].text.normal }]}>{item.date}</AppText>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const handleback = () => {
        navigation.navigate('Home')
    }
    const pdf = { uri: 'https://chathub.histaff.online/FileManager/Other/1.pdf', cache: true }
    return (
        <View
            style={[Styles.container, { backgroundColor: NewColor[themes].primary }]}
        >
            <Header title='Thông báo' iconLeft={<SVGBack />} onPressLeft={handleback} />
            <View style={[styles.ViewBody, { backgroundColor: NewColor[themes].background.screen }]}>
                <FlatList
                    data={dataList}
                    renderItem={({ item }) => _renderItem(item)} />
            </View>

            {!dataList && <LoadingScreen />}
        </View>
    )
}

export default Notification