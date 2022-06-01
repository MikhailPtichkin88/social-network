import React from 'react';
import c from './Main.module.scss'
import bg from "../../images/bg.jpg";
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";
import {ActionsType, PostsType} from "../../redux/state";


type ProfilePostsPropsType ={
    profilePosts:Array<PostsType>
    profilePostText:string
    dispatch: (action: ActionsType) => void
}

const Main = (props:ProfilePostsPropsType) => {
    return (
        <>
            <main className={c.main}>

                <img className={c.bg_img} src={bg} alt="background image"/>

                <Profile/>

                <Posts dispatch={props.dispatch}
                       profilePostText={props.profilePostText}
                       myPostsData={props.profilePosts}/>
            </main>
        </>
    );
};

export default Main;