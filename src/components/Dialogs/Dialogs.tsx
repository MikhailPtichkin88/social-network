import React from 'react';
import c from './Dialogs.module.scss'
import Menu from "./Menu/Menu";
import Messages from "./Messages/Messages";
import {ActionsType, DialogsType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    menuDialogs: Array<DialogsType>
    dialogMessages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={c.wrapper}>
            <Menu menuItemsData={props.menuDialogs}/>
            <Messages messagesData={props.dialogMessages}
                      newMessageText={props.newMessageText}
                      dispatch={props.dispatch}/>
        </div>
    );
};

export default Dialogs;