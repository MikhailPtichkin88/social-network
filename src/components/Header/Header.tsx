import React from 'react';
import './Header.scss'

import logo from "../../images/logo.svg";

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <img className='header__img' src={logo} alt="logo"/>
                </div>
            </header>
        </>
    );
};

export default Header;