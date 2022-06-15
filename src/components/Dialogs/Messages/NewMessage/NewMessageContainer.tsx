import React, {ChangeEvent} from 'react';
import c from "./NewMessage.module.scss";
import {
    ActionsType,
} from "../../../../redux/store";
import {addMsgActionCreator, changeMsgActionCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";

type NewMessagePropsType = {
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

const NewMessageContainer = (props: NewMessagePropsType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let AddMessage = (text:string) => {
        props.dispatch(addMsgActionCreator(text))
    }

    const onChangeHandler = (value:string) => {
        props.dispatch(changeMsgActionCreator(value))
    }

    return (
        <>
            <NewMessage newMessageText={props.newMessageText}
                        AddMessage={AddMessage}
                        onChangeHandler={onChangeHandler}/>
        </>
    );
};

export default NewMessageContainer;