import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import ScreenHeader from '../../Components/ScreenHeader';
import { TabView, SceneMap, TabBar, TabBarItem, TabBarIndicator } from 'react-native-tab-view';
import Reward from './Reward';
import Discipline from './Discipline';
import { Colors } from '../../Themes';
import NewColor from '../../Themes/NewColor';
import useThemeColors from '../../Hooks/useThemeColors';


export default function Regulation() {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const renderScene = SceneMap({
        Reward: Reward,
        Discipline: Discipline,
    });

    const [routes] = React.useState([
        { key: 'Reward', title: 'Khen thưởng' },
        { key: 'Discipline', title: 'Kỉ luật' },
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
                        indicatorStyle={{ backgroundColor: NewColor[themes].primary, height: layout.width / 5 }}
                        tabStyle={{ minHeight: 30, width: layout.width / 2 }} // here
                        style={{ backgroundColor: NewColor[themes].background.badge }}
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