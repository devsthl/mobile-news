import { View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import AppText from "../../Components/AppText";
import Header from "../../Components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonNormal } from "../../Components/Button";
import { Pixel10, Pixel20 } from "../../Utils/Transform";
import { fontSize } from "../../Themes";
import { SVGBack } from "../../Assets/SVG";
import useThemeColors from "../../Hooks/useThemeColors";
import NewColor from "../../Themes/NewColor";

interface PropsSurvey {
    navigation: any
}

export default function Survey(props: PropsSurvey) {
    const { navigation } = props;
    const dataserver = {
        question: 'Chúng ta sẽ đi đâu?',
        select: [],
        multipleSelect: 0,
        abc: [
            {
                id: 1,
                name: 'Cát Bà'
            },
            {
                id: 2,
                name: 'Hạ Long'
            },
            {
                id: 3,
                name: 'Đồ Sơn'
            },
        ],
    }

    const [data, setData] = useState<any>();

    useEffect(() => {
        setData(dataserver);
    }, [])

    const pressItem = (item: any, select: number[], multipleSelect: number) => {
        let s: number[] = select;
        const index = s.findIndex((i) => i == item.id);
        if (multipleSelect == 0) {
            s = [item.id]
        } else {
            if (index < 0) {
                s.push(item.id);
            } else {
                s.splice(index, 1)
            }
        }
        setData({ ...data, select: s })
        console.log("data", data);

    }
    const themes = useThemeColors().themes || 'default';


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: NewColor[themes].primary }}>
            <Header title="Khảo sát" iconLeft={<SVGBack />} onPressLeft={() => navigation.goBack()} />
            <View style={{ flex: 1, backgroundColor: NewColor[themes].background.screen, paddingHorizontal: Pixel10 }}>

                <AppText style={{ fontWeight: '600', fontSize: fontSize.medium }}>{dataserver.question}</AppText>
                {data?.abc?.map((item: any, select: number) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{ height: 4 * Pixel10, alignItems: 'center', flexDirection: 'row' }}
                            onPress={() => pressItem(item, data.select, data.multipleSelect)}
                        >
                            <View style={{ width: Pixel20, height: Pixel20, borderRadius: Pixel10, borderWidth: 1, borderColor: NewColor[themes].primary, marginRight: Pixel10, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={
                                    data?.select?.findIndex((i: number) => i == item.id) < 0 ?
                                        {} :
                                        { width: Pixel10, height: Pixel10, borderRadius: Pixel10, backgroundColor: NewColor[themes].primary }} />
                            </View>
                            <AppText style={{ fontSize: fontSize.small }} >{item.name}</AppText>
                        </TouchableOpacity>
                    )
                })}
                <ButtonNormal
                    title="Gửi"
                    onPress={() => console.log(data)}
                />
            </View>

        </SafeAreaView>
    );
}
