import React, {ChangeEvent} from 'react';
import c from "./NewPost.module.scss";
import {
    ActionsType,
} from "../../../../redux/state";
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/profile-reducer";

type NewPostType = {
    profilePostText: string
    dispatch: (action: ActionsType) => void
}

const NewPost = (props: NewPostType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : ""
        props.dispatch(addPostActionCreator(text))
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostActionCreator(e.currentTarget.value))
    }

    return (
        <>
            <form className={c.form} action="src/components/Main/Main#">
                <label className="sr-only" htmlFor="message">send message input</label>
                <textarea ref={newPostElement}
                          value={props.profilePostText}
                          onChange={onChangeInputHandler}
                          className={c.textarea}
                          id='message'
                          name='message'
                          placeholder="your news"/>
                <button className={c.submit}
                        onClick={addPost}
                        type="button">Add Post
                </button>
            </form>
        </>
    );
};

export default NewPost;