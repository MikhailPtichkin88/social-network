import React from 'react';
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import AuthRedirect from "../../hoc/AuthRedirect";

type MapStateToPropsType = ReturnType<typeof MapStateToProps>

let MapStateToProps = (state:ReduxStoreType)=>({
    menuDialogs: state.dialogPage.dialogs,
})

export const DialogsContainer =  connect<MapStateToPropsType, {}, {}, ReduxStoreType>(MapStateToProps, {})(AuthRedirect(Dialogs));
