import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
} from "react-native";
import React, { useState } from "react";
import { RadarChart } from "react-native-charts-wrapper";
import styles from "./styles";
import color from "../../Themes/color";

interface Props {
  legend: any;
  data: any;
  xAxis: any;
  description?: string;
  descriptionSize?: number;
  descriptionColor?: string;
  drawWeb: boolean;
  webLineWidth?: number;
  webLineWidthInner?: number;
  webAlpha?: number;
  webColor?: string;
  webColorInner?: string;
  skipWebLineCount?: number;
}

const RadarChartScreen = (props: Props) => {
  const { legend, data, xAxis, description, descriptionColor, descriptionSize, drawWeb, webLineWidth, webLineWidthInner, webAlpha, webColor, webColorInner, skipWebLineCount } = props
  const [selectedEntry, setSelectedEntry] = useState<any>();

  const handleSelect = (event: any) => {
    let entry = event.nativeEvent;
    if (entry == null) {
      setSelectedEntry(null);
    } else {
      setSelectedEntry(JSON.stringify(entry));
    }

    // console.log(event.nativeEvent);
  };

  return (
    <View style={styles.container}>
      <RadarChart
        style={styles.chart}
        data={data}
        xAxis={xAxis}
        yAxis={{ drawLabels: true }}
        chartDescription={{ text: description , textSize: descriptionSize, textColor: processColor(descriptionColor)}}
        legend={legend}
        drawWeb={drawWeb}
        webLineWidth={webLineWidth}
        webLineWidthInner={webLineWidthInner}
        webAlpha={webAlpha}
        webColor={processColor(webColor)}
        webColorInner={processColor(webColorInner)}
        skipWebLineCount={skipWebLineCount}
        onSelect={handleSelect}
        onChange={(event) => console.log(event.nativeEvent)}
      />
    </View>
  );
};

export default RadarChartScreen;
