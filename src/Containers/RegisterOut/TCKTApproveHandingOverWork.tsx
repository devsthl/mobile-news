import { View, Text } from "react-native";
import React from "react";
import AppText from "../../Components/AppText";
import styles from "./styles";
import InputView from "../../Components/InputView";

export default function TCKTApproveHandingOverWork() {
    return (
        <View style={styles.viewContainer}>
            <AppText style={styles.header}>{`TCKT xác nhận bàn giao`}</AppText>
            <AppText style={styles.textBold}>{`Bàn giao tài chính, kế toán`}</AppText>
            <InputView
                title="Tạm ứng"
                value=""
            />
            <InputView
                title="Chi phí liên quan đến khách hàng, đối tác"
                value=""
            />
            <InputView
                title="Chi phí vượt hạn mức ngân sách:"
                value=""
            />
            <InputView
                title="Chi phí khác(nếu có)"
                value=""
            />
            {/* <AppText>{`Tạm ứng:`}</AppText> */}
            {/* <AppText>{`Chi phí liên quan đến khách hàng, đối tác...:`}</AppText> */}
            {/* <AppText>{`Chi phí vượt hạn mức ngân sách:`}</AppText> */}
            {/* <AppText>{`Chi phí khác(nếu có):`}</AppText> */}
        </View>
    );
}
