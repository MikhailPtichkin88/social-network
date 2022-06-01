import {
    ActionsType,
    AddMsgActionType,
    ChangeMsgTextType,
    DialogPageType,
    MessageType
} from "./state";


type ActionNameType =  "ADD-MSG" | "CHANGE-MSG-TEXT"

const ADD_MSG:ActionNameType =  "ADD-MSG"
const CHANGE_MSG_TEXT:ActionNameType = "CHANGE-MSG-TEXT"

const dialogsReducer = (state:DialogPageType, action:ActionsType) =>{

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