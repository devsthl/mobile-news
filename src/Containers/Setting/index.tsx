import { View, Text, SafeAreaView, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { SVGBack } from "../../Assets/SVG";
import color from "../../Themes/color";
import { Pixel10 } from "../../Utils/Transform";
import AppText from "../../Components/AppText";
import { ButtonCancel, ButtonNormal } from "../../Components/Button";
import { Swipeable } from 'react-native-gesture-handler';
import ItemSwipeable from "./ItemSwipeable";
import { AsyncStorageThemes } from "../../Utils/AsyncStorageHelper";
import useThemeColors from "../../Hooks/useThemeColors";
import NewColor from "../../Themes/NewColor";

interface PropsSetting {
    navigation: any;
}
export default function Setting(props: PropsSetting) {
    const { navigation } = props

    const list = [
        {
            id: 1,
            title: 'Hieutv',
        },
        {
            id: 2,
            title: 'Dangth',
        },
        {
            id: 3,
            title: 'Anhlt',
        },
    ]

    const [data, setData] = useState<any>([])
    useEffect(() => {
        setData(list);
    }, [])

    function deleteItem(index: number) {
        console.log('xóa item...', index)
        var fakedata = [...data]
        fakedata.splice(index, 1)
        setData(fakedata)
    }
    const themes = useThemeColors().themes || 'default';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: NewColor[themes].primary }}>
            <Header
                onPressLeft={() => { navigation.goBack() }}
                iconLeft={<SVGBack />}
                title="Cài đặt"
            />
            <View style={{ flex: 1, backgroundColor: NewColor[themes].background.screen, padding: Pixel10 }}>
                <AppText>{`Bât/Tắt đăng nhập sinh trắc học`}</AppText>
                {/* <ButtonNormal
                    title="Đỏ"
                    onPress={() => {
                        AsyncStorageThemes.set('default')
                        navigation.goBack()
                    }}
                /> */}
                <ButtonCancel
                    marginTop={Pixel10}
                    title="default"
                    onPress={() => {
                        AsyncStorageThemes.set('default')
                        navigation.navigate('AuthLoading')
                    }}
                    color={NewColor.default.primary}
                />
                <ButtonCancel
                    marginTop={Pixel10}
                    title="dark"
                    onPress={() => {
                        AsyncStorageThemes.set('dark')
                        navigation.navigate('AuthLoading')
                    }}
                    color={NewColor.dark.primary}
                />
                <ButtonCancel
                    marginTop={Pixel10}
                    title="light"
                    onPress={() => {
                        AsyncStorageThemes.set('light')
                        navigation.goBack()
                    }}
                    color={NewColor.light.primary}
                />
                <ButtonCancel
                    marginTop={Pixel10}
                    title="old"
                    onPress={() => {
                        AsyncStorageThemes.set('old')
                        navigation.navigate('AuthLoading')
                    }}
                    color={NewColor.old.primary}
                />
                {/*  Swipeable để xóa */}
                {data.map((item: any, index: number) => {
                    return (
                        <ItemSwipeable key={index} title={item.title} deleteItem={() => deleteItem(index)} />
                    )
                })}
            </View >
        </SafeAreaView >
    );
}
