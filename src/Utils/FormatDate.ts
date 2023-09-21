import moment from "moment";
function FormatDate(strDate: string){
    if(strDate.trim()==''){
        return '-'
    }
    const date = moment(strDate);
    return date.format('DD/MM/YYYY')
}

export default FormatDate;