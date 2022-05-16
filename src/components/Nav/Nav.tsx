import React from 'react';
import c from './Nav.module.scss'


const Nav = () => {
    return (
        <>
            <nav className={c.nav}>
                <ul className={c.menu}>
                    <li className={c.list}>
                        <a className={c.link} href="#">Profile</a>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="#">Messages</a>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="#">News</a>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="#">Music</a>
                    </li>
                    <li className={c.list}>
                        <a className={c.link} href="#">Settings</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;