import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view';
import ScreenHeader from '../../Components/ScreenHeader';
import { TabView, SceneMap, TabBar, TabBarItem, TabBarIndicator } from 'react-native-tab-view';
import ContractProcess from './ContractProcess';
import WorkingProcess from './WorkingProcess';
import WorkingProcessBefor from './WorkingProcessBefor';
import { Colors, fontSize } from '../../Themes';
import SalaryProcess from './SalaryProgcess';
import PositionLevel from './PositionLevel';
import Insurance from './Insurance';
import Concurrently from './Concurrently';
import WorkAbroad from './WorkAbroad';
import Zoning from './Zoning';
import Family from './Family';
import EmployeePaper from './EmployeePaper';
import CommendProcess from './CommendProcess';
import DisciplineProcess from './DisciplineProcess';
import InschangeProcess from './InschangeProcess';
import useThemeColors from '../../Hooks/useThemeColors';
import NewColor from '../../Themes/NewColor';


export default function RecordHrDetail(navigation: any) {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const themes = useThemeColors().themes || 'default';

    const renderScene = SceneMap({
        Family: Family,
        EmployeePaper: EmployeePaper,
        ContractProcess: ContractProcess,
        CommendProcess: CommendProcess,
        DisciplineProcess: DisciplineProcess,
        InschangeProcess: InschangeProcess,
        WorkingProcess: WorkingProcess,
        // WorkingProcessBefor: WorkingProcessBefor,
        // SalaryProcess: SalaryProcess,
        // PositionLevel: PositionLevel,
        // Insurance: Insurance,
        // Concurrently: Concurrently,
        // WorkAbroad: WorkAbroad,
        // Zoning: Zoning,
    });

    const [routes] = React.useState([
        { key: 'Family', title: 'Thân nhân' },
        { key: 'EmployeePaper', title: 'Giấy tờ' },
        { key: 'ContractProcess', title: 'Hợp đồng' },
        { key: 'CommendProcess', title: 'Khen thưởng' },
        { key: 'DisciplineProcess', title: 'Kỷ luật' },
        { key: 'InschangeProcess', title: 'Biến động bảo hiểm' },
        { key: 'WorkingProcess', title: 'Quyết định thay đổi' },
        // { key: 'WorkingProcessBefor', title: 'Công tác trước khi vào công ty' },
        // { key: 'SalaryProcess', title: 'Lương' },
        // { key: 'PositionLevel', title: 'Bậc định vị' },
        // { key: 'Insurance', title: 'Tham gia bảo hiểm' },
        // { key: 'Concurrently', title: 'Kiêm nhiệm' },
        // { key: 'WorkAbroad', title: 'Công tác nước ngoài' },
        // { key: 'Zoning', title: 'Quy hoạch' },

    ]);

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
                        style={{ backgroundColor: NewColor[themes].button.approve }}
                        tabStyle={{ minHeight: 30, width: layout.width * 2 / 5 }} // here
                        renderLabel={({ route, focused, color }) => (
                            <View
                                style={[
                                    styles.tabContainer,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.tabText,
                                        { color: NewColor[themes].text.header, fontWeight: 'bold' }
                                    ]}
                                >
                                    {route.title}
                                </Text>
                            </View>
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
    },
    tabContainer: {
    },
    tabText: {
        fontSize: fontSize.extraSmall,
    },
})