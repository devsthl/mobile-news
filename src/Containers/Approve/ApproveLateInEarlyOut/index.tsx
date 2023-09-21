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
import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
import BtnApprove from "../Button/BtnApprove";
import BtnCancel from "../Button/BtnCancel";

export default function ApproveLateInEarlyOut({ navigation }: any) {
  const themes = useThemeColors().themes || 'default';

  return (
    <View style={[styles.container, {
      backgroundColor: NewColor[themes].primary
    }]}>
      <Header
        title={"Phê duyệt vắng/giải trình"}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView
        style={[styles.scrollView, {
          backgroundColor: NewColor[themes].background.screen
        }]}
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
              textLeft={"Bắt đầu"}
              textRight={"09/02/2023"}
            />
            <TextInformation
              textLeft={"Kết thúc"}
              textRight={"09/02/2023"}
            />
            <TextInformation
              textLeft={"Đi muộn"}
              textRight={"12'"}
            />
            <TextInformation
              textLeft={"Về sớm"}
              textRight={"13'"}
            />
            <TextInformation textLeft={"Lý do"} textRight={"Gì đó"} />
          </View>
          <View style={[styles.viewInputContainer, {
            backgroundColor: NewColor[themes].background.screen,
          }]}>
            <View style={styles.viewTitleInput}>
              <AppText require style={{ fontSize: fontSize.medium, opacity: 0.8, fontWeight: '600', marginTop: 15, marginBottom: 10 }}>{'Ý kiến'}</AppText>
              <AppText style={[styles.TextNote, {
                backgroundColor: NewColor[themes].text.placeholder
              }]}>
                {"(Bắt buộc nếu từ chối đăng ký)"}
              </AppText>
            </View>
            <View style={[styles.textAreaContainer, {
              backgroundColor: NewColor[themes].background.primary,
              borderColor: NewColor[themes].border
            }]}>
              <TextInput
                allowFontScaling={false}
                style={[styles.textArea, {
                  color: NewColor[themes].text.normal
                }]}
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
            <BtnApprove title="Duyệt" />
            <BtnCancel title="Từ chối" />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

