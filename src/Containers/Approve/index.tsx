import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import {
  SVGBack,
  SVGcontinue,
  SvgHistory,
  SvgLateEarly,
  SvgOff,
  SvgOT,
} from "../../Assets/SVG";
import Header from "../../Components/Header";
import styles from "./style";

import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
import ItemApprove from "./ItemApprove";
const { width, height } = Dimensions.get("window");

export default function Approve({ navigation }: any) {
  const [dataFlat, setDataFlat] = useState([
    {
      id: 1,
      name: "Phê duyệt vắng/giải trình",
      icon: <SvgOff />,
    },
    {
      id: 2,
      name: "Phê duyệt đi muộn về sớm",
      icon: <SvgLateEarly />,
    },
    {
      id: 3,
      name: "Phê duyệt OT",
      icon: <SvgOT />,
    },
    {
      id: 4,
      name: "Lịch sử phê duyệt",
      icon: <SvgHistory />,
    },
  ]);
  const themes = useThemeColors().themes || 'default';

  const _onNavigation = (index: number) => {
    switch (index) {
      case 0:
        navigation.navigate("ApproveExplanationList");
        break;
      case 1:
        navigation.navigate("ApproveLateInEarlyOutList");
        break;
      case 2:
        navigation.navigate("ApproveOTList");
        break;
      case 3:
        navigation.navigate("ApproveHistoryList");
        break;
    }
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={"Phê duyệt"}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}>
        {dataFlat.map((item, index) => {
          return (
            <ItemApprove
              iconLeft={item.icon}
              title={item.name}
              badge={1}
              onPress={() => { _onNavigation(index) }}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
