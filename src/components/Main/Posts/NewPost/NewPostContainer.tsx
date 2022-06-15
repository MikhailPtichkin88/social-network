import React, {ChangeEvent} from 'react';
import c from "./NewPost.module.scss";
import {
    ActionsType,
} from "../../../../redux/store";
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";

type NewPostType = {
    profilePostText: string
    dispatch: (action: ActionsType) => void
}

const NewPostContainer = (props: NewPostType) => {



    let addPost = (text:string) => {
        props.dispatch(addPostActionCreator(text))
    }

    const updateText = (value:string) => {
        props.dispatch(changePostActionCreator(value))
    }

    return (
        <>
           <NewPost profilePostText={props.profilePostText} updateText={updateText} addNewPost={addPost}/>
        </>
    );
};

export default NewPostContainer;