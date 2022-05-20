import React from 'react';
import c from './Messages.module.scss'
import Message from "./Message/Message";
import {MessageType} from "../../../redux/state";
import NewMessage from "./NewMessage/NewMessage";


export type MessagesPropsType = {
    messagesData: Array<MessageType>
}

const Messages = (props:MessagesPropsType) => {
    return (
        <div className={c.wrapper}>

            {
                props.messagesData.map(t =>{
                    return <Message author={t.author} message={t.message} id={t.id}/>                })
            }
            <NewMessage/>
        </div>

    );
};

export default Messages;