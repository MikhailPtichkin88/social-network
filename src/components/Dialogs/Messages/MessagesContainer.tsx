import React from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../../redux/redux-store";
import {addMsgActionCreator, MessageType} from "../../../redux/dialogs-reducer";


export type MessagesPropsType = MapStateToPropsType & MapDispatchToPropsType

 type MapStateToPropsType = {
    messagesData: Array<MessageType>
}
type MapDispatchToPropsType = {
    addMsgActionCreator:(message:string)=>void
}

let mapPropsToState = (state:ReduxStoreType):MapStateToPropsType=>{
    return{
        messagesData:state.dialogPage.messages
    }
}

const MessagesContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{},ReduxStoreType>(mapPropsToState,{addMsgActionCreator})(Messages)

export default MessagesContainer;