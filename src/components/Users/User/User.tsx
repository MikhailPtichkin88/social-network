import React from 'react';
import c from './User.module.scss'
import {NavLink} from "react-router-dom";
import Spinner from "../../common/spinner/Spinner";

type UserPropsType = {
    photoUrl: string
    name: string
    status: string
    link: string
    city: string
    isFollowed: boolean
    followSuccess: (userId: string) => void
    unfollowSuccess: (userId: string) => void
    userId: string
    isFollowingInProgress: number[]
}

const User = (props: UserPropsType) => {
    let showSpinner = props.isFollowingInProgress.some(el => el === +props.userId)

    const onFollowClickHandler = () => {
        props.followSuccess(props.userId)
    }

    const onUnFollowClickHandler = () => {
        props.unfollowSuccess(props.userId)
    }

    return (
        <div className={c.wrapper}>
            <div className={c.photo_info}>
                <NavLink to={'/profile/' + props.userId}>
                    <img className={c.photo_img} src={props.photoUrl} alt="avatar"/>
                </NavLink>
                {
                    props.isFollowed
                        ? <button disabled={showSpinner} className={c.followBtn + ' ' + c.isFollowed}
                                  onClick={onUnFollowClickHandler}>
                            {showSpinner
                                ? <Spinner show={true} style={c.spinner}/>
                                : 'Unfollow'}</button>

                        : <button disabled={showSpinner} className={c.followBtn} onClick={onFollowClickHandler}>
                            {showSpinner
                                ? <Spinner show={true} style={c.spinner}/>
                                : 'Follow'}</button>
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