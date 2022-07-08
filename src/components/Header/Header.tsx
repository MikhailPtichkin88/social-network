import React from 'react';
import c from './Header.module.scss'

import logo from "../../images/logo.svg";
import ava from '../../images/avatar.jpg'
import {NavLink} from "react-router-dom";
import {PhotosType} from "../../redux/users-reducer";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    photo?: string | null
}

const Header = (props: HeaderPropsType) => {

    let imgSrc = (props.photo) ? (props.photo) : ava
    return (
        <>
            <header className={c.header}>
                <div className="container">

                    <div className={c.wrapper}>
                        <img className={c.logo} src={logo} alt="logo"/>
                        <div className={c.loginBlock}>
                            <img className={c.avatar} src={imgSrc} alt='avatar'/>
                            {
                                props.isAuth
                                    ? <span className={c.userName}>{props.login}</span>
                                    : <NavLink className={c.loginLink} to={'/login'}>Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;