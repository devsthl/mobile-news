import { View, Text } from "react-native";
import React from "react";
import AppText from "../../Components/AppText";
import styles from "./styles";
import InputView from "../../Components/InputView";

export default function CompleteYourResignationLetter() {
    return (
        <View style={styles.viewContainer}>
            <AppText style={styles.header}>{`Hoàn thành hồ sơ thôi việc`}</AppText>
            <AppText style={styles.textBold}>{`Phê duyệt`}</AppText>
            <InputView
                title="Người phê duyệt"
                value=""
            />
            <InputView
                title="Vị trí công việc"
                value=""
            />
            <InputView
                title="Trạng thái phê duyệt"
                value=""
            />
            <AppText>{`Người phê duyệt:`}</AppText>
            <AppText>{`Vị trí công việc:`}</AppText>
            <AppText>{`Trạng thái phê duyệt:`}</AppText>
        </View>
    );
}
