import React from 'react';
import c from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import {AvatarsType} from "../../redux/sidebar-reducer";


export type SidebarAvatarsPropsType = {
    sidebarAvatars:Array<AvatarsType>
}

const Nav = (props:SidebarAvatarsPropsType) => {
    return (
        <>
            <nav className={c.nav}>
                <ul className={c.menu}>
                    <li className={c.list}>
                        <NavLink className={c.link} to="/profile" activeClassName={c.active}>Profile</NavLink>
                    </li>
                    <li className={c.list}>
                        <NavLink className={c.link} to="/messages" activeClassName={c.active}>Messages</NavLink>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="/news">News</a>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="/music">Music</a>
                    </li>
                    <li className={c.list}>
                        <NavLink className={c.link} to="/users" activeClassName={c.active}>Users</NavLink>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="/login">login</a>
                    </li>
                </ul>

                <Sidebar sidebarAvatars={props.sidebarAvatars}/>

            </nav>
        </>
    );
};

export default Nav;