import React from 'react';
import c from './Messages.module.scss'
import Message from "./Message/Message";
import {ActionsType, MessageType} from "../../../redux/types";

import NewMessageContainer from "./NewMessage/NewMessageContainer";


export type MessagesPropsType = {
    messagesData: Array<MessageType>
}

const Messages = (props:MessagesPropsType) => {
    return (
        <div className={c.wrapper}>

            {
                props.messagesData.map(t =>{
                    return <Message key={t.id} author={t.author} message={t.message} id={t.id}/>                })
            }
            <NewMessageContainer/>
        </div>

    );
};

export default Messages;