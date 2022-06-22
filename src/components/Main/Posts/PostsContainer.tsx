import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../../redux/redux-store";
import {PostsType} from "../../../redux/profile-reducer";

export type PostPropsType = {
    myPostsData: Array<PostsType>
}

let mapStateToProps = (state:ReduxStoreType):PostPropsType =>{
    return{
        myPostsData: state.profilePage.posts,
    }
}


const PostsContainer = connect(mapStateToProps)(Posts)
export default PostsContainer;