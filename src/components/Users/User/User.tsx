import React, {ChangeEvent, useEffect} from 'react';
import c from './User.module.scss'
import {v1} from 'uuid';
import {NavLink} from "react-router-dom";
import axios from "axios";


type UserPropsType = {
    photoUrl: string
    name: string
    status: string
    link: string
    city: string
    isFollowed: boolean
    onFollowHandler: () => void
    onUnFollowHandler: () => void
    userId: string
}

const User = (props: UserPropsType) => {

    const onFollowClickHandler = () => {

        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {}, {
            withCredentials:true,
            headers:{
                'API-KEY':'9df85157-ef47-4383-94d5-5e90e6d2a59b'
            }
        }).then(response => {
            if(response.data.resultCode===0){
                props.onFollowHandler()
            }

        })
    }

    const onUnFollowClickHandler = () => {

        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {
            withCredentials:true,
            headers:{
                'API-KEY':'9df85157-ef47-4383-94d5-5e90e6d2a59b'
            }
        }).then(response => {
            if(response.data.resultCode===0){
                props.onUnFollowHandler()
            }
        })
    }


    let inputId = v1()
    return (
        <div className={c.wrapper}>
            <div className={c.photo_info}>
                <NavLink to={'/profile/' + props.userId}>
                    <img className={c.photo_img} src={props.photoUrl} alt="avatar"/>
                </NavLink>
                {
                    props.isFollowed
                        ? <button className={c.followBtn+' '+c.isFollowed} onClick={onUnFollowClickHandler}>Unfollow</button>

                        : <button className={c.followBtn} onClick={onFollowClickHandler}>Follow</button>

                }

            </div>


            <div className={c.info}>

                <div className={c.left}>
                    <p className={c.name}>{props.name}</p>
                    <p className={c.status}>{props.status}</p>
                </div>

                <div className={c.right}>
                    <p className={c.country}>{props.link},</p>
                    <p className={c.city}>{props.city}</p>
                </div>

            </div>
        </div>
    );
};

export default User;