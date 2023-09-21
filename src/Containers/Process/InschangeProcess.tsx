import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import ItemInschange, { PropsInschange } from '../../Components/ItemProcessing/ItemInschange';

export default function InschangeProcess() {
    const { data } = useFetchData(api, 'getInschangeInfo', () => {
        return {}
    })
    // const ListInschange: PropsInschange[] = [
    //     {
    //         INS1: 'Biến động 1',
    //         INS2: 'Biến động 2',
    //     },
    //     {
    //         INS1: 'Biến động 3',
    //         INS2: 'Biến động 4',
    //     },
    // ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {data.map((item: any, index: number) => {
                    return (
                        <ItemInschange key={index}
                            TYPE_NAME={item.changeTypeName||'-'}
                            MONTH={item.changeMonth||'-'}
                            SALARY_OLD={item.salaryOld||'-'}
                            SALARY_NEW={item.salaryNew||'-'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}