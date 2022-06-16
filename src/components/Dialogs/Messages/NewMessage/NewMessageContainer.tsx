import React, {ChangeEvent} from 'react';

import {
    ActionsType, RootStateType
} from "../../../../redux/types";
import {addMsgActionCreator, changeMsgActionCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state:RootStateType) =>{
    return {
        newMessageText:state.dialogPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch:Dispatch<ActionsType>) =>{
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