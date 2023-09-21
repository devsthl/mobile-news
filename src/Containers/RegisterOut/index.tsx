import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import '../../I18n';
import ScreenHeader from '../../Components/ScreenHeader'
import AppText from '../../Components/AppText'
import { useTranslation } from 'react-i18next';
import StepIndicator from 'react-native-step-indicator';
import { fontSize } from '../../Themes';
import AddRegisterOut from './AddRegisterOut';
import ManagerApprove from './ManagerApprove';
import ManagerHCNSApprove from './ManagerHCNSApprove';
import HCNSApprove from './HCNSApprove';
import HCNSHandingOverWork from './HCNSHandingOverWork';
import TCKTApproveHandingOverWork from './TCKTApproveHandingOverWork';
import HandoverConfirmationDepartment from './HandoverConfirmationDepartment';
import CompleteYourResignationLetter from './CompleteYourResignationLetter';
import ApproveOut from './ApproveOut';
import { SVGBack, SVGCancel } from '../../Assets/SVG';

import useThemeColors from '../../Hooks/useThemeColors'
import NewColor from '../../Themes/NewColor'
interface Props {
    navigation: any,
}

const withSwiper = Dimensions.get('screen').width / 10 * 7
const widthText = Dimensions.get('screen').width / 6
const height = Dimensions.get('screen').height

const labels = [
    "Đề xuất nghỉ việc",
    "QL xác nhận đề xuất nghỉ việc",
    "Quản lý HCNS xác nhận",
    "HCNS xác nhận đề xuất nghỉ việc",
    "HCNS xác nhận bàn giao",
    "TCKT xác nhận bàn giao",
    "BP xác nhận bàn giao công việc",
    "Hoàn thành hồ sơ thôi việc",
    "Phê duyệt hồ sơ thôi việc"
];

const RegisterOut = ({ navigation }: Props) => {
    const themes = useThemeColors().themes || 'default';


    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: NewColor[themes].primary,
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: NewColor[themes].primary,
        stepStrokeUnFinishedColor: NewColor[themes].chart.chart1,
        separatorFinishedColor: NewColor[themes].primary,
        separatorUnFinishedColor: NewColor[themes].chart.chart1,
        stepIndicatorFinishedColor: NewColor[themes].primary,
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: fontSize.XXXS,
        currentStepIndicatorLabelFontSize: fontSize.XXXS,
        stepIndicatorLabelCurrentColor: NewColor[themes].primary,
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: NewColor[themes].chart.chart1,
        labelColor: NewColor[themes].chart.chart1,
        labelSize: fontSize.XXXS,
        currentStepLabelColor: NewColor[themes].primary,
    }
    const { t, i18n } = useTranslation();

    const [currentPosition, setCurrentPosition] = useState(5)
    const [currentPositionSelected, setCurrentPositionSelected] = useState(5)

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value)
            .then(() => console.log('success'))
            .catch(err => console.log(err));
    };
    const refScrollView = useRef<ScrollView>(null)

    const ScreenDetail = ({ value }: { value: number }) => {
        switch (value) {
            case 0: return (
                <AddRegisterOut />
            )
            case 1: return (
                <ManagerApprove />
            )
            case 2: return (
                <ManagerHCNSApprove />
            )
            case 3: return (
                <HCNSApprove />
            )
            case 4: return (
                <HCNSHandingOverWork />
            )
            case 5: return (
                <TCKTApproveHandingOverWork />
            )
            case 6: return (
                <HandoverConfirmationDepartment />
            )
            case 7: return (
                <CompleteYourResignationLetter />
            )
            case 8: return (
                <ApproveOut />
            )

            default: return (
                <View />
            )
        }
    }

    return (
        <ScreenHeader
            title={'Đăng ký nghỉ'}
            // hideHeader
            paddingVertical
            // paddingHorizontal
            iconLeft={<SVGBack />}
            onPressLeft={() => navigation.goBack()}
            iconRight={<SVGCancel />}
            backgroundColor={NewColor[themes].primary}
        // hideHeader
        >
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>
                    <View style={{ height: 90, flexDirection: 'row' }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ height: 90, flex: 1 }}
                            ref={refScrollView}
                        >
                            <View style={{ width: 900 }}>

                                <StepIndicator
                                    customStyles={customStyles}
                                    currentPosition={currentPosition}
                                    labels={labels}
                                    stepCount={9}
                                    // direction={'vertical'}
                                    onPress={(position) => {
                                        // console.log(position - currentPositionSelected)
                                        setCurrentPositionSelected(position)
                                        const s = position > 0 ? position - 1 : position
                                        refScrollView?.current?.scrollTo({ x: s * 100 })
                                    }}
                                    renderLabel={
                                        ({ position, label }) => {
                                            return (
                                                <AppText
                                                    numberOfLines={4}
                                                    style={{
                                                        fontSize: fontSize.XXXS,
                                                        // maxWidth: widthText,
                                                        width: 100,
                                                        textAlign: 'center',
                                                        color: position == currentPositionSelected ? NewColor[themes].primary : NewColor[themes].primarySecondary,
                                                    }}
                                                >{label}</AppText>
                                            )
                                        }
                                    }
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{
                        // width: '75%',
                        // backgroundColor: 'red',
                        height: height - 100,
                        flex: 1,
                    }}>
                        <ScreenDetail value={currentPositionSelected} />
                    </View>

                </View>
            </View>
        </ScreenHeader >
    )
}


export default RegisterOut;