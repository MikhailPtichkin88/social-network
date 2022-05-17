import React from 'react';
import c from './Main.module.scss'
import bg from "../../images/bg.jpg";
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";
import {MessagesDataType} from "../Dialogs/Dialogs";


export type MyPostsType = {
    id: string
    message: string
    likeCount: number
}

let myPostsData: Array<MyPostsType> = [
    {id: "1", message: 'Hey!', likeCount:2},
    {id: "2", message: 'second post', likeCount:4},
    {id: "3", message: 'How are you?', likeCount:5}
]

const Main = () => {
    return (
        <>
            <main className={c.main}>

                <img className={c.bg_img} src={bg} alt="background image"/>

                <Profile/>

                <Posts myPostsData={myPostsData}/>

            </main>
        </>
    );
};

export default Main;