import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import AppText from "../../../Components/AppText";
import { Colors, Metrics, fontSize } from "../../../Themes";
import Header from "../../../Components/Header";
import color from "../../../Themes/color";
import { SVGBack } from "../../../Assets/SVG";
import { Calendar } from "react-native-calendars";
import CalendarDayComponent from "./CalendarDayComponent";
import moment from "moment";
import { Modal, SlideAnimation, } from 'react-native-modals';

const MARGIN = 10 * Metrics.ratioH
interface PropsTimeSheet {
    navigation: any,
}
import { LocaleConfig } from 'react-native-calendars';
import DesText from "./DesText";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
LocaleConfig.locales['vi'] = {
    monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',],
    monthNamesShort: ['TH11', 'TH2', 'TH3', 'TH4', 'TH5', 'TH6', 'TH7', 'TH8', 'TH9', 'TH10', 'TH11', 'TH12'],
    dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7',],
    dayNamesShort: ['CN', 't2', 't3', 't4.', 't5', 't6', 't7',],
    today: "Hôm nay"
};
LocaleConfig.defaultLocale = 'vi';

export default function TimeSheets(props: PropsTimeSheet) {
    const { navigation } = props
    const periodMarks: any = useMemo(() => {
        return {
            '2023-02-17': {
                text: 'x/p',
                type: 'red',
            },
            '2023-02-18': { text: 'x', type: 'green' },
            '2023-02-21': { text: 'p', type: 'yellow' },
            '2023-02-22': { text: 'm', type: 'red' },
            '2023-02-24': { text: 'p/k', type: 'red' },
            '2023-02-27': { text: 'k', type: 'red', late: '25', early: 10 },
        };
    }, []);

    const dataViewOfMonth = [
        { title: 'Công làm việc thực tế', value: '16.5' },
        { title: 'Công nhỉ phép', value: '' },
        { title: 'Công nghỉ lễ', value: '' },
        { title: 'NGhỉ công ty', value: '' },
        { title: 'Nghỉ đặc biệt', value: '' },
        { title: 'nghỉ bù', value: '' },
        { title: 'Nghỉ không lương', value: '' },
        { title: 'Nghỉ ốm ngắn ngày', value: '' },
        { title: 'Nghỉ ốm dài ngày', value: '' },
        { title: 'Con ốm', value: '' },
        { title: 'Công thai sản', value: '' },
        { title: 'Nghỉ khám thai', value: '' },
        { title: 'Sảy thai', value: '' },
        { title: 'Công nghỉ vợ sinh', value: '' },
        { title: 'Dưỡng sức sau thai sản', value: '' },
        { title: 'Dưỡng sức sau ốm đau', value: '' },
        { title: 'Nghỉ ngừng việc', value: '' },
        { title: 'Tổng ngày làm ca', value: '' },
        { title: 'Tổng ngày công ty trả lương', value: '' },
        { title: 'Số phút muộn/sớm/ra ngoài', value: '' },
        { title: 'Tổng số lần muộn', value: '' },
        { title: 'Tổng phút muộn', value: '' },
        { title: '', value: '' },
    ]

    const TotalWorkOverTimes = [
        { title: 'Giờ làm ca đêm', value: '' },
        { title: 'OT 150%', value: '' },
        { title: 'OT 210%', value: '' },
        { title: 'OT 200%', value: '' },
        { title: 'OT 270%', value: '' },
        { title: 'OT 300%', value: '' },
        { title: 'OT 390%', value: '' },
        { title: 'Tổng giờ làm thêm được thanh toán', value: '' },
        { title: 'Tổng giờ làm thêm chuyển nghỉ bù', value: '' },
    ]

    const [dateSelect, setDateSelect] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [month, setMonth] = useState(moment(new Date()).format('MM'))
    const [dataDateSelect, setDataDateSelect] = useState<any>()
    const [showModal, setShowModal] = useState(false)
    const themes = useThemeColors().themes || 'default';

    const renderDayComponent = (data: any) => {
        return (
            <CalendarDayComponent
                {...data}
                date={data.date}
                onPress={(date: any) => {
                    console.log('date.select..', date)
                    setShowModal(true)
                    setDateSelect(date.dateString)
                }}
                calendarData={periodMarks}
                children={data.date.day.toString()}
                styleItem={{}}
                month={month}
            />
        )
    }

    useEffect(() => {
        console.log('dateSelect...', moment(dateSelect).format('DD/MM/YYYY'))
        const dataSelect = periodMarks?.[dateSelect] || {}
        setDataDateSelect(dataSelect)
    }, [dateSelect])

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header title="Bảng công" iconLeft={<SVGBack />} onPressLeft={() => navigation.goBack()} />
            <ScrollView style={[styles.scrollview, { backgroundColor: NewColor[themes].background.screen }]}>
                <Calendar
                    dayComponent={renderDayComponent}
                    onMonthChange={(date: any) => {
                        console.log('month changed', date.month);
                        setMonth(date.month)
                        // gọi API lấy thông tin tháng được chọn
                    }}
                    enableSwipeMonths={true}
                />
                <View style={[styles.viewMonth, { backgroundColor: NewColor[themes].background.primary }]}>
                    <AppText style={styles.appTextMonthTitle}>{`Công tổng hợp`}</AppText>
                    {dataViewOfMonth.map((item, index) => {
                        return (
                            <DesText title={item.title} value={item.value} />
                        )
                    })}
                    <AppText style={styles.appTextMonthTitle}>{`Tổng hợp làm thêm`}</AppText>
                    {TotalWorkOverTimes.map((item, index) => {
                        return (
                            <DesText title={item.title} value={item.value} />
                        )
                    })}
                </View>
                {/* có thẻ sửa thành kiểu hiển thị khác cho phù hợp(popup, bottom) */}
                <Modal style={styles.modal}
                    visible={showModal}
                    onTouchOutside={() => {
                        setShowModal(false)
                    }}
                    modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                >
                    <SafeAreaView style={[styles.modalView, { backgroundColor: NewColor[themes].background.primary }]}>
                        <AppText style={styles.appTextDate}>{`Dữ liệu công ngày ${moment(dateSelect).format('DD/MM/YYYY')}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`Đi muộn: ${dataDateSelect?.late || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`Về sớm: ${dataDateSelect?.early || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`Ra ngoài: ${dataDateSelect?.out || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`OT 150%: ${dataDateSelect?.ot150 || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`OT 210%: ${dataDateSelect?.ot210 || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`OT 200%: ${dataDateSelect?.ot200 || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`OT 270%: ${dataDateSelect?.ot270 || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`OT 300%: ${dataDateSelect?.ot300 || '0'}`}</AppText>
                        <AppText style={styles.appTextDetail}>{`OT 390%: ${dataDateSelect?.ot390 || '0'}`}</AppText>
                    </SafeAreaView>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appTextDate: {
        fontSize: fontSize.small,
        fontWeight: 'bold',
    },
    appTextDetail: {
        fontSize: fontSize.small,
    },
    appTextMonthTitle: {
        fontSize: fontSize.small,
        fontWeight: '600',
    },
    appTextMonthDes: {
        fontSize: fontSize.XXS,
    },
    modal: {
        flex: 1,
    },
    modalView: {
        padding: MARGIN,
        margin: MARGIN,
    },
    scrollview: {
        flex: 1,
    },
    viewMonth: {
        flex: 1,
        margin: MARGIN,
        borderRadius: MARGIN,
        padding: MARGIN
    },
})
