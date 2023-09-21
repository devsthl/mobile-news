import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import {
  SVGBack,
  SVGcontinue,
  SvgFilter,
  SvgSuccess,
  SvgCancel,
  SvgPending
} from "../../../../Assets/SVG";
import Header from "../../../../Components/Header";
import styles from "./style";
import fontsize from "../../../../Themes/fontSize";
import ItemApprove from "../../ItemApprove";
// import CheckBox from 'react-native-check-box'
import useThemeColors from '../../../../Hooks/useThemeColors'
import NewColor from '../../../../Themes/NewColor'

const { width, height } = Dimensions.get("window");

const data = [
  {
    name: "Nguyễn Thị A",
    orgName: "Phòng sản phẩm",
    typeId: 1,
    date: "08/02/2023",
    status: 1,
  },
  {
    name: "Nguyễn Văn B",
    orgName: "Phòng BO",
    typeId: 2,
    date: "09/02/2023",
    status: 2,
  },
  {
    name: "Nguyễn Thị C",
    orgName: "Phòng kế toán",
    typeId: 3,
    date: "10/02/2023",
    status: 3,
  },
];

interface Props {
  navigation: any;
}

const ApproveHistoryList = (props: Props) => {
  const { navigation } = props;
  const themes = useThemeColors().themes || 'default';
  const [VisibleModal, setVisibleModal] = useState(false);
  const _onNavigation = () => {
    navigation.navigate("ApproveHistory");
  };
  return (
    <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={"Lịch sử phê duyệt"}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
        iconRight={<SvgFilter color="white" />}
        onPressRight={() => {
          setVisibleModal(!VisibleModal);
        }}
      />
      <View style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingTop: 10 }}>
            {data.length != undefined && data.length !== 0 ? (
              data.map((item: any, index: any) => {
                let Icon = SvgSuccess;
                if (item.status == 3) {
                  Icon = SvgCancel;
                }
                if (item.status == 2) {
                  Icon = SvgSuccess;
                }
                if (item.status == 1) {
                  Icon = SvgPending;
                }
                let type = "";
                if (item.typeId == 1) {
                  type = "Đăng ký đi muộn về sớm";
                }
                if (item.typeId == 2) {
                  type = "Đăng ký nghỉ";
                }
                if (item.typeId == 3) {
                  type = "Đăng ký OT";
                }
                return (
                  <ItemApprove
                    onPress={() => _onNavigation()}
                    iconLeft={<Icon />}
                    title={`${type} | ${item.date}`}
                  />
                );
              })
            ) : (
              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 30,
                  height: "100%",
                  marginTop: 8,
                  flex: 1,
                }}
              >
                <Text
                  allowFontScaling={false}
                  style={{ fontSize: fontsize.large, color: NewColor[themes].text.placeholder }}
                >
                  {"Danh sách rỗng"}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <Modal visible={VisibleModal} transparent>
        <TouchableOpacity
          style={[styles.modalContainer, { backgroundColor: NewColor[themes].background.modal }]}
          onPress={() => setVisibleModal(!VisibleModal)}
        >
          <View style={[styles.checkboxContainer, { backgroundColor: NewColor[themes].background.primary }]}>
            {/* <CheckBox
              isChecked={() => {}}
              onClick={() => {}}
              rightText={"Tất cả"}
              rightTextStyle={{ fontSize: fontSize.medium }}
            />
            <CheckBox
              isChecked={() => {}}
              onClick={() => {}}
              rightText={"Đăng ký vắng/ giải trình"}
              rightTextStyle={{ fontSize: fontSize.medium }}
            />
            <CheckBox
              isChecked={() => {}}
              onClick={() => {}}
              rightText={"Đăng ký OT"}
              rightTextStyle={{ fontSize: fontSize.medium }}
            />
            <CheckBox
              isChecked={() => {}}
              onClick={() => {}}
              rightText={"Đăng ký đi muộn về sớm"}
              rightTextStyle={{ fontSize: fontSize.medium }}
            /> */}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ApproveHistoryList;
