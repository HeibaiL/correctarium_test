import React from "react";

import '../styles/orderinputs.scss'

const OrderInputs = ({onInputChange, input}) => (
    <div className="order-inputs">
        <div className="input_filed required"><input onChange={onInputChange} name="mail" placeholder="Ваша ел. почта"/>
        </div>
        <div className="input_filed"><input onChange={onInputChange} name="name" placeholder="Ваше ім'я"/></div>
        <div className="text"><textarea name="text" onChange={onInputChange}/>
            <label style={input.text ? {display: 'none'} : null}>
                <span> Уведіть текст або </span>
                <a href="#">завантажте файл</a>
            </label></div>
        <p className="text_length">{input.text && input.text.length}</p>
    </div>
)
export default OrderInputs;