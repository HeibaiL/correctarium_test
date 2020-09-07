import React from "react";

import {parseNumWithComma} from "../helpers";
import CONSTANTS from "../constants";
import "../styles/submitorder.scss"

const SubmitOrder = ({length, language}) => {

    const calculatePrice = (length, language) => {
        if (!length || !language) {
            return "0,00"
        }
        let price = CONSTANTS[language].PRICE.MIN;
        let perPage = CONSTANTS[language].PRICE.MIN / CONSTANTS[language].TEXT_LENGTH.FOR_PRICE;
        let payedLength = length - CONSTANTS[language].TEXT_LENGTH.FOR_PRICE;
        if (length > 1000) {
            price = price + perPage * payedLength;
        }
        return parseNumWithComma(price);
    }
    const calculateTime = (length, language) => {
        if (!length || !language) {
            return ""
        }
        let str = "Здамо за: ";
        // if (length <= CONSTANTS[language].TEXT_LENGTH.FOR_TIME) {
        //     str = str + "1 годину"
        // } else if (length <= CONSTANTS[language].TEXT_LENGTH.FOR_PRICE * 2) {
        //     str = str + "2 години"
        // } else if (length <= CONSTANTS[language].TEXT_LENGTH.FOR_PRICE * 3) {
        //     str = str + "3 години"
        // }
        return str;

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
            {calculateTime(length, language)}
        </div>
        <button className="submit_button">
            Замовити
        </button>
    </div>
}
export default SubmitOrder;