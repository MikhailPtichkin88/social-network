import React from 'react';
import c from './Messages.module.scss'
import Message from "./Message/Message";
import {ActionsType, MessageType, RootStateType} from "../../../redux/types";

import NewMessageContainer from "./NewMessage/NewMessageContainer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapPropsToState = (state:RootStateType)=>{
    return{
        messagesData:state.dialogPage.messages
    }
}

const MessagesContainer = connect(mapPropsToState)(Messages)

export default MessagesContainer;