import React from 'react';
import c from "./Message.module.scss";
import avatar from "../../../../images/avatar.jpg";
import {MessagesDataType} from "../../Dialogs";




const Message = (props:MessagesDataType) => {
    return (
        <>
            <div className={c.post}>
                <div className={c.wrapper}>
                    <img className={c.avatar} src={avatar} alt="avatar"/>
                    <div className={c.inner}>
                        <div className={c.author}>{props.author}</div>
                        <p className={c.text}>{props.message}</p>
                        <span className={c.time}>03.03.2022</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Message;