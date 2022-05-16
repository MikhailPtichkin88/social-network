import React from 'react';
import c from './Header.module.scss'

import logo from "../../images/logo.svg";

const Header = () => {
    return (
        <>
            <header className={c.header}>
                <div className="container">
                    <img className={c.img} src={logo} alt="logo"/>
                </div>
            </header>
        </>
    );
};

export default Header;