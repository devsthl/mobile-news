import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import api from '../../Utils/generateAPI';
import useFetchData from '../../Hooks/useFetchData';
import ItemContract, { PropsContract } from '../../Components/ItemProcessing/ItemContract'

export default function ContractProcess() {
    const { data } = useFetchData(api, 'getContractInfor', () => {
        return {}
    })
    // const ListContract: PropsContract[] = [
    //     {
    //         CT1: 'Hợp đồng 1',
    //         CT2: 'Hợp đồng 2',
    //     },
    //     {
    //         CT1: 'Hợp đồng 3',
    //         CT2: 'Hợp đồng 4',
    //     },
    // ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {data.map((item: any, index: number) => {
                    return (
                        <ItemContract key={index}
                            CONTRACT_NO={item.contractNo||'-'}
                            CONTRACT_NAME={item.contractTypeName||'-'}
                            ORG_NAME={item.orgName||'-'}
                            START_DATE={item.startDate||'-'}
                            EXPIRE_DATE={item.expireDate||'-'}
                            STATUS={item.statusName||'-'}
                            SIGNER_NAME={item.signerName||'-'}
                            SIGNER_POSITION={item.signerPosition||'-'}
                            SIGN_DATE={item.signDate||'-'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}