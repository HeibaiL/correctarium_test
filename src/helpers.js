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

export const parseDate = Date => {
    const dd = String(Date.getDate()).padStart(2, '0');
    const mm = String(Date.getMonth() + 1).padStart(2, '0');
    const yyyy = Date.getFullYear();
    const date = mm + '.' + dd + '.' + yyyy;
    const hours = Date.getHours().toString().length < 2 ? "0" + Date.getHours() : Date.getHours();
    const minutes = Date.getMinutes().toString().length < 2 ? "0" + Date.getMinutes() : Date.getMinutes();
    const time = hours + ":" + minutes;
    return {date, time};
}

export function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}