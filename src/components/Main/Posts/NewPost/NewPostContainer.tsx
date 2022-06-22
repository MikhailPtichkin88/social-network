import React from 'react';
import {addPostActionCreator, changePostActionCreator, ProfileActionType} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReduxStoreType} from "../../../../redux/redux-store";


export type NewPostPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profilePostText:string
}

type mapDispatchToPropsType = {
    addNewPost: (text: string) => void
    updateText: (value: string) => void
}

let mapStateToProps = (state: ReduxStoreType):mapStateToPropsType => {
    return {
        profilePostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ProfileActionType>):mapDispatchToPropsType => {
    return {
        addNewPost: (text: string) => {

            dispatch(addPostActionCreator(text))
        },
        updateText: (value: string) => {
            dispatch(changePostActionCreator(value))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;