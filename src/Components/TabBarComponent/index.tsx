/** @format */

import React, { Component, createRef, useState } from 'react';
import {
    AppState,
    Keyboard,
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    ActivityIndicator,
} from 'react-native';
import AppConfig from '../../Config/AppConfig';
import { ApplicationStyles, Colors, Images } from '../../Themes';
import AppText from '../AppText';
import Badge from '../Bagde';
import ImageLazy from '../ImageLazy';
import styles from './styles';
import navigationConfig from '../../Navigation/navigationConfig';
import ImgToBase64 from 'react-native-image-base64';
import { from } from 'seamless-immutable';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';
import { Pixel24 } from '../../Utils/Transform';
// import {
// 	AsyncStorageFirstInitApp,
// } from 'Utils/AsyncStorageHelper';
// import api from 'Utils/generateAPI';

interface Active {
    Home: any,
    Phonebook: any,
    Notification: any,
    CompensationsAndBenefits: any,
}

interface Icon {
    active: Active,
    inactive: Active,
}

interface ItemRender {
    index: number,
    tab: string,
    defaultStack: string,
}

const Icons: Icon = {
    active: {
        Home: Images.homeActive,
        Phonebook: Images.contactsActive,
        Notification: Images.notificationActive,
        CompensationsAndBenefits: Images.compensationsAndBenefitsActive,
    },
    inactive: {
        Home: Images.home,
        Phonebook: Images.contacts,
        Notification: Images.notification,
        CompensationsAndBenefits: Images.compensationsAndBenefits,
    },
};

interface Props {
    tabBarConfig: any[];
}

const TabBarComponent = ({ tabBarConfig, navigation }: any) => {
    const [keyboardStatus, setKeyboardStatus] = useState('hide');
    const [dataPermissionList, setDataPermissionList] = useState([])
    const listViewState = tabBarConfig;
    const [isAvatarUpdating, setIsAvatarUpdating] = useState(false)
    const [isDef, setIsDef] = useState(-1)
    const [pathImageAvatar, setPathImageAvatar] = useState('')
    const [baseImage, setBaseImage] = useState('');
    const [tab, setTab] = useState('Home');
    let templst: any[] = [];
    let botNav: any[] = []
    listViewState.forEach(function (item: any) {
        templst.push(item)
    });
    const themes = useThemeColors().themes || 'default';

    const activeTintColor = NewColor[themes].primary;
    const inActiveTintColor = NewColor[themes].primary;

    const handleNavigateTab = (tabName: any, defaultStack: any) => {
        setTab(tabName)
        navigation.navigate(defaultStack);
    };
    const renderIcon = (index: any, nameTab: any) => {
        if (nameTab === navigationConfig.tabBarName.RECORD) {
            return null;
        }
        if (nameTab == tab) {
            return (
                <Image
                    source={Icons.active[nameTab]}
                    style={{
                        tintColor: activeTintColor,
                        width: Pixel24,
                        height: Pixel24,
                    }}
                />
            );
        }

        return (
            <Image
                source={Icons.inactive[nameTab]}
                style={{ tintColor: inActiveTintColor, width: Pixel24, height: Pixel24 }}
            />
        );
    };

    const img_default = (img: any) => {

        if (img.length === undefined) {
            setIsDef(0)
        } else {
            setIsDef(1)
        }
    };


    const renderChildrenTab = (tabName: any) => {
        switch (tabName) {
            case navigationConfig.tabBarName.NOTIFICATION:


                return (
                    <Badge
                        count={1}
                    // count={notificationData.filter(
                    // 		(item) => item.IS_READ === 0
                    // 	).length)
                    // }
                    />
                );
            case navigationConfig.tabBarName.RECORD:
                if (isAvatarUpdating) {
                    return (
                        <View
                            style={[
                                styles.avatar,
                                { backgroundColor: NewColor[themes].background.modal },
                            ]}
                        >
                            <ActivityIndicator animating={true} size='small' />
                        </View>
                    );
                } else {
                    if (isDef == -1) {
                        ImgToBase64.getBase64String(pathImageAvatar || baseImage)
                            .then((base64String: any) => img_default(base64String))
                            .catch((err: any) => img_default(err));
                    }

                    let uri = (pathImageAvatar ||
                        baseImage) +
                        '?' +
                        new Date();
                    if (isDef === 0) {
                        uri = 'https://www.w3schools.com/howto/img_avatar.png'
                    }

                    return (
                        <ImageLazy
                            source={{
                                uri: uri,
                                // (this.state.pathImageAvatar ||
                                // 	this.state.baseImage) +
                                // '?' +
                                // new Date(),
                            }}
                            style={styles.avatar}
                        />
                    );
                }
        }

        return null;
    };
    return (
        <SafeAreaView style={styles.border}>
            {keyboardStatus === 'show' ? null : (

                <View
                    style={[
                        styles.container,
                        ApplicationStyles.tabBarNavigation,
                    ]}
                >

                    {templst.map((item: ItemRender) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={1}
                                key={item.tab}
                                onPress={() => {
                                    console.log(item)
                                    handleNavigateTab(
                                        item.tab,
                                        item.defaultStack
                                    )
                                }
                                }
                                style={styles.item}
                            >
                                {renderIcon(item.index, item.tab)}
                                {renderChildrenTab(item.tab)}
                            </TouchableOpacity>

                        );

                    })}
                    <View style={styles.versionBox}>
                        <AppText style={styles.version}>
                            {AppConfig.devVersion}
                        </AppText>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default TabBarComponent;