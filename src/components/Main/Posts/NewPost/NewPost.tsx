import React from 'react';
import c from "./NewPost.module.scss";

const NewPost = () => {
    return (
        <>
            <form className={c.form} action="src/components/Main/Main#">
                <label className="sr-only" htmlFor="message">send message input</label>
                <textarea className={c.textarea} id='message' name='message' placeholder="your news"/>
                <button className={c.submit} type="submit">Send</button>
            </form>
        </>
    );
};

export default NewPost;