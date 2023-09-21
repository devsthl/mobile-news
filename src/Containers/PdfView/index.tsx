import { View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import Pdf from 'react-native-pdf'
import { SVGBack, SVGcontinue } from '../../Assets/SVG'
import styles from './styles'
import color from '../../Themes/color'
import { fontSize as fontsize } from '../../Themes'
import moment from 'moment'
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
interface Props {
    navigation: any
}
interface typeList {
    id: number,
    uri: any,
    des: String
}
const PdfView = (props: Props) => {
    const { navigation } = props
    const item = navigation.state.params
    const themes = useThemeColors().themes || 'default';

    const fakeData: typeList[] = [
        {
            id: 1,
            uri: 'https://chathub.histaff.online/FileManager/Other/1.pdf',
            des: 'Hướng dẫn sử dụng Core* App'
        },
        {
            id: 2,
            uri: 'https://chathub.histaff.online/FileManager/Other/1.pdf',
            des: 'Hướng dẫn sử dụng Core* App'
        },
        {
            id: 3,
            uri: 'https://chathub.histaff.online/FileManager/Other/1.pdf',
            des: 'Hướng dẫn sử dụng Core* App'
        }
    ]
    const _renderItem = (item: any) => {
        return (
            <TouchableOpacity style={[styles.styleItem, {
                backgroundColor: NewColor[themes].button.normal,
                borderColor: NewColor[themes].border,
            }]}
                onPress={() => navigation.navigate('PdfDetail', {
                    item: item
                })}>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{ fontSize: fontsize.medium, fontWeight: 'bold', color: 'gray', flex: 1 }} allowFontScaling={false}>{item.des}</Text>
                    <Text>Xem thêm</Text>
                </View>
                <SVGcontinue />
            </TouchableOpacity>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                title='Danh mục tài liệu'
                iconLeft={<SVGBack />}
                onPressLeft={() => navigation.goBack()} />
            <FlatList
                style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}
                data={fakeData}
                renderItem={({ item }) => _renderItem(item)} />
        </View>
    )
}

export default PdfView