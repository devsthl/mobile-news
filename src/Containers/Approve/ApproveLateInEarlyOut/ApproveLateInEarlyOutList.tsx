import { View, Text } from 'react-native'
import React from 'react'
import ApproveList from '../ApproveList'

export default function ApproveLateInEarlyOutList({ navigation }: any) {
  const data = [
    {
      name: 'Nguyễn Thị A',
      date: '17/06/2022',
      image: null
    }, 
    {
      name: 'Nguyễn Văn B',
      date: '04/09/2022',
      image: null
    }
  ];
  return (
    <ApproveList Title={'ApproveLateInEarlyOut'} navigation={navigation} data={data}/>
  )
}
