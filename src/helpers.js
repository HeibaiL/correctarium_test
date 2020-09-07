export const parseNumWithComma = num => {
    const str = num.toString().replace('.', ',');
    const commaInd = str.indexOf(',');
    let value = str + ",00"
    if (commaInd < 0) return value;
    const numAfterComma = str.slice(commaInd, commaInd + 3);

    if (numAfterComma.length < 3) {
        value = str.slice(0, commaInd) + numAfterComma + 0;
    } else {
        value = str.slice(0, commaInd) + numAfterComma;
    }
    return value;
};
