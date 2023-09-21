import {
    View,
    TextInput,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Image,
    Text
} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Components/Header'
import { useRef, useState } from 'react'
import styles from './style'
import { SVGBack, SvgSearch } from '../../Assets/SVG'
import { Pixel10, Pixel16, Pixel20, Pixel80 } from '../../Utils/Transform'

import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import AppText from '../../Components/AppText'
interface Props {
    navigation: any
    route: any
}
const ListofEmployees = (props: Props) => {
    const { navigation, route } = props
    const ref = useRef(null);
    const dispatch = useDispatch()
    const [listPhone, setListPhone] = useState<any[]>([])
    const [search, setSearch] = useState('')
    const themes = useThemeColors().themes || 'default';

    const fakeData = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            titleName: 'Lập trình viên'
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            titleName: 'Lập trình viên'
        },
        {
            id: 3,
            name: 'Nguyễn Văn C',
            titleName: 'Lập trình viên'
        },
        {
            id: 4,
            name: 'Nguyễn Văn D',
            titleName: 'Lập trình viên'
        },
        {
            id: 5,
            name: 'Nguyễn Văn E',
            titleName: 'Lập trình viên'
        },
        {
            id: 6,
            name: 'Nguyễn Văn F',
            titleName: 'Lập trình viên'
        },
        {
            id: 7,
            name: 'Nguyễn Văn G',
            titleName: 'Lập trình viên'
        },
        {
            id: 8,
            name: 'Nguyễn Văn H',
            titleName: 'Lập trình viên'
        },
    ]

    const onChangeText = () => {

    }
    const Divider = ({ color = "#ECECEC", thickness = 1, padding = Pixel16, ...rest }) => {
        return (
            <View style={{
                backgroundColor: color,
                height: thickness,
                width: rest.highlighted
                    ? '100%'
                    : Dimensions.get('window').width - padding * 2,
                marginHorizontal: rest.highlighted ? 0 : padding,
            }} />
        )
    }

    const handleLoadMore = () => {

    }
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 8,
                    alignItems: 'center',
                    height: Pixel80,
                    backgroundColor: NewColor[themes].background.primary,
                    marginHorizontal: Pixel10,
                    borderRadius: Pixel20,
                    marginTop: Pixel10,
                    borderWidth: 1,
                    borderColor: NewColor[themes].border,
                }}
                onPress={() => navigation.navigate('EmployeesDetail',
                    {
                        name: item.name,
                        id: item.id,
                        item: item
                    }
                )}>
                {renderAvatarRecord(item.name, item.avatar)}
                <View style={styles.infoContact}>
                    <AppText
                        style={[styles.nameContact,]}
                    >
                        {item.name}
                    </AppText>
                </View>
            </TouchableOpacity>
        )
    }
    const renderAvatarRecord = (name: any, avatar: any) => {
        if (avatar) {
            return (
                <View style={[{ backgroundColor: NewColor[themes].primary }, styles.sizeAvatar]}>
                    <Image source={{ uri: avatar }} style={styles.sizeAvatar} />
                </View>
            )
        }
        let converName = name.split(' ').pop().substr(0, 1).toUpperCase();
        return (
            <View style={[{ backgroundColor: NewColor[themes].primary }, styles.sizeAvatar]}>
                <AppText
                    allowFontScaling={false}
                    style={[styles.text, { color: NewColor[themes].text.header }]}
                >{converName}</AppText>
            </View>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
            <Header
                title={'Danh sách nhân viên'}
                iconLeft={<SVGBack color='white' />}
                onPressLeft={() =>
                    navigation.goBack()
                }
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Family')
                }}
            ><Text>sfsdfsdf</Text></TouchableOpacity>
            <View style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}>
                <View style={[styles.containerInput, { backgroundColor: NewColor[themes].background.primary }]}>
                    <View style={styles.groupInput}>
                        <SvgSearch />
                        <TextInput
                            onChangeText={onChangeText}
                            placeholder={'Tìm kiếm'}
                            allowFontScaling={false}
                            style={[styles.input, { color: NewColor[themes].text.normal }]}
                            placeholderTextColor={NewColor[themes].text.placeholder}
                        />
                    </View>
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    ItemSeparatorComponent={Divider}
                    data={fakeData}
                    ref={ref}
                    onEndReachedThreshold={0.2}
                    onEndReached={handleLoadMore}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => renderItem(item)}
                />
            </View>
        </View>
    )
}

export default ListofEmployees