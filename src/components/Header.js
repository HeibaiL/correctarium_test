import React from "react";

import logo from '../cr_logo_w.png';
import '../styles/header.scss'

const Header = () => (
    <div className="header">
        <div className="container">
            <div className="header-info">
              <img src={logo} className="logo" alt="Logo"/>
                <ul>
                    <li>Про нас</li>
                    <li>Ціни</li>
                    <li>Редактори</li>
                    <li>Блог</li>
                </ul>
            </div>
            <button className="header-button"> Перевірити текст </button>
        </div>
    </div>
)
export default Header;