import React from 'react';
import c from './Dialogs.module.scss'
import Menu from "./Menu/Menu";
import {ActionsType, DialogsType, MessageType} from "../../redux/types";
import MessagesContainer from "./Messages/MessagesContainer";

type DialogsPropsType = {
    menuDialogs: Array<DialogsType>
}

const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={c.wrapper}>
            <Menu menuItemsData={props.menuDialogs}/>
            <MessagesContainer/>
        </div>
    );
};

export default Dialogs;