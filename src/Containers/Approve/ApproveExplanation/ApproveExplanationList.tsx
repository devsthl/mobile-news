import { View, Text } from "react-native";
import React from "react";
import ApproveList from "../ApproveList";

export default function ApproveExplanationList({ navigation }: any) {
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
  // const data = [];
  return <ApproveList Title={"ApproveExplanation"} navigation={navigation} data={data}/>;
}
