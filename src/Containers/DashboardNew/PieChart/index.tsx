import { View, Text, processColor } from 'react-native'
import React, { useState, useEffect } from 'react'
import { PieChart } from 'react-native-charts-wrapper'
import styles from './style'
import color from '../../../Themes/color'
import AppText from '../../../Components/AppText'
import { fontSize } from '../../../Themes'

interface Legend {
    enabled: boolean,
    textSize: number,
    form: String,
    horizontalAlignment: String,
    verticalAlignment: String,
    orientation: String,
    wordWrapEnabled: boolean
}
// interface PropsPie {
//     dataSets: dataSets[]
// }
interface dataSets {
    values: values[],
    label: String,
    config: config
}
interface values {
    value: number,
    label: String
}
interface config {
    colors: any,
    valueTextSize: number,
    valueTextColor: any,
    sliceSpace: number,
    selectionShift: number,
    valueFormatter: String,
    valueLineColor: any,
    textColor: any,
    valueLinePart1Length: number
}
interface Props {
    data: dataSets[],
    legend: Legend,
    highlights: []
}
const PieChartView = (props: Props) => {
    const { data, legend, highlights } = props
    const [dataChart, setDataChart] = useState<any>()
    useEffect(() => {
        setDataChart(data)
    }, [])
    return (
        <View style={styles.viewPie}>
            <View style={{
                marginVertical: 15,
                marginHorizontal: 10,
                borderBottomWidth: 2,
                borderBottomColor: 'gray',
                marginBottom: 10
            }}>
                <Text style={{ fontSize: fontSize.small, fontWeight: '700', marginVertical: 5 }}>Biểu đồ thống kê hợp đồng</Text>
            </View>
            <PieChart
                style={{
                    flex: 1,
                    backgroundColor: color.white,
                    borderRadius: 20,
                }}
                logEnabled={true}
                chartBackgroundColor={processColor('white')}
                // chartDescription={description}
                data={dataChart}
                legend={legend}
                highlights={highlights}
                // extraOffsets={{ left: 5, top: 5, right: 5, bottom: 5 }}
                entryLabelColor={processColor('green')}
                entryLabelTextSize={10}
                // entryLabelFontFamily={'HelveticaNeue-Medium'}
                drawEntryLabels={true}
                rotationEnabled={true}
                rotationAngle={45}
                usePercentValues={true}
                // styledCenterText={{ text: '', color: processColor('pink'), fontFamily: 'HelveticaNeue-Medium', size: 20 }}
                centerTextRadiusPercent={100}
                holeRadius={10}
                holeColor={processColor('#f0f0f0')}
                transparentCircleRadius={12}
                transparentCircleColor={processColor('#f0f0f088')}
                maxAngle={360}
                // onSelect={this.handleSelect.bind(this)}
                onChange={(event) => console.log(event.nativeEvent)} />
        </View>
    )
}

export default PieChartView