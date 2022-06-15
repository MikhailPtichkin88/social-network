import React from 'react';
import Post from "./Post/Post";

import c from './Posts.module.scss'
import NewPost from "./NewPost/NewPost";
import {ActionsType, PostsType} from "../../../redux/store";
import NewPostContainer from "./NewPost/NewPostContainer";


type PostsPropsType={
    myPostsData:Array<PostsType>
    profilePostText:string
    dispatch: (action: ActionsType) => void
}

const Posts = (props:PostsPropsType) => {
    return (
        <div className={c.container}>
            <h3 className={c.title}>My Posts</h3>

            <NewPostContainer dispatch={props.dispatch}
                profilePostText={props.profilePostText}/>

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