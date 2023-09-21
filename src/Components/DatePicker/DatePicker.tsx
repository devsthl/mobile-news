import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    registerTranslation,
    DatePickerModal,
} from 'react-native-paper-dates'
import { ButtonPrimary, TextPress } from '../Button'
import { Metrics, Colors, fontSize } from '../../Themes'
import moment from 'moment'
import color from '../../Themes/color'
import AppText from '../AppText'
registerTranslation("vi", {
    save: 'Lưu',
    selectSingle: 'Chọn ngày',
    selectMultiple: 'Chọn danh sách ngày',
    selectRange: 'Chọn khoảng thời gian',
    notAccordingToDateFormat: (inputFormat) =>
        `Định dạng ngày tháng là: ${inputFormat}`,
    mustBeHigherThan: (date) => `Ngày phải lớn hơn ${date}`,
    mustBeLowerThan: (date) => `Ngày phải nhỏ hơn ${date}`,
    mustBeBetween: (startDate, endDate) =>
        `Ngày phải trong khoảng: ${startDate} - ${endDate}`,
    dateIsDisabled: 'Ngày không phù hợp',
    previous: 'Trước',
    next: 'Sau',
    typeInDate: 'Nhập ngày',
    pickDateFromCalendar: 'Chọn ngày',
    close: 'Đóng',
})

interface PropsDatePicker {
    title: string,
    required?: boolean,
    setDateSendServer: any,
}


const DatePicker = (props: PropsDatePicker) => {
    const { title, required, setDateSendServer } = props;
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [dateString, setDateString] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params: any) => {
            const dateSelect = moment(params.date).format('DD/MM/YYYY')
            const dateSelect2 = moment(params.date).format('DD-MM-YYYY')
            setDateSendServer(dateSelect2)
            setDateString(dateSelect)
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate]
    );

    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    paddingLeft: Metrics.screenWidth * 0.06,
                }}>
                <AppText require={required} style={{ fontWeight: '600' }}>{title}</AppText>
            </View>
            <TextPress
                marginTop={10}
                onPress={() => setOpen(true)}
                title={dateString !== '' ? dateString : 'Chọn ngày'}
                boleanText={dateString != ''}
            />
            <DatePickerModal
                locale="vi"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
            />
        </>
    );
}

export default DatePicker

const styles = StyleSheet.create({})