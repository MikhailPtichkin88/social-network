import React from 'react';
import Post from "./Post/Post";

import c from './Posts.module.scss'
import {ActionsType, PostsType} from "../../../redux/types";
import NewPostContainer from "./NewPost/NewPostContainer";


type PostsPropsType={
    myPostsData:Array<PostsType>

}

const Posts = (props:PostsPropsType) => {
    return (
        <div className={c.container}>
            <h3 className={c.title}>My Posts</h3>

            <NewPostContainer />

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