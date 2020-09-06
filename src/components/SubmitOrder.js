import React from "react";

import "../styles/submitorder.scss"

const SubmitOrder = props => (
    <div className="submit_order">
        <div className="price">
            <span>
                {props.price}
            </span>
            <span>
                грн
            </span>
        </div>
        <button className="submit_button">
            Замовити
        </button>
    </div>)
export default SubmitOrder;