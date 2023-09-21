import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { fontSize } from "../../../Themes";
import { MARGIN } from "../../../Utils/Transform";
import moment from "moment";
import useThemeColors from "../../../Hooks/useThemeColors";
import NewColor from "../../../Themes/NewColor";

interface PropsCalendarDay {
    date?: any,
    marking?: any,
    state?: any,
    onPress?: any,
    calendarData?: any,
    children: string,
    month: string
}

const CalendarDayComponent = (props: PropsCalendarDay) => {
    const { date, marking, state, onPress, calendarData, children, month } = props;
    const onPressed = () => {
        if (date.month != month) {

        } else {
            requestAnimationFrame(() => onPress(date));
        }
    }
    const today = moment(new Date()).format('YYYY-MM-DD')
    let items = '';
    let items2 = '';
    const themes = useThemeColors().themes || 'default';

    let bg = NewColor[themes].text.input;

    items = calendarData?.[date.dateString]?.text ? calendarData?.[date.dateString]?.text : date.month == month ? 'x' : ''
    items2 = calendarData?.[date.dateString]?.text2 ? calendarData?.[date.dateString]?.text2 : date.month == month ? 'vào-ra' : ''
    switch (calendarData?.[date.dateString]?.type?.toLowerCase() || '') {
        case 'red':
            bg = NewColor[themes].text.off
            break;
        case 'green':
            bg = NewColor[themes].text.approve
            break;
        case 'yellow':
            bg = NewColor[themes].text.leave
            break;
        default:
            bg = NewColor[themes].primary
            break;
    }

    return (
        <TouchableOpacity
            onPress={onPressed}
            style={[styles.container, date.dateString === today ? {} : {}]}>
            <Text
                allowFontScaling={false}
                style={[{ color: state === 'disabled' ? 'gray' : 'black' }, date.dateString === today ? { fontWeight: '600', color: NewColor[themes].primary } : {}]}>
                {children}
            </Text>
            <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={[styles.itemsCount, { color: bg }, date.dateString === today ? { fontWeight: '600', color: NewColor[themes].primary } : {}]}
            >
                {`${items.toUpperCase()}`}
            </Text>
            <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={[styles.itemsCount, { color: bg }, date.dateString === today ? { fontWeight: '600', color: NewColor[themes].primary } : {}]}
            >
                {items2}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        minHeight: 4 * MARGIN,
        minWidth: 4 * MARGIN,
        borderRadius: 2 * MARGIN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayItem: {
        textAlign: 'center',
    },
    itemsCount: {
        textAlign: 'center',
        fontSize: fontSize.XXXS,
    },
})

export default CalendarDayComponent;