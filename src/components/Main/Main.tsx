import React from 'react';
import c from './Main.module.scss'
import bg from "../../images/bg.jpg";
import Profile from "./Profile/Profile";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type MainPropsType = {
    profile: ProfileUserType
    setProfileStatus: (status: string) => void
    status: string
}

const Main = (props: MainPropsType) => {
    return (
        <>
            <div className={c.main}>

                <img className={c.bg_img} src={bg} alt="background image"/>

                <Profile status={props.status} setProfileStatus={props.setProfileStatus} profile={props.profile}/>

                <PostsContainer/>
            </div>
        </>
    );
};

export default Main;