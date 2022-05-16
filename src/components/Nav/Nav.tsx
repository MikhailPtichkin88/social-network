import React from 'react';
import './Nav.scss'


const Nav = () => {
    return (
        <>
            <nav className='nav'>
                <ul className="nav__menu">
                    <li className="nav__list">
                        <a className="nav__link" href="#">Profile</a></li>
                    <li className="nav__list">
                        <a className="nav__link" href="#">Messages</a></li>
                    <li className="nav__list">
                        <a className="nav__link" href="#">News</a></li>
                    <li className="nav__list">
                        <a className="nav__link" href="#">Music</a></li>
                    <li className="nav__list">
                        <a className="nav__link" href="#">Settings</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;