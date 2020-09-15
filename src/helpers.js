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

export const is_weekend = function (date1) {
    const dt = new Date(date1);

    if (dt.getDay() === 6 || dt.getDay() === 0) {
        return true;
    }
    return false;
};

export const calculateDeadline = (date,
                           timeSpan) => {
    const newDate = new Date(date);
    const startWorkDate = new Date(newDate.getTime());

    startWorkDate.setHours(10, 0);

    if(is_weekend(newDate)){
        newDate.setDate(newDate.getDate() + 1);
        return calculateDeadline(newDate, timeSpan)
    }

    const workingMins = 60 * 9;

    const leftMins = workingMins - (newDate.getTime() - startWorkDate.getTime()) / 60000;

    if (timeSpan > leftMins) {
        const requiredDays = Math.floor(workingMins / leftMins);
        const restToAdd = (timeSpan - leftMins);
        newDate.setDate(requiredDays + newDate.getDate());
        newDate.setHours(10, 0);
        return calculateDeadline(newDate, restToAdd)

    }

    newDate.setMinutes(newDate.getMinutes() + timeSpan);

    return newDate
}
