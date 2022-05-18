import React from 'react';
import c from './Dialogs.module.scss'
import Menu from "./Menu/Menu";
import Messages from "./Messages/Messages";
import {DialogsType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    menuDialogs: Array<DialogsType>
    dialogMessages: Array<MessageType>
}

const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={c.wrapper}>
            <Menu menuItemsData={props.menuDialogs}/>
            <Messages messagesData={props.dialogMessages}/>
        </div>
    );
};

export default Dialogs;