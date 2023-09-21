import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Donut, { PropsData } from "../../../Components/Donut";
import AppText from "../../../Components/AppText";
import { Metrics, fontSize } from "../../../Themes";
import color from "../../../Themes/color";


const VIEW_LIST = 170 * Metrics.ratioH
const MARGIN = 10 * Metrics.ratioH

interface PropsDonutHome {
    dataDonut: PropsData[] | []
}

export default function DonutHome(props: PropsDonutHome) {
    const { dataDonut } = props;

    return (
        dataDonut.length > 0 ?
            <View style={{ height: VIEW_LIST, flexDirection: 'row', marginHorizontal: 2 * MARGIN, padding: MARGIN, borderRadius: MARGIN, backgroundColor: color.white, marginBottom: MARGIN }}>
                <Donut
                    data={dataDonut}
                />
                <View style={{ flex: 1, marginLeft: 2 * MARGIN }}>
                    {dataDonut.map((item: any) => {
                        return (
                            <View style={{ flexDirection: 'row', marginTop: MARGIN, }}>
                                <View style={{ width: 2 * MARGIN, height: 2 * MARGIN, backgroundColor: item.color, marginRight: MARGIN }} />
                                <AppText style={{ fontSize: fontSize.XXS, fontWeight: 'bold' }}>{`${item.name} : ${item.point}`}</AppText>
                            </View>
                        )
                    })}
                </View>
            </View> :
            null

    );
}
