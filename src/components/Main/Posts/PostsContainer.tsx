import React from 'react';

import Posts from "./Posts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/types";

let mapStateToProps = (state:RootStateType) =>{
    return{
        myPostsData: state.profilePage.posts,
    }
}


const PostsContainer = connect(mapStateToProps)(Posts)
export default PostsContainer;