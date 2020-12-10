import numeral from "numeral"

const dollarFilter = (val) => {
    if(!val) return "$0.00"
    let res = numeral(val).format('$0,0.000a');
    return res;
}
const percentFilter = (val) => {
    if(!val) return "0.00%"
    let res = numeral(val).format('0.00%');
    return res;
}

export {dollarFilter, percentFilter}