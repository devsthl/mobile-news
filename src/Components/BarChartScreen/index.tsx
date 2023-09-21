import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
} from "react-native";
import React, { useState } from "react";
import { BarChart } from "react-native-charts-wrapper";
import styles from "./styles";
import color from "../../Themes/color";

// export interface legend{
//   enabled: boolean,
//   textSize: number,
//   form: 'SQUARE',
//   formSize: 14,
//   xEntrySpace: 10,
//   yEntrySpace: 5,
//   formToTextSpace: 5,
//   wordWrapEnabled: true,
//   maxSizePercent: 0.5
// }
interface Props {
  legend: any;
  data: any;
  highlights: any;
  xAxis: any;
  animation?: number;
  max?: number;
  drawBarShadow?: boolean;
  drawValueAboveBar?: boolean;
}

const BarChartScreen = (props: Props) => {
  const { legend, data, xAxis, highlights, animation, max, drawBarShadow, drawValueAboveBar } = props

  const [selectedEntry, setSelectedEntry] = useState<any>();

  const handleSelect = (event: any) => {
    let entry = event.nativeEvent;
    if (entry == null) {
      setSelectedEntry(null);
    } else {
      setSelectedEntry(JSON.stringify(entry));
    }
  };
  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        xAxis={xAxis}
        data={data}
        animation={{ durationX: animation }}
        legend={legend}
        visibleRange={{ x: { min: 2, max: max } }}
        drawBarShadow={drawBarShadow}
        drawValueAboveBar={drawValueAboveBar}
        onSelect={handleSelect}
        onChange={(event) => console.log(event.nativeEvent)}
        highlights={highlights}
        drawBorders={false}
        drawGridBackground={true}
      // gridBackgroundColor={processColor('red')}
      />
    </View>
  );
};

export default BarChartScreen;
