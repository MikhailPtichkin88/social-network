import React from 'react';
import c from './Messages.module.scss'
import Message from "./Message/Message";
import {MessagesPropsType} from "./MessagesContainer";
import DialogReduxForm from "./DialogForm/DialogForm";


const Messages = (props:MessagesPropsType) => {


    const onSubmit = (formData:{message:string})=>{
        props.addMsgActionCreator(formData.message)
    }


    return (
        <div className={c.wrapper}>

            {
                props.messagesData.map(t =>{
                    return <Message key={t.id} author={t.author} message={t.message} id={t.id}/>})
            }
            <DialogReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

export default Messages;