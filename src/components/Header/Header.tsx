import React from 'react';
import c from './Header.module.scss'
import logo from "../../images/logo.svg";
import ava from '../../images/avatar.jpg'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    photo?: string | null
    id:string| null
}

const Header = (props: HeaderPropsType) => {
console.log(props)
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
                                    ? <NavLink className={c.userName} to={'/profile/'+props.id}>{props.login}</NavLink>
                                    : <NavLink className={c.loginLink} to={'/Login'}>Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;