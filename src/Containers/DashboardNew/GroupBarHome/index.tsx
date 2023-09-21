import { View, Text, StyleSheet, processColor } from "react-native";
import React, { useState } from "react";
import { BarChart } from 'react-native-charts-wrapper';
import color from "../../../Themes/color";
import { fontSize } from "../../../Themes";

export default function GroupBarHome() {

    const legend: any = {
        enabled: true,
        textSize: fontSize.extraSmall,
        form: "SQUARE",
        formSize: fontSize.extraSmall,
        xEntrySpace: 10,
        yEntrySpace: 10,
        wordWrapEnabled: true
    }

    const data: any = {
        dataSets: [
            {
                values: [30, 40, 77, 81, 43],
                label: 'Company A',
                config: {
                    drawValues: false,
                    colors: [processColor('#A3EDBA')],
                }
            },
            {
                values: [40, 28, 50, 70, 79],
                label: 'Company B',
                config: {
                    drawValues: false,
                    colors: [processColor('#78758C')],
                }
            },
            {
                values: [35, 55, 40, 90, 82],
                label: 'Company C',
                config: {
                    drawValues: false,
                    colors: [processColor('#8087E8')],
                }
            }
        ],
        config: {
            barWidth: 0.2,
            group: {
                fromX: 0,
                groupSpace: 0.1,
                barSpace: 0.1,
            },
        }
    }

    const marker = {
        enabled: true,
        markerColor: processColor(color.primary),
        textColor: processColor('white'),
        markerFontSize: 14,
    }

    const highlights: any = [{ x: 1, y: 40 }, { x: 2, y: 50 }]
    const [selectedEntry, setSelectedEntry] = useState<any>()

    const handleSelect = (event: any) => {
        let entry = event.nativeEvent
        if (entry == null) {
            setSelectedEntry(null)
        } else {
            setSelectedEntry(JSON.stringify(entry))
        }

        console.log(event.nativeEvent)
    }

    const xAxis = {
        valueFormatter: ['1990', '1991', '1992', '1993', '1994'],
        granularityEnabled: true,
        granularity: 1,
        axisMaximum: 5,
        axisMinimum: 0,
        centerAxisLabels: true
    }
    return (
        <View style={styles.container}>
            <BarChart
                style={styles.chart}
                xAxis={xAxis}
                data={data}
                legend={legend}
                drawValueAboveBar={false}
                onSelect={handleSelect}
                onChange={(event) => console.log(event.nativeEvent)}
                // highlights={highlights}
                marker={marker}
                scaleEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chart: {
        flex: 1
    }
});