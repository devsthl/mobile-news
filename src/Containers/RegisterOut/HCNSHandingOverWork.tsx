import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppText from "../../Components/AppText";
import styles from "./styles";
import InputView from "../../Components/InputView";

export default function HCNSHandingOverWork() {
    return (
        <View style={styles.viewContainer}>
            <AppText style={styles.header}>{`HCNS xác nhận bàn giao`}</AppText>
            <ScrollView style={{ flex: 1 }}>
                <AppText style={styles.appText}>{`Nhân sự`}</AppText>
                <InputView
                    title="Số ngày phép chưa sử dụng"
                    value=""
                />
                <InputView
                    title="Phí bồi hoàn"
                    value=""
                />
                <AppText>{`Bồi hoàn`}</AppText>
                <InputView
                    title="Số ngày công hưởng lương"
                    value=""
                />
                <InputView
                    title="Bảo hộ lao động, thẻ NV"
                    value=""
                />
                {/* <AppText>{`Số ngày phép chưa sử dụng:`}</AppText> */}
                {/* <AppText>{`Phí bồi hoàn:`}</AppText> */}
                {/* <AppText>{`Số ngày công hưởng lương:`}</AppText> */}
                {/* <AppText>{`Bảo hộ lao động, thẻ NV:`}</AppText> */}
                <AppText>{`Đã bàn giao`}</AppText>
                <AppText style={styles.textBold}>{`Hành chính`}</AppText>
                <AppText>{`Giữ lương:`}</AppText>
                <InputView
                    title="Tài khoản truy cập / Email"
                    value=""
                />
                <InputView
                    title="Khoản khác"
                    value=""
                />
                <InputView
                    title="Vi phạm thời hạn báo trước"
                    value=""
                />
                {/* <AppText>{`Tài khoản truy cập / Email:`}</AppText> */}
                {/* <AppText>{`Khoản khác:`}</AppText> */}
                {/* <AppText>{`Vi phạm thời hạn báo trước:`}</AppText> */}
                <AppText>{`Tài sản cấp phát`}</AppText>
            </ScrollView>
        </View>
    );
}
