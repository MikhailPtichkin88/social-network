import React from 'react';
import Post from "./Post/Post";
import c from './Posts.module.scss'
import {PostPropsType} from "./PostsContainer";
import ReduxPostForm from "./PostForm/PostForm";


const Posts = (props:PostPropsType) => {

    const onSubmit = (formData:{profilePost:string})=>{
        props.addPostActionCreator(formData.profilePost)
    }

    return (
        <div className={c.container}>
            <h3 className={c.title}>My Posts</h3>

            <ReduxPostForm onSubmit={onSubmit}/>

            <div className={c.post_wrapper}>
                {
                    props.myPostsData.map(t=>{
                        return <Post key={t.id} message={t.message} likeCount={t.likeCount}/>
                    })
                }

            </div>
        </div>
    );
};

export default Posts;