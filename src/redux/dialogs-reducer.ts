
import {v1} from "uuid";

export type DialogsType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    author: string
    message: string
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}


let initialState:DialogPageType = {
    dialogs: [
        {id: v1(), name: "Andrew"},
        {id: v1(), name: "Dmitry"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Victor"},
        {id: v1(), name: "Igor"},
        {id: v1(), name: "Evgraf"}
    ],

    messages: [
        {id: v1(), author: "Andrew", message: 'Hey!'},
        {id: v1(), author: "Dmitry", message: 'Hey!'},
        {id: v1(), author: "Sasha", message: 'Hey!'},
        {id: v1(), author: "Sveta", message: 'Hey!'},
        {id: v1(), author: "Valera", message: 'Hey!'},
        {id: v1(), author: "Victor", message: 'Hey!'},
        {id: v1(), author: "Igor", message: 'Hey!'},
        {id: v1(), author: "Evgraf", message: 'Hey!'}
    ],
    newMessageText: ""
}


const dialogsReducer = (state=initialState, action:DialogsActionType):DialogPageType =>{

    switch (action.type) {
        case "ADD-MSG":
            let newMessage: MessageType = {
                id: '5',
                author: "Me",
                message: action.message
            }
            return {...state, messages:[...state.messages, newMessage], newMessageText:""}
        case "CHANGE-MSG-TEXT":

            return {...state, newMessageText:action.textMessage}
        default:
            return state
    }
}

export type DialogsActionType = ChangeMsgACType | AddMsgACType

type AddMsgACType = ReturnType<typeof addMsgActionCreator>
export const addMsgActionCreator = (message:string) => {
    return {
        type: "ADD-MSG",
        message
    }as const
}

type ChangeMsgACType = ReturnType<typeof changeMsgActionCreator>
export const changeMsgActionCreator = (textMessage:string) => {
    return {
        type: "CHANGE-MSG-TEXT",
        textMessage
    }as const
}

export default dialogsReducer