import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import ItemDiscipline, { PropsDiscipline } from '../../Components/ItemProcessing/ItemDiscipline';

export default function DisciplineProcess() {
    const { data } = useFetchData(api, 'getDisciplineInfo', () => {
        return {}
    })
    // const ListDiscipline: PropsDiscipline[] = [
    //     {
    //         DIS1: 'Kỷ luật 1',
    //         DIS2: 'Kỷ luật 2',
    //     },
    //     {
    //         DIS1: 'Kỷ luật 3',
    //         DIS2: 'Kỷ luật 4',
    //     },
    // ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {data.map((item: any, index: number) => {
                    return (
                        <ItemDiscipline key={index}
                            OBJ_NAME={item.disciplineObjName||'-'}
                            TYPE={item.disciplineType||'-'}
                            REASON={item.reason||'-'}
                            MONEY={item.money||'-'}
                            CREATE_DATE={item.createDate||'-'}
                            EFFECT_DATE={item.effectDate||'-'}
                            STATUS={item.statusName||'-'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}