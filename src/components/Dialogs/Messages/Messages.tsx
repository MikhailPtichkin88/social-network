import React from 'react';
import c from './Messages.module.scss'
import Message from "./Message/Message";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import {MessageType} from "../../../redux/dialogs-reducer";
import {MessagesPropsType} from "./MessagesContainer";


const Messages = (props:MessagesPropsType) => {
    return (
        <div className={c.wrapper}>

            {
                props.messagesData.map(t =>{
                    return <Message key={t.id} author={t.author} message={t.message} id={t.id}/>})
            }
            <NewMessageContainer/>
        </div>

    );
};

export default Messages;