import React from "react";
import { SvgAll, SvgApprove, SvgEmployees, SvgGPS, SvgJoboard, SvgMeeting, SvgNews, SvgPaycheck, SvgPdf, SvgQrCheckIn, SvgRegister, SvgSurvey } from "../../../Assets/SVG";
import useThemeColors from "../../../Hooks/useThemeColors";
import NewColor from "../../../Themes/NewColor";
interface PropsItem {
    id: number,
    // value?: string,
}




const SvgWithId = (props: PropsItem) => {
    const themes = useThemeColors().themes || 'default'
    const { id } = props;
    switch (id) {
        case 1:
            return (<SvgRegister color={NewColor[themes].icon.normal} />)
        case 2:
            return (<SvgRegister color={NewColor[themes].icon.normal} />)
        case 3:
            return (<SvgApprove color={NewColor[themes].icon.normal} />)
        case 4:
            return (<SvgJoboard color={NewColor[themes].icon.normal} />)
        case 5:
            return (<SvgPaycheck color={NewColor[themes].icon.normal} />)
        case 6:
            return (<SvgNews color={NewColor[themes].icon.normal} />)
        case 7:
            return (<SvgSurvey color={NewColor[themes].icon.normal} />)
        case 8:
            return (<SvgMeeting color={NewColor[themes].icon.normal} />)
        // case 9:
        // return (<SvgRegister />)
        case 10:
            return (<SvgGPS color={NewColor[themes].icon.normal} />)
        case 11:
            return (<SvgMeeting color={NewColor[themes].icon.normal} />)
        case 12:
            return (<SvgRegister color={NewColor[themes].icon.normal} />)
        case 13:
            return (<SvgEmployees color={NewColor[themes].icon.normal} />)
        case 14:
            return (<SvgQrCheckIn color={NewColor[themes].icon.normal} />)
        case 15:
            return (<SvgPdf color={NewColor[themes].icon.normal} />)
        case 99:
            return (<SvgAll color={NewColor[themes].icon.primary} />)
        default:
            return (<SvgGPS color={NewColor[themes].icon.normal} />)

    }
};

export default SvgWithId;