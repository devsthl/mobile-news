import { View, Text } from "react-native";
import React from "react";
import AppText from "../../Components/AppText";
import styles from "./styles";
import InputView from "../../Components/InputView";

export default function ManagerQLNSApprove() {
    return (
        <View style={styles.viewContainer}>
            <AppText style={styles.header}>{`Quản lý HCNS xác nhận`}</AppText>
            <InputView
                title="Quản lý HCNS"
                value=""
                require
            />
            <InputView
                title="Nhận xét, đề xuất"
                value=""
                require
            />
        </View>
    );
}
