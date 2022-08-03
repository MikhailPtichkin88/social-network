import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../../redux/redux-store";
import {addPostActionCreator, PostsType} from "../../../redux/profile-reducer";


export type PostPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    addPostActionCreator:(test:string)=>void
}
let mapStateToProps = (state:ReduxStoreType) =>{
    return{
        myPostsData: state.profilePage.posts,
    }
}


const PostsContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{},ReduxStoreType>(mapStateToProps,{addPostActionCreator})(Posts)
export default PostsContainer;