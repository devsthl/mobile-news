import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "../../../Components/Header";
import TextInformation from "../../../Components/TextInformation";
import fontSize from "../../../Themes/fontSize";
import { SVGBack } from "../../../Assets/SVG";
import AppText from "../../../Components/AppText";
import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'

export default function ApproveHistory({ navigation }: any) {
  let typeId = 3;
  const themes = useThemeColors().themes || 'default';

  const ViewShow = () => {
    if (typeId == 3) {
      return (
        <View>
          <TextInformation
            textLeft={"Tên nhân viên"}
            textRight={"Tên nhân viên"}
          />
          <TextInformation textLeft={"Từ ngày"} textRight={"09/02/2023"} />
          <TextInformation textLeft={"Đến ngày"} textRight={"09/02/2023"} />
          <TextInformation textLeft={"Đăng ký về sớm"} textRight={"10'"} />
          <TextInformation textLeft={"Đăng ký đi muộn"} textRight={"10'"} />
          <TextInformation textLeft={"Lý do"} textRight={"Gì đó"} />
        </View>
      );
    } else if (typeId == 2) {
      return (
        <View>
          <TextInformation textLeft={"Tên nhân viên"} textRight={"Nhân viên"} />
          <TextInformation textLeft={"Từ ngày"} textRight={"09/02/2023"} />
          <TextInformation textLeft={"Đến ngày"} textRight={"09/02/2023"} />
          <TextInformation
            textLeft={"Đăng ký vắng/giải trình"}
            textRight={"Vắng"}
          />
          <TextInformation textLeft={"Lý do"} textRight={"Gì đó"} />
        </View>
      );
    } else if (typeId == 1) {
      return (
        <View>
          <TextInformation
            textLeft={"Tên nhân viên"}
            textRight={"Tên nhân viên"}
          />
          <TextInformation textLeft={"Ngày"} textRight={"09/02/2023"} />
          <TextInformation textLeft={"Bắt đầu"} textRight={"17:58"} />
          <TextInformation textLeft={"Kết thúc"} textRight={"19:28"} />
          <TextInformation textLeft={"Lý do"} textRight={"Chưa xong việc"} />
        </View>
      );
    } else {
      return <View></View>;
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={"Lịch sử phê duyệt"}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView style={[styles.scrollView, { backgroundColor: NewColor[themes].background.screen }]}>
        <View style={[styles.body, { backgroundColor: NewColor[themes].background.primary }]}>
          <View style={styles.viewTitleInput}>
            <AppText style={{ fontSize: fontSize.medium, opacity: 0.8, fontWeight: '600', marginTop: 15, marginBottom: 10 }}>{"Thông tin đăng ký"}</AppText>
          </View>
          <View style={{ width: "100%" }}>
            <ViewShow />
          </View>
          <View style={styles.viewTitleInput}>
            <AppText style={{ fontSize: fontSize.medium, opacity: 0.8, fontWeight: '600', marginTop: 15, marginBottom: 10 }}>{"Đã duyệt"}</AppText>
          </View>
          <TextInformation
            textLeft={"Ngày duyệt"}
            textRight={"09/02/2023 10:00"}
          />
          <TextInformation textLeft={"Người duyệt"} textRight={"Tên sếp"} />
          <TextInformation
            textLeft={"Chức vụ người duyệt"}
            textRight={"Giám đốc nhân sự"}
          />
          <TextInformation textLeft={"Lý do"} textRight={"Gì đó"} />
        </View>
      </ScrollView>
    </View>
  );
}
