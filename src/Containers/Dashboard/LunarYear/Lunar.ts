const getCan = (year:number)=>{
    const du = year%10
    // return du
    switch (du) {
        case 0:
            return 'Canh'
        case 1:
            return 'Tân'
        case 2:
            return 'Nhâm'
        case 3:
            return 'Quý'
        case 4:
            return 'Giáp'
        case 5:
            return 'Ất'
        case 6:
            return 'Bính'
        case 7:
            return 'Đinh'
        case 8:
            return 'Mậu'
        case 9:
            return 'Kỷ'
    
        default:
            break;
    }
}

const getChi = (year: number) =>{
    const du = year%12
    switch (du) {
        case 0:
            return 'Thân'
        case 1:
            return 'Dậu'
        case 2:
            return 'Tuất'
        case 3:
            return 'Hợi'
        case 4:
            return 'Tý'
        case 5:
            return 'Sỉu'
        case 6:
            return 'Dần'
        case 7:
            return 'Mão'
        case 8:
            return 'Thìn'
        case 9:
            return 'Tỵ'
        case 10:
            return 'Ngọ'
        case 11:
            return 'Mùi'
    
        default:
            break;
    }
}

const LunarYear = (year: number) => {
    const can= getCan(year)
    const chi = getChi(year)
    return `${can} ${chi}`
}

export {getCan, getChi, LunarYear}