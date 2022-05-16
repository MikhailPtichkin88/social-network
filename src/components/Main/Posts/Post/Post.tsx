import React from 'react';
import avatar from '../../../../images/avatar.jpg'
import c from './Post.module.scss'

const Post = () => {
    return (
        <>
            <div className={c.post}>
                <div className={c.wrapper}>
                    <img className={c.avatar} src={avatar} alt="avatar"/>
                    <div className={c.inner}>
                        <div className={c.author}>Mike</div>
                        <p className={c.text}>message</p>
                        <span className={c.time}>03.03.2022</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;