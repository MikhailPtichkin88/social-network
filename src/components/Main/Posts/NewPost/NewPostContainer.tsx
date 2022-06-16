import React from 'react';
import {
    ActionsType, RootStateType,
} from "../../../../redux/types";
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        profilePostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
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