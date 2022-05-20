import React, {ChangeEvent, useState} from 'react';
import c from "./NewPost.module.scss";

type NewPostType = {
    addPost: (postMessage:string) => void
    profilePostText:string
    changeNewPostText: (textMessage:string) => void
}
const NewPost = (props:NewPostType) => {
    // const [value, setValue] = useState('');
let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
    let text = newPostElement.current ? newPostElement.current.value : ""
        props.addPost(text)
    }
    const onChangeInputHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewPostText(e.currentTarget.value)
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
                <button  className={c.submit}
                         onClick={addPost}
                         type="button">Add Post</button>
            </form>
        </>
    );
};

export default NewPost;