import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import color from "../../../Themes/color";
import Header from "../../../Components/Header";
import { SVGBack } from "../../../Assets/SVG";
import { Colors, Metrics, fontSize } from "../../../Themes";
import { IconHeader } from "../MenuHeader";
import SvgWithId from "./SvgWithId";
import { allData, dataFlatList } from "../../../mocks/homeData";
import { FlatList } from "react-native";
import { _onItemFlat } from "..";
import SimpleToast from "react-native-simple-toast";
import AppText from "../../../Components/AppText";
import {
    AsyncStorageMenuDashboard
} from '../../../Utils/AsyncStorageHelper';
import NewColor from "../../../Themes/NewColor";
import useThemeColors from "../../../Hooks/useThemeColors";
interface PropsEditDashboard {
    navigation: any,
}

interface typeFlatList {
    id: number;
    name: string;
    image?: any;
    count?: number;
}


interface PropsListScreen {
    navigation: any,
    DataIcon: any,
    onPress: any,
    scroll?: boolean,
}

const VIEW_ICON = 65 * Metrics.ratioH
const MARGIN = 10 * Metrics.ratioH
const MARGIN_ICON = 8 * Metrics.ratioH
const SIZE_ICON = 35 * Metrics.ratioH
const ListScreen = ({ navigation, DataIcon, onPress, scroll = false }: PropsListScreen) => {

    const _renderItem = ({ item }: { item: typeFlatList }) => {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: Colors.white,
                width: VIEW_ICON,
                height: VIEW_ICON,
                margin: MARGIN_ICON,
                padding: MARGIN_ICON,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: MARGIN,

            }}>
                <IconHeader
                    linkSvg={<SvgWithId id={item.id} />}
                    label={item.name}
                    onPress={() => onPress(item)}
                />
            </View >
        );
    };

    return (
        <FlatList
            style={{ flex: 1, marginHorizontal: 2 * MARGIN, backgroundColor: color.white }}
            data={DataIcon}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            scrollEnabled={scroll}
        />
    )
}

export default function EditDashBoard(props: PropsEditDashboard) {
    const { navigation } = props;
    const [favorite, setFavorite] = useState<typeFlatList[]>(dataFlatList)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const listMenu = await AsyncStorageMenuDashboard.get()
        if (listMenu) {
            setFavorite(listMenu)
        } else {
            setFavorite(dataFlatList)
        }
    }

    const Add = (itemAdd: typeFlatList) => {
        console.log('add id...', itemAdd.id)
        if (isEdit) {
            if (favorite.find((item) => (item.id === itemAdd.id))) {
                SimpleToast.show('Đã có trong danh sách yêu thích')
            } else if (favorite.length >= 7) {
                SimpleToast.show('Tối đa cho phép 7 ưa thích')
            } else {
                console.log('...', itemAdd)
                const datafake = [...favorite].concat(itemAdd);
                setFavorite(datafake)
                // console.log('datafake...', datafake)
            }
        } else {
            _onItemFlat(itemAdd.id, navigation)
        }
    }
    const Remove = (itemRemove: typeFlatList) => {
        console.log('remove id...', itemRemove.id)
        if (isEdit) {
            // if (favorite.length <= 3) {
            //     SimpleToast.show('Tối thiểu phải có 3 ưa thích')
            // } else {
            const datafake = [...favorite].filter((item) => (
                item.id != itemRemove.id
            ))
            console.log(datafake)
            setFavorite(datafake)
            // }
        } else {
            _onItemFlat(itemRemove.id, navigation)
        }
    }

    const pressEdit = async () => {
        if (isEdit) {
            console.log('isEdit...', isEdit)
            if (favorite.length < 3) {
                SimpleToast.show('Phải có ít nhất 3 ưa thích')
            } else {
                await AsyncStorageMenuDashboard.set(favorite)
                setIsEdit(!isEdit)
            }
        } else {
            setIsEdit(!isEdit)
        }
    }
    const themes = useThemeColors().themes || 'default'

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: NewColor[themes].primary,
            }}
        >
            <Header
                title="Histaff"
                iconLeft={<SVGBack />}
                onPressLeft={() => navigation.goBack()}
            />
            <View style={{ flex: 1, backgroundColor: color.whitesecondary }}>
                <View style={{ marginHorizontal: 2 * MARGIN, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AppText style={{ fontSize: fontSize.small, fontWeight: 'bold', marginTop: MARGIN }}>{`Yêu thích`}</AppText>
                    <TouchableOpacity
                        onPress={pressEdit}
                    >
                        <AppText style={{ marginLeft: 2 * MARGIN, fontSize: fontSize.small, fontWeight: 'bold', marginTop: MARGIN, color: color.primary, }}>{isEdit ? `Lưu` : `Chỉnh sửa`}</AppText>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapFlat}>
                    <ListScreen
                        navigation={navigation}
                        DataIcon={favorite}
                        onPress={Remove}
                    />

                </View>
                <View>
                    <AppText style={{ marginLeft: 2 * MARGIN, fontSize: fontSize.small, fontWeight: 'bold', marginTop: MARGIN }}>{`Tất cả`}</AppText>
                </View>

                <ListScreen navigation={navigation} DataIcon={allData} onPress={Add} />
            </View>
        </SafeAreaView>
    );
}

const VIEW_LIST = 170 * Metrics.ratioH

const styles = StyleSheet.create({
    wrapFlat: {
        // flex: 1,
        height: VIEW_LIST,
        width: '100%',
        // marginHorizontal: 10,
        backgroundColor: Colors.whitesecondary,
        // paddingHorizontal: 8,
        // borderRadius: 10,
    },
})
