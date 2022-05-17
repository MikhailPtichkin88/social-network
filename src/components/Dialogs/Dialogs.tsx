import React from 'react';
import c from './Dialogs.module.scss'
import Menu from "./Menu/Menu";
import Messages from "./Messages/Messages";

export type MenuItemsType = {
    id: string
    name: string
}

export type MessagesDataType = {
    id: string
    author: string
    message: string
}

let menuItemsData: Array<MenuItemsType> = [
    {id: "1", name: "Andrew"},
    {id: "2", name: "Dmitry"},
    {id: "3", name: "Sasha"},
    {id: "4", name: "Sveta"},
    {id: "5", name: "Valera"},
    {id: "6", name: "Victor"},
    {id: "7", name: "Igor"},
    {id: "8", name: "Evgraf"}
]

let messagesData: Array<MessagesDataType> = [
    {id: "1", author: "Andrew", message: 'Hey!'},
    {id: "2", author: "Dmitry", message: 'Hey!'},
    {id: "3", author: "Sasha", message: 'Hey!'},
    {id: "4", author: "Sveta", message: 'Hey!'},
    {id: "5", author: "Valera", message: 'Hey!'},
    {id: "6", author: "Victor", message: 'Hey!'},
    {id: "7", author: "Igor", message: 'Hey!'},
    {id: "8", author: "Evgraf", message: 'Hey!'}
]

const Dialogs = () => {
    return (
        <div className={c.wrapper}>
            <Menu menuItemsData={menuItemsData}/>
            <Messages messagesData={messagesData}/>
        </div>
    );
};

export default Dialogs;