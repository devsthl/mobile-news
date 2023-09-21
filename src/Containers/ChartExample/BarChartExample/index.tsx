import { View, Text, ScrollView, processColor } from "react-native";
import React from "react";
import Header from "../../../Components/Header";
import { SVGBack } from "../../../Assets/SVG";
import styles from "./style";
import BarChartScreen from "../../../Components/BarChartScreen";
import { Metrics, fontSize } from "../../../Themes";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import { Pixel10 } from "../../../Utils/Transform";
const BarChartExample = ({ navigation }: any) => {
  const themes = useThemeColors().themes || 'default';

  const VIEW_LIST = 170 * Metrics.ratioH;
  const legend: any = {
    enabled: true,
    textSize: fontSize.extraSmall,
    form: "SQUARE",
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    formToTextSpace: 5,
    wordWrapEnabled: true,
    maxSizePercent: 0.5,
  };

  const data: any = {
    dataSets: [
      {
        values: [100, 105, 102, 110, 114, 109, 105, 99, 95],
        label: "Monthly package",
        config: {
          color: processColor("teal"),
          barShadowColor: processColor("lightgrey"),
          highlightAlpha: 90,
          highlightColor: processColor("red"),
        },
      },
    ],
    config: {
      barWidth: 0.7,
    },
  };

  const highlights: any = [{ x: 3 }, { x: 6 }];

  const xAxis = {
    valueFormatter: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
    ],
    granularityEnabled: true,
    granularity: 1,
  };
  return (
    <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={"Bar chart example"}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView
        style={[styles.scrollView, { backgroundColor: NewColor[themes].background.screen }]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              height: 2.5 * VIEW_LIST,
              backgroundColor: NewColor[themes].background.primary,
              borderRadius: Pixel10,
              width: "90%",
              marginVertical: Pixel10,
            }}
          >
            <BarChartScreen
              legend={legend} //format từng cột
              data={data} // Dữ liệu
              highlights={highlights} //in đậm các cột được chọn, chuỗi có thể không có giá trị
              xAxis={xAxis} //tiêu đề từng cột
              animation={4000} // thời gian xuất hiện từng cột
              max={9} //số lượng hiển thị cột
              drawBarShadow={true} //bóng trên từng cột
              drawValueAboveBar={true} //hiển thị giá trị trên đầu cột
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BarChartExample;
