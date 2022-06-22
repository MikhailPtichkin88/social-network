import React, {ChangeEvent, useState} from 'react';
import c from "./NewMessage.module.scss";
import {NewMessagePropsType} from "./NewMessageContainer";



const NewMessage = (props: NewMessagePropsType) => {

    let addMessage = () => {

        props.newMessageText? props.addMessage(props.newMessageText) : alert("empty value!")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <>
            <form className={c.form} action="src/components/Main/Main#">
                <label className="sr-only" htmlFor="message">message textarea</label>
                <textarea value={props.newMessageText}
                          onChange={onChangeHandler}
                          className={c.textarea}
                          id='message'
                          name='message'
                          placeholder="type your message"/>

                <button className={c.submit}
                        onClick={addMessage}
                        type="button">Send message
                </button>
            </form>
        </>
    );
};

export default NewMessage;