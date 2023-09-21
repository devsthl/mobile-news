import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppText from "../../Components/AppText";
import styles from "./styles";
import InputView from "../../Components/InputView";

export default function HCNSApprove() {
    return (
        <View style={styles.viewContainer}>
            <AppText style={styles.header}>{`HCNS xác nhận đề xuất nghỉ việc`}</AppText>
            <ScrollView style={{ flex: 1 }}>
                <AppText style={styles.appText}>{`Xác nhận Đơn xin nghỉ việc của các bên`}</AppText>
                <InputView
                    title="Quản lý trực tiếp"
                    value=""
                />
                <InputView
                    title="Nhân sự"
                    value=""
                />
                <InputView
                    title="Ngày làm việc cuối QLTT đề xuất"
                    value=""
                />
                <InputView
                    title="Ngày làm việc cuối HCNS xác nhận"
                    value=""
                />
                <InputView
                    title="Ý kiến QLTT:"
                    value=""
                />
                <InputView
                    title="Ý kiến:"
                    value=""
                />
                <AppText style={styles.textBold}>{`Đối tượng bàn giao`}</AppText>
                <InputView
                    title="Hành chính nhân sự:"
                    value=""
                />
                <InputView
                    title="Tài chính kế toán:"
                    value=""
                />
            </ScrollView>
        </View>
    );
}
