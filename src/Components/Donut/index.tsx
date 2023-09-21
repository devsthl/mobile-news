import { View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Svg, { G, Circle, } from "react-native-svg";

export interface PropsData {
    point: number,
    color: string,
    name: string,
}

interface PropsDonut {
    data: PropsData[],
    taget?: number
}

export default function Donut(props: PropsDonut) {

    const arr1 = [100, 200, 400]

    const { data, taget } = props
    const arr = data.map((item) => (item.point))
    const [listPercent, setListPercent] = useState<any[]>([]);
    const radius = 70;
    const circleCir = 2 * Math.PI * radius;
    let tagetAmount = taget || 0;

    function percentGet() {
        const tong = arr.reduce((a, b) => a + b, 0)
        let list: any[] = []
        if (tong > tagetAmount) {
            tagetAmount = tong;
        }
        let sum = 0
        data.map((item) => {
            let newname = sum + item.point;
            sum = newname;
            const per = circleCir - (circleCir * newname / tagetAmount)
            const obj = { per: per, color: item.color }
            list.unshift(obj)
        })
        return list;
    }

    useEffect(() => {
        setListPercent(percentGet())
    }, [data])


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Svg height="160" width="160" viewBox="0 0 180 180">
                <G rotation={-90} originX="90" originY="90">
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        // stroke={`#77a300`}
                        fill="transparent"
                        strokeWidth="40"
                    />
                    {listPercent.map((item, index) => {
                        return (
                            <Circle
                                cx="50%"
                                cy="50%"
                                r={radius}
                                stroke={item.color}
                                fill="transparent"
                                strokeWidth="35"
                                strokeDasharray={circleCir}
                                strokeDashoffset={item.per}
                            />
                        )
                    }
                    )}
                </G>
            </Svg>

        </View>
    )
}