import React from 'react';
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = ReturnType<typeof MapStateToProps>

let MapStateToProps = (state:ReduxStoreType)=>({
    isAuth: state.auth.user.isAuth,
    menuDialogs: state.dialogPage.dialogs,
})

const DialogsContainer =  connect<MapStateToPropsType, {}, {}, ReduxStoreType>(MapStateToProps, {})(Dialogs);

export default DialogsContainer