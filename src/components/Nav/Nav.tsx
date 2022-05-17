import React from 'react';
import c from './Nav.module.scss'
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <>
            <nav className={c.nav}>
                <ul className={c.menu}>
                    <li className={c.list}>
                        <NavLink className={c.link} to="/Profile" activeClassName={c.active}>Profile</NavLink>
                    </li>
                    <li className={c.list}>
                        <NavLink className={c.link} to="/Messages" activeClassName={c.active}>Messages</NavLink>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="/News">News</a>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="/Music">Music</a>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="/Settings">Settings</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;