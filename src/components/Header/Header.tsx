import React from 'react';
import c from './Header.module.scss'

import logo from "../../images/logo.svg";
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
    isAuth:boolean
    login:string | null
}

const Header = (props:HeaderPropsType) => {
    return (
        <>
            <header className={c.header}>
                <div className="container">

                    <div className={c.wrapper}>
                        <img className={c.img} src={logo} alt="logo"/>
                        <div className={c.loginBlock}>
                            {
                                props.isAuth
                                    ? props.login
                                    :  <NavLink className={c.link} to={'/login'}>Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;