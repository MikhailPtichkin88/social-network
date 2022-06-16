import {
    ActionsType,
    AddMsgActionType,
    ChangeMsgTextType,
    DialogPageType,
    MessageType
} from "./types";
import {v1} from "uuid";


type ActionNameType =  "ADD-MSG" | "CHANGE-MSG-TEXT"

const ADD_MSG:ActionNameType =  "ADD-MSG"
const CHANGE_MSG_TEXT:ActionNameType = "CHANGE-MSG-TEXT"


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


const dialogsReducer = (state=initialState, action:ActionsType) =>{

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


///Action creators

type addMsgActionCreatorType = (text: string) => AddMsgActionType
type changeMsgActionCreatorType = (text: string) => ChangeMsgTextType
// другой вариант типизации объекта action

export const addMsgActionCreator: addMsgActionCreatorType = (text) => {
    return {
        type: ADD_MSG,
        message: text,
    }
}

export const changeMsgActionCreator: changeMsgActionCreatorType = (text) => {
    return {
        type: CHANGE_MSG_TEXT,
        textMessage: text,
    }
}

export default dialogsReducer