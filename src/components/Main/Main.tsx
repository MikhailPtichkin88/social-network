import React from 'react';
import c from './Main.module.scss'
import bg from "../../images/bg.jpg";
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";

const Main = () => {
    return (
        <>
            <main className={c.main}>

                <img className={c.bg_img} src={bg} alt="background image"/>

                <Profile/>

                <Posts/>

            </main>
        </>
    );
};

export default Main;