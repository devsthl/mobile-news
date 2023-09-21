import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import ItemFamilyProcess from '../../Components/ItemProcessing/ItemFamilyProcess';

export default function Family() {
    const { data } = useFetchData(api, 'getEmployeeFamily', () => {
        return {}
    })
    // console.log('dddddddd', data)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {data.map((item: any, index: number) => {
                    return (
                        <ItemFamilyProcess key={index}
                            HO_TEN={item.name || '-'}
                            RELATIONSHIP={item.relationshipName || '-'}
                            BIRTH={item.birth || '-'}
                            ADDRESS={item.address || '-'}
                            MST={item.taxNo || '-'}
                            DAYSTART={item.dateStart || '-'}
                            DAYEND={item.dateEnd || '-'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}