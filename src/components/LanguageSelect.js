import React, {useState} from "react";

import '../styles/languageselect.scss'

const LanguageSelect = ({onSelectChange}) => (
    <div className="select">
        <h4>МОВА</h4>
        <div className="select-items" onChange={onSelectChange}>
            <label className="select_item">Українська
                <input type="radio" name="radio" value="ukrainian"/>
                <span className="checkmark"/>
            </label>
            <label className="select_item">Російська
                <input type="radio" name="radio" value="russian"/>
                <span className="checkmark"/>
            </label>
            <label className="select_item">Англійська
                <input type="radio" name="radio" value="english"/>
                <span className="checkmark"/>
            </label>

        </div>
    </div>);
export default LanguageSelect