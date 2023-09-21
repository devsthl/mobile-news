import { View, Text } from "react-native";
import React from "react";
import AppText from "../../Components/AppText";
import { fontSize } from "../../Themes";
import InputView from "../../Components/InputView";
import styles from "./styles";

export default function ManagerApprove() {
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <AppText style={styles.header}>{`Quản lý xác nhận đề xuất nghỉ việc`}</AppText>
            <AppText style={styles.appText}>{`Xác nhận đơn xin nghỉ việc của các bên`}</AppText>
            <InputView
                title="Quản lý trực tiếp"
                value=""
            />
            <InputView
                title="Nhân sự"
                value=""
                require
            />
            <InputView
                title="Ngày làm việc cuối QLTT đề xuất"
                value=""
                require
            />
            <InputView
                title="Đối tượng nhận bàn giao công việc:"
                value=""
                require
            />
            <InputView
                title="Ý kiến"
                value=""
            />
            <InputView
                title="Quản lý HCNS"
                value=""
                require
            />
            <AppText style={styles.textItalic}>{`Lưu ý: QLTT trao đổi với các bên liên quan trước khi nhập thông tin; Nhân viên cần báo trước ít nhất 30 ngày với Hợp đồng xác định thời hạn, 45 ngày với Hợp đồng không xác định thời han, 3 ngày với nhân viên đang thử việc`}</AppText>
        </View>
    );
}
