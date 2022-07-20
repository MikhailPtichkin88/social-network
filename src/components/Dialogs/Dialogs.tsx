import React from 'react';
import c from './Dialogs.module.scss'
import Menu from "./Menu/Menu";
import MessagesContainer from "./Messages/MessagesContainer";
import {DialogsType} from "../../redux/dialogs-reducer";



type DialogsPropsType = {
    menuDialogs: Array<DialogsType>
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    return <div className={c.wrapper}>
            <Menu menuItemsData={props.menuDialogs}/>
            <MessagesContainer/>
        </div>
};

export default Dialogs;