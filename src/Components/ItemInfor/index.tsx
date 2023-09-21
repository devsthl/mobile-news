import { View, Text, Image, ImageSourcePropType } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import useThemeColors from "../../Hooks/useThemeColors";
import NewColor from "../../Themes/NewColor";

interface Props {
  label: string;
  value: string;
  link?: ImageSourcePropType | undefined;
}

export default function ItemInfor(props: Props) {
  // const [text, setText] = useState<string | null>("");
  // useEffect(() => {
  //   if (props.content == "") {
  //     setText("-");
  //   } else {
  //     setText(props.content);
  //   }
  // }, [props.content]);
  const themes = useThemeColors().themes || 'default';

  return (
    <View style={styles.container}>
      <View style={styles.rowLabel}>
        <View style={styles.imageBox}>
          {props.link && <Image style={styles.image} source={props.link} />}
        </View>
        <Text style={[styles.label, { color: NewColor[themes].text.title }]}>{props.label}</Text>
      </View>
      <View style={styles.rowContent}>
        <Text style={[styles.content, { color: NewColor[themes].text.normal }]}>{props.value?.trim() == '' ? '-' : props.value}</Text>
      </View>
    </View>
  );
}
