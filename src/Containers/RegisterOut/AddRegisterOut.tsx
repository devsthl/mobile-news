import React from "react";
import AppText from "../../Components/AppText";
import { View } from 'react-native'
import InputView from "../../Components/InputView";
import { fontSize } from "../../Themes";
import styles from './styles'
const AddRegisterOut = () => {

    return (
        <View style={styles.viewContainer}>
            <AppText style={styles.header}>{`Đề xuất nghỉ việc`}</AppText>
            <AppText>{`Thông tin nghỉ việc`}</AppText>
            <InputView
                title={`Ngày viết đơn`}
                value=""
                require={true}
            />
            <InputView
                title={`Lý do nghỉ việc`}
                value=""
                require={true}
            />
            <InputView
                title={`Ngày làm việc cuối đề xuất`}
                value=""
                require={true}
            />
            <AppText style={styles.textItalic}>{`Lưu ý: QLTT trao đổi với các bên liên quan trước khi nhập thông tin; Nhân viên cần báo trước ít nhất 30 ngày với Hợp đồng xác định thời hạn, 45 ngày với Hợp đồng không xác định thời hạn, 3 ngày với nhân viên đang thử việc`}</AppText>
            <AppText style={styles.textBold}>{`Cam kết`}</AppText>
            <AppText>{`Tất cả thông tin cá nhân được khai báo là hoàn toàn đúng:`}</AppText>
        </View>
    )
}

export default AddRegisterOut;