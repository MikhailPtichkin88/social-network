import React, {Component, ComponentType} from 'react';
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import AuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = ReturnType<typeof MapStateToProps>

let MapStateToProps = (state: ReduxStoreType) => ({
    menuDialogs: state.dialogPage.dialogs,
})

export default compose<ComponentType>(
    connect<MapStateToPropsType, {}, {}, ReduxStoreType>(MapStateToProps, {}),
    AuthRedirect
)(Dialogs)


