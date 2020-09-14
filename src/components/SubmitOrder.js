import React, {useState, useEffect} from "react";

import {parseNumWithComma, parseDate, addMinutes} from "../helpers";
import CONSTANTS from "../constants";
import "../styles/submitorder.scss"

const {START, END} = CONSTANTS.WORK_HOURS;

const calculateDeadline = (date, timeSpan) => {
    const newDate = new Date(date.getTime());
    const timeBeforeMidnight = (24 - END) * 60;
    const reseted = new Date(newDate.getTime());
    const minsInDay = 24 * 60;
    const addDays = Math.round(timeSpan / minsInDay);
    reseted.setHours(10, 30);
    reseted.setDate(reseted.getDate() + 1);
    newDate.setMinutes(newDate.getMinutes() + timeSpan);
    newDate.setDate(newDate.getDate() + addDays);
    if (newDate.getHours() >= END) {
        let timeLeftDate = new Date(date);
        timeLeftDate.setHours(19, 0);
        let rest = (newDate.getTime() - timeLeftDate.getTime()) / 60000;
        return calculateDeadline(reseted, rest)
    } else if (newDate.getHours() < START) {
        let timeLeftDate = new Date(newDate);
        timeLeftDate.setHours(0, 0);
        let rest = (newDate.getTime() - timeLeftDate.getTime()) / 60000;
        console.log(newDate.getHours(), timeLeftDate.getDate())
        return calculateDeadline(reseted, rest + timeBeforeMidnight)
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
        }
        ;
        const minsToAdd = Math.ceil(length / minLength) * 60;
        let newDate = new Date(current.getTime());

        if (current.getHours() >= END) {
            newDate.setDate(newDate.getDate() + 1);
            newDate.setHours(10, 0)
        } else if (current.getHours() < START) {
            newDate.setHours(10)
        }

        if (length <= minLength) {
            newDate = calculateDeadline(newDate, 60);
        } else if (length > minLength) {
            newDate = calculateDeadline(newDate, minsToAdd + 30)
        }
        ;
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