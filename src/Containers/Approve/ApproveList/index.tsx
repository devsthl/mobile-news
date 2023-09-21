import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Header from "../../../Components/Header";
import styles from "./style";
import color from "../../../Themes/color";
import fontsize from "../../../Themes/fontSize";
import { SVGBack } from "../../../Assets/SVG";
import ItemApprove from "../ItemApprove";

import useThemeColors from '../../../Hooks/useThemeColors'
import NewColor from '../../../Themes/NewColor'
interface Props {
  navigation: any;
  Title: any;
  data: any;
}

const { width, height } = Dimensions.get("window");

const ApproveList = (props: Props) => {
  const { navigation, Title, data } = props;
  console.log(data);
  console.log(data.length);
  const themes = useThemeColors().themes || 'default';

  let title = "";
  if (Title != null) {
    if (Title == "ApproveExplanation") {
      title = "Phê duyệt vắng/giải trình";
    }
    if (Title == "ApproveLateInEarlyOut") {
      title = "Phê duyệt đi muộn về sớm";
    }
    if (Title == "ApproveOT") {
      title = "Phê duyệt OT";
    }
  } else {
    title = "";
  }
  const _onNavigation = () => {
    navigation.navigate(Title);
  };
  return (
    <View style={[styles.container, { backgroundColor: NewColor[themes].primary }]}>
      <Header
        title={title}
        iconLeft={<SVGBack color="white" />}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={[styles.bodyContainer, { backgroundColor: NewColor[themes].background.screen }]}>
        <ScrollView style={{ flex: 1, marginTop: 10 }}>
          {data.length != undefined && data.length !== 0 ? (
            data.map((item: any, index: any) => {
              return (
                <ItemApprove
                  onPress={() => _onNavigation()}
                  iconLeft={
                    item.image != null ? (
                      <Image
                        style={{
                          width: width * 0.1,
                          height: width * 0.1,
                          borderRadius: (width * 0.1) / 2,
                        }}
                        source={{ uri: item.image }}
                      />
                    ) : (
                      <Image
                        resizeMode="contain"
                        style={[styles.iconFlat2]}
                        source={require("../../../Assets/Images/logoLogin.png")}
                      />
                    )
                  }
                  title={`${item.name} | ${item.date}`}
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
                style={{ fontSize: fontsize.large, color: NewColor[themes].text.input }}
              >
                {"Danh sách rỗng"}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default ApproveList;
