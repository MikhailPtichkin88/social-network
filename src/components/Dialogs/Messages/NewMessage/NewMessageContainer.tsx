import React, {ChangeEvent} from 'react';
import {addMsgActionCreator, changeMsgActionCreator, DialogsActionType} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReduxStoreType} from "../../../../redux/redux-store";

type MapStateToPropsType = {
    newMessageText:string
}
type MapDispatchToPropsType ={
    onChangeHandler: (value:string)=>void
    addMessage: (text:string)=>void
}

export type NewMessagePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:ReduxStoreType):MapStateToPropsType =>{
    return {
        newMessageText:state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch:Dispatch<DialogsActionType>):MapDispatchToPropsType =>{
    return {
        onChangeHandler: (value:string)=>{
            dispatch(changeMsgActionCreator(value))
        },
        addMessage: (text:string)=>{
            dispatch(addMsgActionCreator(text))
        },
    }
}

const NewMessageContainer = connect(mapStateToProps,mapDispatchToProps) (NewMessage)

export default NewMessageContainer;