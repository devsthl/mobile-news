import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import ScreenHeader from '../../Components/ScreenHeader';
import SectionList from 'react-native-tabs-section-list';
import { Colors, fontSize, Images } from '../../Themes';
import { SVGBack } from '../../Assets/SVG';
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import FormatDate from '../../Utils/FormatDate';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';
import { Pixel10, Pixel16, Pixel18, Pixel20, Pixel6 } from '../../Utils/Transform';

export default function RecordHrDetail({ navigation }: any) {
    const { data } = useFetchData(api, 'EmployeeInfo', () => {
        return {}
    })

    console.log('data...', data)

    const SECTIONS = [
        {
            title: 'Thông tin cơ bản',
            data: [
                { title: 'Mã nhân viên', description: data.code || '', },
                { title: 'Họ tên nhân viên', description: data.fullname || '', },
                { title: 'Tên gọi khác', description: '', },
                { title: 'Mã chấm công', description: data.objectSalaryId || '', },
            ]
        },
        {
            title: 'Công tác tại đơn vị',
            data: [
                { title: 'Đơn vị', description: '', },
                { title: 'Đơn vị cấp 2', description: '', },
                { title: 'Phòng ban', description: data.orgName || '', },
                { title: 'Vị trí công việc', description: data.positionName || '', },
                { title: 'Chức danh', description: '', },
                { title: 'Nhóm chức danh', description: '', },
                { title: 'Ngày ký hợp đồng', description: '', },
                { title: 'Ngày tính phép năm', description: '', },
                { title: 'Ngày tính thâm niên', description: '', },
                { title: 'Ngày nghỉ việc, nghỉ hưu', description: '', },
            ]
        },
        {
            title: 'Sơ yếu lí lịch',
            data: [
                { title: 'Nơi sinh: Tỉnh', description: '', },
                { title: 'Nơi sinh Huyện', description: '', },
                { title: 'Nơi sinh Xã', description: '', },
                { title: 'Địa chỉ nơi sinh', description: '', },

                { title: 'Quê quán Tỉnh', description: data.provinceName || '', },
                { title: 'Quê quán Huyện', description: data.districtName || '', },
                { title: 'Quê quán Xã', description: data.wardName || '', },
                { title: 'Địa chỉ Quê quán', description: data.address || '', },

                { title: 'Thường trú: Tỉnh', description: data.perProvince || '', },
                { title: 'Thường trú: Huyện', description: data.perDistrict || '', },
                { title: 'Thường trú: Xã', description: data.perWard || '', },
                { title: 'Địa chỉ thường trú', description: data.perAddress || '', },

                { title: 'Giới tính', description: data.genderName || '', },
                { title: 'Ngày sinh', description: FormatDate(data.birthDate || ''), },
                { title: 'Quốc tịch', description: data.nationality || '', },
                { title: 'Dân tộc', description: '', },
                { title: 'Tôn giáo', description: data.relagionName || '', },
                { title: 'Tình trạng hôn nhân', description: data.maritalName || '', },
                { title: 'Ngày kết hôn', description: '', },

                { title: 'CMND', description: data.idNo || '', },
                { title: 'Ngày cấp CMND', description: FormatDate(data.idDate || ''), },
                { title: 'Ngày hết hạn CMND', description: '', },
                { title: 'Nơi cấp CMND', description: data.idPlace || '', },
                { title: 'Ghi chú thay đổi CMND/CCCD', description: '', },

                { title: 'Vùng bảo hiểm', description: '', },
                { title: 'Số sổ bảo hiểm', description: '', },
                { title: 'Lí do chưa cấp BHXH', description: '', },
                { title: 'Nơi khám chữa bệnh', description: '', },

                { title: 'MST', description: '', },
                { title: 'Ngày cấp MST', description: '', },

                { title: 'Số hộ chiếu', description: '', },
                { title: 'Ngày cấp hộ chiếu', description: '', },
                { title: 'Ngày hết hạn hộ chiếu', description: '', },
                { title: 'Nơi cấp hộ chiếu', description: '', },

            ]
        },
        {
            title: 'Hợp đồng mới nhất',
            data: [

            ]
        },
        {
            title: 'Thông tin liên hệ',
            data: [

            ]
        },
        {
            title: 'Thông tin trình độ văn hóa',
            data: [

            ]
        },
        {
            title: 'Thông tin sức khỏe',
            data: [

            ]
        },
        {
            title: 'Thông tin riêng BVNT',
            data: [

            ]
        },
        {
            title: 'Thông tin riêng BVH',
            data: [

            ]
        },
        {
            title: 'Đặc điểm lịch sử bản thân',
            data: [

            ]
        },
        {
            title: 'Nguồn thu nhập chính',
            data: [

            ]
        },
        {
            title: 'Thông tin trình đảng đoàn thể',
            data: [

            ]
        },
        {
            title: 'Quan hệ với nước ngoài',
            data: [

            ]
        },
        {
            title: 'Liên hệ khẩn cấp',
            data: [

            ]
        },
        {
            title: 'Thông tin tài khoản',
            data: [

            ]
        },
        {
            title: 'Thông tin bổ sung',
            data: [

            ]
        },
    ];

    const themes = useThemeColors().themes || 'default';


    return (
        <ScreenHeader
            title={'Thông tin hồ sơ'}
            onPressLeft={() => navigation.goBack()}
            iconLeft={<SVGBack />}
        >
            <SectionList
                sections={SECTIONS}
                keyExtractor={item => item.title}
                stickySectionHeadersEnabled={false}
                tabBarStyle={{
                    backgroundColor: NewColor[themes].background.primary,
                    borderBottomColor: NewColor[themes].border,
                    borderBottomWidth: 1
                }}
                ItemSeparatorComponent={() => <View style={[styles.separator, { backgroundColor: NewColor[themes].background.primary }]} />}
                renderTab={({ title, isActive }) => (
                    <View
                        style={[
                            styles.tabContainer,
                            {
                                backgroundColor: isActive ? NewColor[themes].primary : NewColor[themes].background.badge,
                                borderColor: NewColor[themes].border
                            }
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                { color: NewColor[themes].text.header, fontWeight: 'bold' }
                            ]}
                        >
                            {title}
                        </Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View>
                        <View style={[styles.sectionHeaderContainer, {
                            backgroundColor: NewColor[themes].background.primary,
                            borderTopColor: NewColor[themes].border,
                        }]} />
                        <Text style={[styles.sectionHeaderText, {
                            color: NewColor[themes].text.normal,
                            backgroundColor: NewColor[themes].background.primary
                        }]}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: NewColor[themes].background.primary }]}>
                        <View style={styles.itemRow}>
                            <Text style={[styles.itemTitle, { color: NewColor[themes].text.title }]}>{item.title}</Text>
                        </View>
                        <Text allowFontScaling={false} style={[styles.itemDescription, { color: NewColor[themes].text.normal }]}>{item.description == '' ? '-' : item.description}</Text>
                    </View>
                )}
            />
        </ScreenHeader>
    )
}

const styles = StyleSheet.create({



    tabContainer: {
        borderBottomWidth: 0.5,
    },
    tabText: {
        padding: Pixel16,
        fontSize: fontSize.extraSmall,
    },
    separator: {
        height: 0.5,
        width: '96%',
        alignSelf: 'flex-end',
    },
    sectionHeaderContainer: {
        height: Pixel10,
        borderTopWidth: 1,
    },
    sectionHeaderText: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        paddingTop: Pixel6,
        paddingBottom: Pixel6,
        paddingHorizontal: Pixel10
    },
    itemContainer: {
        paddingVertical: Pixel10,
        paddingHorizontal: Pixel16,
    },
    itemTitle: {
        flex: 1,
        fontSize: fontSize.small,
    },

    itemDescription: {
        marginTop: Pixel20,
        fontSize: fontSize.medium,
    },
    itemRow: {
        flexDirection: 'row'
    }
})