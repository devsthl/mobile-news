import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    registerTranslation,
    DatePickerModal,
} from 'react-native-paper-dates'
import { ButtonNormal, ButtonPrimary } from '../Button'
import moment from 'moment'


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
const DatePickerRange = () => {
    const [range, setRange] = React.useState<{
        startDate: Date | undefined;
        endDate: Date | undefined;
    }>({ startDate: undefined, endDate: undefined });

    const [stringDate, setStringDate] = React.useState('')

    const [open, setOpen] = React.useState(false);

    const onDismiss = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }: any) => {
            const start = moment(startDate).format('DD/MM/YYYY')
            const end = moment(endDate).format('DD/MM/YYYY')
            const date = `${start} - ${end}`
            setStringDate(date)
            setOpen(false);
            setRange({ startDate, endDate });
        },
        [setOpen, setRange]
    );

    return (
        <>
            <ButtonNormal marginTop={10} onPress={() => setOpen(true)} title={stringDate !== '' ? stringDate : 'Pick range'} />
            <DatePickerModal
                locale="vi"
                mode="range"
                visible={open}
                onDismiss={onDismiss}
                startDate={range.startDate}
                endDate={range.endDate}
                onConfirm={onConfirm}
            />
        </>
    );
}

export default DatePickerRange

const styles = StyleSheet.create({})