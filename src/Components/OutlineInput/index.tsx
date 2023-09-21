import { View, KeyboardTypeOptions } from "react-native";
import React, { useState, useEffect } from "react";
import { InputOutline } from "react-native-input-outline";
import { fontSize } from "../../Themes";
import useThemeColors from "../../Hooks/useThemeColors";
import NewColor from "../../Themes/NewColor";
import { Pixel10, Pixel20 } from "../../Utils/Transform";

interface Props {
  placeholder: string;
  error?: string | undefined;
  assistiveText?: string | undefined;
  characterCount?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
  value: string | undefined;
  onChangeText: Function;
  inactiveColor?: string,
  trailingIcon?: React.FC<{}> | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  backgroundColor?: string | undefined;
  activeColor?: string | undefined;
  fontColor?: string | undefined;
  borderColorPrimary?: string | undefined;
  borderColorSecondary?: string | undefined
}

export default function OutlineInput(props: Props) {
  const [borderColor, setBorderColor] = useState<string | undefined>(
    props.borderColorSecondary
  );
  useEffect(() => {
    if (props.value == "") {
      setBorderColor(props.borderColorSecondary);
    } else {
      setBorderColor(props.borderColorPrimary);
    }
  }, [props.value]);
  const themes = useThemeColors().themes || 'default';

  return (
    <View
      style={{
        paddingHorizontal: Pixel20,
        marginTop: Pixel10,
        marginBottom: Pixel20,
      }}
    >
      <InputOutline
        allowFontScaling={false}
        placeholder={props.placeholder}
        error={props.error}
        assistiveText={props.assistiveText}
        characterCount={props.characterCount}
        fontSize={fontSize.small}
        errorFontSize={fontSize.XXXS}
        errorColor={NewColor[themes].text.warning}
        assistiveTextFontSize={fontSize.XXXS}
        characterCountFontSize={fontSize.XXXS}
        paddingVertical={fontSize.XXS}
        paddingHorizontal={fontSize.small}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={(text) => props.onChangeText(text)}
        trailingIcon={props.trailingIcon}
        inactiveColor={props.inactiveColor || borderColor}
        activeColor={props.activeColor || NewColor[themes].text.require}
        autoCapitalize={props.autoCapitalize}
        backgroundColor={props.backgroundColor}
        fontColor={props.fontColor}
        style={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: "transparent",
        }}
      />
    </View>
  );
}
