import React from 'react';
import c from './Messages.module.scss'
import Post from "../../Main/Posts/Post/Post";
import Message from "./Message/Message";
import {MessagesDataType} from "../Dialogs";

type MessagesPropsType = {
    messagesData: Array<MessagesDataType>
}

const Messages = (props:MessagesPropsType) => {
    return (
        <div className={c.wrapper}>

            {
                props.messagesData.map(t =>{
                    return <Message author={t.author} message={t.message} id={t.id}/>                })
            }
        </div>
    );
};

export default Messages;