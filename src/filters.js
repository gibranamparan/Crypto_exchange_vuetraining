import numeral from "numeral"

const dollarFilter = (val) => {
    if(!val) return "$0.00"
    let res = numeral(val).format('$0,0.000a');
    return res;
}
const percentFilter = (val) => {
    val = val / 100;
    if(!val) return "0.00%"
    let res = numeral(val).format('0.000%');
    return res;
}

export {dollarFilter, percentFilter}