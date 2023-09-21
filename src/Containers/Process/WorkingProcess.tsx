import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import ItemWorkingProcess, { PropsWorkingProcess } from '../../Components/ItemProcessing/ItemWorkingProcess'

export default function WorkingProcess() {
    const { data } = useFetchData(api, 'getWorkingInfo', () => {
        return {}
    })
    // const ListWorkingProcess: PropsWorkingProcess[] = [
    //     {
    //         WOR1: 'Quyết định 1',
    //         WOR2: 'Quyết định 1',
    //     },
    //     {
    //         WOR1: 'Quyết định 1',
    //         WOR2: 'Quyết định 1',
    //     },
    // ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {data.map((item: any, index: number) => {
                    return (
                        <ItemWorkingProcess key={index}
                            DECISION_NO={item.decisionNo||'-'}
                            TYPE_NAME={item.typeName||'-'}
                            SALARY_TYPE={item.salaryType||'-'}
                            SAL_BASIC={item.salBasic||'-'}
                            SAL_TOTAL={item.salTotal||'-'}
                            SAL_PERCENT={item.salPercent||'-'}
                            SIGN_DATE={item.signDate||'-'}
                            EFFECT_DATE={item.effectDate||'-'}
                            SIGNER_NAME={item.signerName||'-'}
                            SIGNER_POSITION={item.signerPosition||'-'}
                            STATUS_NAME={item.statusName||'-'}
                            NOTE={item.note||'-'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}