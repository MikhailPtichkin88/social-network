import {
    ActionsType,
    AddMsgActionType,
    ChangeMsgTextType,
    DialogPageType,
    MessageType
} from "./store";


type ActionNameType =  "ADD-MSG" | "CHANGE-MSG-TEXT"

const ADD_MSG:ActionNameType =  "ADD-MSG"
const CHANGE_MSG_TEXT:ActionNameType = "CHANGE-MSG-TEXT"


let initialState:DialogPageType = {
    dialogs: [
        {id: "1", name: "Andrew"},
        {id: "2", name: "Dmitry"},
        {id: "3", name: "Sasha"},
        {id: "4", name: "Sveta"},
        {id: "5", name: "Valera"},
        {id: "6", name: "Victor"},
        {id: "7", name: "Igor"},
        {id: "8", name: "Evgraf"}
    ],

    messages: [
        {id: "1", author: "Andrew", message: 'Hey!'},
        {id: "2", author: "Dmitry", message: 'Hey!'},
        {id: "3", author: "Sasha", message: 'Hey!'},
        {id: "4", author: "Sveta", message: 'Hey!'},
        {id: "5", author: "Valera", message: 'Hey!'},
        {id: "6", author: "Victor", message: 'Hey!'},
        {id: "7", author: "Igor", message: 'Hey!'},
        {id: "8", author: "Evgraf", message: 'Hey!'}
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
            state.messages.push(newMessage)
            return state
        case "CHANGE-MSG-TEXT":
            state.newMessageText = action.textMessage
            return state
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