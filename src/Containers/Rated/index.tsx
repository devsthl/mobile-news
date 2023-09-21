import {
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header";
import { SVGBack } from "../../Assets/SVG";
import Styles from "../../Components/Styles/Styles";
import { fontSize } from "../../Themes";
import AppText from "../../Components/AppText";
import { Pixel10, Pixel20, } from "../../Utils/Transform";
import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
interface PropsSelect {
    id: string | number,
    choose: string,
    des: string
}
interface Props {
    navigation: any
}
interface PropsRated {
    id: number
    key: string,
    question: string
    select: PropsSelect[],
    answer?: number,
    keyID?: number[],
    multiCheck: number
}

export default function Rated(props: Props) {
    const { navigation } = props
    const [data, setData] = useState<any>()
    const [checked, setChecked] = useState(false);
    const [dataList, setDataList] = useState<PropsRated[]>([])
    const themes = useThemeColors().themes || 'default';

    const listRate: PropsRated[] = [
        {
            id: 3,
            key: 'Câu 1:',
            question: 'Đánh giá về chất lượng dịch vụ core*',
            keyID: [],
            multiCheck: 0,
            select: [
                {
                    id: 1,
                    choose: 'A',
                    des: 'Mô tả đáp án A',
                },
                {
                    id: 2,
                    choose: 'B',
                    des: 'Mô tả đáp án B',

                },
                {
                    id: 3,
                    choose: 'C',
                    des: 'Mô tả đáp án C',

                },
                {
                    id: 4,
                    choose: 'D',
                    des: 'Mô tả đáp án D',
                },
            ]
        },
        {
            id: 2,
            key: 'Câu 2:',
            question: 'Đánh giá quy trình làm việc của Histaff_mobile',
            keyID: [],
            multiCheck: 0,
            select: [
                {
                    id: 1,
                    choose: 'A',
                    des: 'Mô tả đáp án A',
                },
                {
                    id: 2,
                    choose: 'B',
                    des: 'Mô tả đáp án B',

                },
                {
                    id: 3,
                    choose: 'C',
                    des: 'Mô tả đáp án C',

                },
                {
                    id: 4,
                    choose: 'D',
                    des: 'Mô tả đáp án D',
                }
            ]
        },
        {
            id: 5,
            key: 'Câu 3:',
            question: 'Đánh giá về thái độ làm việc của nhân viên',
            keyID: [],
            multiCheck: 1,
            select: [
                {
                    id: 1,
                    choose: 'A',
                    des: 'Mô tả đáp án A',
                },
                {
                    id: 2,
                    choose: 'B',
                    des: 'Mô tả đáp án B',

                },
                {
                    id: 3,
                    choose: 'C',
                    des: 'Mô tả đáp án C',

                },
                {
                    id: 4,
                    choose: 'D',
                    des: 'Mô tả đáp án D',
                }
            ]
        },
    ]
    {/*
        - Hiển thị động danh sách đánh giá có số lượng câu hỏi động
        - Câu trả lời dạng dropdown giống phần chọn kiểu nghỉ trên core
        - nếu chưa trả lời đầy đủ thì thông báo (dùng SimpleToast)
        - Chọn submit thì sẽ log danh sách câu hỏi kèm đáp án dạng json vd: tất cả các câu hỏi đều trả lời đấp án đầu
        {
            quest1: 1,
            cau2: 1,
            quest3: 1,
        }
     */}
    useEffect(() => {
        setDataList(listRate);
    }, [])
    const handleChange = (itemSelect: any, keyID: number[], multiCheck: number, indexQue: number) => {
        let s: number[] = [...keyID];
        let data = [...dataList]
        const index = s.findIndex((i) => i == itemSelect.id)

        if (multiCheck == 0) {
            s = [itemSelect.id]
            data[indexQue].keyID = s;
        } else {
            if (index < 0) {
                s.push(itemSelect.id)
                console.log(s);
                data[indexQue].keyID = s;
            } else {
                s.splice(index, 1)
                console.log(s);
                data[indexQue].keyID = s;
            }
        }
        setDataList(data)
    }
    const _renderItem = (item: any, index: number) => {
        return (
            <ScrollView>
                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={{ marginBottom: 10 }}>
                        {item.key} {item.question}
                    </Text>

                    {item?.select?.map((itemS: any, select: number) => {
                        return (
                            <TouchableOpacity
                                style={{ height: 4 * Pixel10, alignItems: 'center', flexDirection: 'row' }}
                                onPress={() => handleChange(itemS, item.keyID, item.multiCheck, index)}
                            >
                                <View style={{ width: Pixel20, height: Pixel20, borderRadius: Pixel10, borderWidth: 2, borderColor: NewColor[themes].button.warning, marginRight: Pixel10, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={
                                        item?.keyID?.findIndex((i: number) => i == itemS.id) < 0 ?
                                            {}
                                            :
                                            { width: Pixel10, height: Pixel10, borderRadius: Pixel10, backgroundColor: NewColor[themes].button.warning }}
                                    />
                                </View>
                                <AppText style={{ fontSize: fontSize.small }}>{itemS.choose}: {itemS.des}</AppText>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }

    const handleSubmit = () => {
        // console.log("data", data);
        console.log("data", dataList);
    }
    return (
        <View style={[Styles.container, {
        }]}>
            <Header
                title="Đánh giá"
                iconLeft={<SVGBack color='white' />}
                onPressLeft={() =>
                    navigation.goBack()}
            />
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                height: '100%',
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 20,
                alignItems: 'center',
            }}>
                <FlatList
                    data={dataList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => _renderItem(item, index)} />

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                        backgroundColor: NewColor[themes].button.warning,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        width: '50%',
                        height: '8%',
                        marginVertical: 10
                    }}>
                    <Text style={{ fontWeight: '600', fontSize: fontSize.small }}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
