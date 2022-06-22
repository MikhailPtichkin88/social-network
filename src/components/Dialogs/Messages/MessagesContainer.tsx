import React from 'react';


import NewMessageContainer from "./NewMessage/NewMessageContainer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../../redux/redux-store";
import {MessageType} from "../../../redux/dialogs-reducer";


export type MessagesPropsType = {
    messagesData: Array<MessageType>
}

let mapPropsToState = (state:ReduxStoreType):MessagesPropsType=>{
    return{
        messagesData:state.dialogPage.messages
    }
}

const MessagesContainer = connect(mapPropsToState)(Messages)

export default MessagesContainer;