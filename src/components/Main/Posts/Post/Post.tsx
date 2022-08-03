import React from 'react';
import avatar from '../../../../images/avatar.jpg'
import c from './Post.module.scss'

type PostPropsData ={
    message: string
    likeCount: number
}

const Post = (props:PostPropsData) => {
    return (
        <>
            <div className={c.post}>
                <div className={c.wrapper}>
                    <img className={c.avatar} src={avatar} alt="avatar"/>
                    <div className={c.inner}>
                        <div className={c.author}>Mike</div>
                        <p className={c.text}>{props.message}</p>
                        <span className={c.time}>Likes: {props.likeCount}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;