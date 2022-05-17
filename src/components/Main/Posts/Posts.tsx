import React from 'react';
import Post from "./Post/Post";

import c from './Posts.module.scss'
import NewPost from "./NewPost/NewPost";
import {MyPostsType} from "../Main";

type PostsPropsType={
    myPostsData:Array<MyPostsType>
}

const Posts = (props:PostsPropsType) => {
    return (
        <div className={c.container}>
            <h3 className={c.title}>My Posts</h3>

            <NewPost/>

            <div className={c.post_wrapper}>
                {
                    props.myPostsData.map(t=>{
                        return <Post message={t.message} likeCount={t.likeCount}/>
                    })
                }

            </div>
        </div>
    );
};

export default Posts;