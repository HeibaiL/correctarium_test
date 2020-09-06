import React from "react";

import SubmitOrder from './SubmitOrder';
import OrderInputs from "./OrderInputs";
import LanguageSelect from "./LanguageSelect";
import useSelect from "../hooks/useSelect";
import useInput from "../hooks/useInput";
import '../styles/ordermain.scss'

const OrderMain = () => {
    const {selected, onSelectChange} = useSelect();
    const {input, onInputChange} = useInput();
    return <div className="order-main">
        <div className="container">
            <div className="make-order">
                <h3>ЗАМОВИТИ РЕДАГУВАННЯ</h3>
                <p>
                    <span>Виправимо всі помилки, приберемо всі дурниці, перефразуємо невдалі місця, але сильно текст
                        <br/> не переписуватимемо.
                          Зайвих виправлень не буде.<a href="https://correctarium.com/ua/price/proofreading"> Детальніше про редагування</a>
                    </span>
                </p>
                <OrderInputs onInputChange={onInputChange} input={input}/>
                <LanguageSelect onSelectChange={onSelectChange}/>
            </div>
            <SubmitOrder />
        </div>

    </div>
};
export default OrderMain;