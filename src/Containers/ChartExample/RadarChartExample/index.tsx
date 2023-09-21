import { View, Text, ScrollView, processColor } from "react-native";
import React from "react";
import Header from "../../../Components/Header";
import { SVGBack } from "../../../Assets/SVG";
import styles from "./style";
import { Metrics, fontSize } from "../../../Themes";
import color from "../../../Themes/color";
import RadarChartScreen from "../../../Components/RadarChartScreen";
import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import { Pixel10 } from "../../../Utils/Transform";


const RadarChartExample = ({ navigation }: any) => {
  const themes = useThemeColors().themes || 'default';
  const VIEW_LIST = 170 * Metrics.ratioH;
  const legend: any = {
    enabled: true,
    textSize: fontSize.extraSmall,
    form: "CIRCLE",
    wordWrapEnabled: true,
  };

  const data: any = {
    dataSets: [
      {
        values: [100, 100, 110, 105, 115, 110],
        label: "DS 1",
        config: {
          color: processColor("#FF8C9D"),
          drawFilled: true,
          fillColor: processColor("#FF8C9D"),
          fillAlpha: 50,
          lineWidth: 2,
        },
      },
      {
        values: [115, 115, 100, 105, 110, 120],
        label: "DS 2",
        config: {
          color: processColor("#C0FF8C"),
          drawFilled: true,
          fillColor: processColor("#C0FF8C"),
          fillAlpha: 50,
          lineWidth: 2,
        },
      },
      {
        values: [105, 105, 115, 121, 110, 105],
        label: "DS 3",
        config: {
          color: processColor("#8CEAFF"),
          drawFilled: true,
          fillColor: processColor("#8CEAFF"),
          fillAlpha: 50,
          lineWidth: 2,
        },
      },
    ],
  };

  const xAxis = {
    valueFormatter: ["A", "B", "C", "D", "E", "F"],
  };
  return (
    <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={"Radar chart example"}
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
              height: 3 * VIEW_LIST,
              backgroundColor: NewColor[themes].background.primary,
              borderRadius: Pixel10,
              width: "90%",
              marginVertical: Pixel10,
            }}
          >
            <RadarChartScreen
              legend={legend} //format từng cột
              data={data} // Dữ liệu
              xAxis={xAxis} //tiêu đề từng cột
              drawWeb={true} // hiển thị các trục của sơ đồ
              description={"Sơ đồ"} // mô tả
              descriptionColor="red" // chỉnh màu sắc mô tả
              descriptionSize={16} // chỉnh kích cỡ chữ mô tả
              webLineWidth={1} // độ dày đường trục
              webLineWidthInner={1} // độ dày đường viền ngoài
              webAlpha={255} // chỉnh mờ màu sắc trục
              webColor={"red"} // màu sắc đường trục
              webColorInner={"green"} // màu sắc dường viền ngoài
              skipWebLineCount={0} // Số đỉnh xen kẽ bỏ qua trục tính từ đỉnh đầu tiên
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RadarChartExample;
