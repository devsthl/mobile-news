import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import ScreenHeader from '../../Components/ScreenHeader';
import { TabView, SceneMap, TabBar, TabBarItem, TabBarIndicator } from 'react-native-tab-view';
import TrainOut from './TrainOut';
import TrainIn from './TrainIn';
import { Colors } from '../../Themes';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';


export default function Training() {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const renderScene = SceneMap({
        TrainIn: TrainIn,
        TrainOut: TrainOut
    });

    const [routes] = React.useState([
        { key: 'TrainIn', title: 'Đào tạo trong công ty' },
        { key: 'TrainOut', title: 'Đào tạo ngoài công ty' },
    ]);
    const themes = useThemeColors().themes || 'default';

    return (
        <ScreenHeader
            hideHeader
        >
            <TabView
                lazy
                renderTabBar={props =>
                    <TabBar
                        scrollEnabled
                        {...props}
                        indicatorStyle={{ backgroundColor: NewColor[themes].primary }}
                        style={{ backgroundColor: NewColor[themes].background.badge }}
                        // tabStyle={{ minHeight: 30, width: layout.width * 3 / 5 }} // here
                        renderLabel={({ route, focused, color }) => (
                            <Text style={{ color, margin: 8, textAlign: 'center' }} numberOfLines={2}>
                                {route.title}
                            </Text>
                        )}
                    />}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </ScreenHeader>
    )
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    }
})