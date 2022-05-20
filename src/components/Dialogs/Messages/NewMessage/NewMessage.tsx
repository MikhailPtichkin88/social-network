import React from 'react';
import c from "./NewMessage.module.scss";

const NewMessage = () => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let AddMessage = () => {

        let text = newMessageElement.current ? newMessageElement.current.value : null
        alert(text)
    }
    return (
        <>
            <form className={c.form} action="src/components/Main/Main#">
                <label className="sr-only" htmlFor="message">message textarea</label>
                <textarea ref={newMessageElement}
                          className={c.textarea}
                          id='message'
                          name='message'
                          placeholder="type your message"/>

                <button className={c.submit}
                        onClick={AddMessage}
                        type="submit">Send message
                </button>
            </form>
        </>
    );
};

export default NewMessage;