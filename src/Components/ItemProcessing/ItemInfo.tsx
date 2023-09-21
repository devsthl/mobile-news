import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import AppText from "../AppText";

interface Props {
  label: string;
  value: string | undefined;
  link?: ImageSourcePropType | undefined;
}
export default function ItemInfo({ label, value, link }: Props) {
  return (
    <View style={{ marginTop: 8, marginLeft: 5 }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start"}}>
        <View style={{ marginRight: 10, height: 18, width: 18 }}>{link && <Image style={{ height: 20, width: 20 }} source={link} />}</View>
        <AppText style={{ fontWeight: "bold" }}>{label}</AppText>
      </View>
      <View>
        <AppText style={{ marginLeft: 28 }}>{value}</AppText>
      </View>
    </View>
  );
}
