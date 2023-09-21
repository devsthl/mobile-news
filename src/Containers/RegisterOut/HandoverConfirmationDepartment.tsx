import { View, Text } from "react-native";
import React from "react";
import AppText from "../../Components/AppText";
import styles from "./styles";
import InputView from "../../Components/InputView";

export default function HandoverConfirmationDepartment() {
    return (
        <View style={styles.viewContainer}>
            <AppText style={styles.header}>{`BP xác nhận bàn giao công việc`}</AppText>
            <AppText style={styles.textBold}>{`Bàn giao công việc`}</AppText>
            <InputView
                title="Bàn giao tài liệu, công việc"
                value=""
            />
            <InputView
                title="Khác"
                value=""
            />
            {/* <AppText>{`Bàn giao tài liệu, công việc:`}</AppText> */}
            {/* <AppText>{`Khác:`}</AppText> */}
        </View>
    );
}
