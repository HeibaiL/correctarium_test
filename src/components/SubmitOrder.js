import React, {useState, useEffect} from "react";

import {parseNumWithComma, parseDate, addMinutes} from "../helpers";
import CONSTANTS from "../constants";
import "../styles/submitorder.scss"

const {START, END} = CONSTANTS.WORK_HOURS;

const resetDate = (date, inst) => {
    const hoursToAdd = date.getHours() - END >= 0 ? date.getHours() - END : date.getHours() + 24 - END;

    const newDate = new Date(date.getTime());

    newDate.setDate(date.getDate() + (inst ? 0 : 1));
    newDate.setHours(10 + hoursToAdd, 30);
    if (newDate.getHours() >= END) {
        return resetDate(newDate)
    }
    return newDate
}

const SubmitOrder = ({length, language}) => {
    const [current, setCurrent] = useState({});

    const minLength = language && CONSTANTS[language].TEXT_LENGTH.FOR_TIME;

    useEffect(() => {
        setCurrent(new Date());
    }, [])


    const calculatePrice = (length, language) => {
        if (!length || !language) {
            return "0,00"
        }
        let price = CONSTANTS[language].PRICE.MIN;
        let perPage = CONSTANTS[language].PRICE.MIN / CONSTANTS[language].TEXT_LENGTH.FOR_PRICE;
        let leftLength = length - CONSTANTS[language].TEXT_LENGTH.FOR_PRICE;
        if (length > 1000) {
            price = price + perPage * leftLength;
        }
        return parseNumWithComma(price);
    }

    const calculateTime = (length, language) => {
        if (!length || !language || !current) {
            return ""
        };

        const minsToAdd = Math.ceil(length / minLength) * 60;
        let newDate = new Date();

        if (length <= minLength) {
            newDate = addMinutes(current, 60);
        } else if (length > minLength) {
            newDate = addMinutes(current, minsToAdd + 30)
        }

        if (newDate.getHours() >= END) {
            newDate = resetDate(newDate)
        } else if (newDate.getHours() < START) {
            newDate = resetDate(newDate, "foo")
        }

        let addTime = newDate.getTime() - current.getTime();

        let {date, time} = parseDate(newDate);
        return `${date} о ${time}`;
    }

    return <div className="submit_order">
        <div className="price">
            <span>
                {calculatePrice(length, language)}
            </span>
            <span>
                грн
            </span>
        </div>
        <div className="estimated_time">
            <span> {language && length && "Термін виконання"} </span>
            <span>{calculateTime(length, language)}</span>
        </div>
        <button className="submit_button">
            Замовити
        </button>
    </div>
}
export default SubmitOrder;