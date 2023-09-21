import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../../Components/Header";
import TextInformation from "../../../Components/TextInformation";
import fontSize from "../../../Themes/fontSize";
import color from "../../../Themes/color";
import styles from "./style";
import { SVGBack } from "../../../Assets/SVG";
import AppText from "../../../Components/AppText";
// import CheckBox from 'react-native-check-box';

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import BtnApprove from "../Button/BtnApprove";
import BtnCancel from "../Button/BtnCancel";

export default function ApproveOT({ navigation }: any) {
  const themes = useThemeColors().themes || 'default';

  return (
    <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={"Phê duyệt vắng/giải trình"}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView
        style={[styles.scrollView, { backgroundColor: NewColor[themes].background.screen }]}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardVerticalOffset={90}
          behavior={Platform.OS === "ios" ? "position" : "position"}
        >
          <View style={[styles.body, {
            backgroundColor: NewColor[themes].background.primary,
            borderColor: NewColor[themes].border
          }]}>
            <TextInformation
              textLeft={"Tên nhân viên"}
              textRight={"Tên nhân viên"}
            />
            <TextInformation
              textLeft={"Ngày bắt đầu"}
              textRight={"09/02/2023"}
            />
            <TextInformation textLeft={"Bắt đầu"} textRight={"17:58"} />
            <TextInformation textLeft={"Kết thúc"} textRight={"19:28"} />
            <TextInformation textLeft={"Lý do"} textRight={"Gì đó"} />
            {/* <CheckBox
              isChecked={() => {}}
              onClick={() => {}}
              rightText={"Chuyển sang quỹ nghỉ bù"}
              rightTextStyle={{ fontSize: fontSize.medium }}
            /> */}
          </View>
          <View style={[styles.viewInputContainer, {
            backgroundColor: NewColor[themes].background.screen,
            borderTopColor: NewColor[themes].border,
          }]}>
            <View style={styles.viewTitleInput}>
              <AppText require style={{ fontSize: fontSize.medium, opacity: 0.8, fontWeight: '600', marginTop: 15, marginBottom: 10 }}>{'Ý kiến'}</AppText>
              <AppText style={[styles.TextNote, { color: NewColor[themes].text.placeholder }]}>
                {"(Bắt buộc nếu từ chối đăng ký)"}
              </AppText>
              {/* <Text allowFontScaling={false} style={[styles.TextCalander, defaultStyle.fontInter]}>{I18n.t("idea")}</Text> */}
            </View>
            <View style={[styles.textAreaContainer, {
              backgroundColor: NewColor[themes].background.primary,
              borderColor: NewColor[themes].border
            }]}>
              <TextInput
                allowFontScaling={false}
                style={[styles.textArea]}
                underlineColorAndroid="transparent"
                placeholder={"Vui lòng nhập ý kiến"}
                placeholderTextColor={NewColor[themes].text.placeholder}
                numberOfLines={10}
                multiline={true}
                onChangeText={() => { }}
                onSubmitEditing={() => { }}
                returnKeyType={"done"}
              />
            </View>
          </View>
          <View style={styles.ViewFooter}>
            <BtnApprove
              title="Duyệt"
            />
            <BtnCancel
              title="Từ chối"
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View >
  );
}
