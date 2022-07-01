import React, {ChangeEvent} from 'react';
import c from './User.module.scss'
import {v1} from 'uuid';
import {NavLink} from "react-router-dom";


type UserPropsType = {
    photoUrl: string
    name: string
    status: string
    link: string
    city: string
    isFollowed: boolean
    callback: (isFollowed: boolean) => void
    userId:string
}

const User = (props: UserPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.checked)
    }
    let inputId = v1()
    return (
        <div className={c.wrapper}>
            <div className={c.photo_info}>
                <NavLink to={'/profile/' + props.userId}>
                    <img className={c.photo_img} src={props.photoUrl} alt="avatar"/>
                </NavLink>
                <input type="checkbox"
                       id={inputId}
                       checked={props.isFollowed}
                       onChange={onChangeHandler}
                       className={c.is_followed_btn}/>
                <label className={c.label} htmlFor={inputId}></label>
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