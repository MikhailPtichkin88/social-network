import React from 'react';
import Post from "./Post/Post";

import c from './Posts.module.scss'
import NewPost from "./NewPost/NewPost";
import {PostsType} from "../../../redux/state";


type PostsPropsType={
    myPostsData:Array<PostsType>
    addPost: (postMessage:string) => void
    profilePostText:string
    changeNewPostText: (textMessage:string) => void
}

const Posts = (props:PostsPropsType) => {
    return (
        <div className={c.container}>
            <h3 className={c.title}>My Posts</h3>

            <NewPost profilePostText={props.profilePostText}
                     addPost={props.addPost}
                     changeNewPostText={props.changeNewPostText}/>

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