import React, {ChangeEvent} from 'react';
import c from "./NewMessage.module.scss";

type NewMessagePropsType = {
    newMessageText: string
    AddMessage: (text: string) => void
    onChangeHandler: (value: string) => void
}

const NewMessage = (props: NewMessagePropsType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let AddMessage = () => {
        props.AddMessage(props.newMessageText)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <>
            <form className={c.form} action="src/components/Main/Main#">
                <label className="sr-only" htmlFor="message">message textarea</label>
                <textarea ref={newMessageElement}
                          value={props.newMessageText}
                          onChange={onChangeHandler}
                          className={c.textarea}
                          id='message'
                          name='message'
                          placeholder="type your message"/>

                <button className={c.submit}
                        onClick={AddMessage}
                        type="button">Send message
                </button>
            </form>
        </>
    );
};

export default NewMessage;