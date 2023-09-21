import {
    SvgRegister,
    SvgApprove,
    SvgJoboard,
    SvgPaycheck,
    SvgNews,
    SvgGPS,
    SvgSurvey,
    SvgMeeting,
    SvgEmployees,
    SvgAll,
    SvgPdf
} from '../Assets/SVG'

const dataFlatList: any = [
    // {
    //     id: 2,
    //     name: "Đăng ký",
    //     image: SvgRegister,
    //     count: 0
    // },
    {
        id: 3,
        name: "Phê Duyệt",
        image: SvgApprove,
        count: 0
    },
    // {
    //     id: 4,
    //     name: "Bảng công",
    //     image: SvgJoboard,
    //     count: 0
    // },
    {
        id: 5,
        name: "Phiếu Lương",
        image: SvgPaycheck,
        count: 0
    },
    {
        id: 6,
        name: 'Bảng tin',
        image: SvgNews,
        count: 0
    },
    // {
    //     id: 10,
    //     name: 'Chấm công GPS',
    //     image: SvgGPS,
    //     count: 0
    // },
    {
        id: 7,
        name: 'Khảo sát',
        image: SvgSurvey,
        count: 0
    },
    {
        id: 11,
        name: 'Phòng họp',
        image: SvgMeeting,
        count: 0
    },
    // {
    //     id: 9,
    //     name: 'CreatSurvey',
    //     image: SvgRegister,
    //     count: 0
    // },
    {
        id: 12,
        name: 'QT nghỉ',
        image: SvgMeeting,
        count: 0
    },
    {
        id: 13,
        name: 'Danh sách nhân viên',
        image: SvgEmployees,
        count: 0
    },
    {
        id: 15,
        name: 'Tài liệu PDF',
        image: SvgPdf,
        count: 0
    },

];

const allData: any = [
    {
        id: 2,
        name: "Đăng ký",
    },
    {
        id: 3,
        name: "Phê Duyệt",
    },
    {
        id: 4,
        name: "Bảng công",
    },
    {
        id: 5,
        name: "Phiếu Lương",
    },
    {
        id: 6,
        name: 'Bảng tin',
    },
    {
        id: 10,
        name: 'Chấm công GPS',
    },
    {
        id: 7,
        name: 'Khảo sát',
    },
    {
        id: 11,
        name: 'Phòng họp',
    },
    {
        id: 12,
        name: 'QT nghỉ',
    },
    {
        id: 13,
        name: 'Danh sách nhân viên'
    },
    {
        id: 14,
        name: 'Chấm công QR'
    },
    {
        id: 15,
        name: 'Tài liệu PDF'
    },
    // {
    //     id: 99,
    //     name: 'Tất cả'
    // },

];

export { dataFlatList, allData }
