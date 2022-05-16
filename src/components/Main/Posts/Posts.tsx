import React from 'react';
import Post from "./Post/Post";

import c from './Posts.module.scss'
import NewPost from "./NewPost/NewPost";

const Posts = () => {
    return (
        <div className={c.container}>
            <h3 className={c.title}>My Posts</h3>

            <NewPost/>

            <div className={c.post_wrapper}>
                <Post/>
                <Post/>

            </div>
        </div>
    );
};

export default Posts;