import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import { Dispatch} from "redux";
import UsersContainer from "./components/Users/UsersContainer";
import {ReduxStoreType} from "./redux/redux-store";
import {DialogsType} from "./redux/dialogs-reducer";
import {AvatarsType} from "./redux/sidebar-reducer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type AppPropsType = {
    store: ReduxStoreType
    dispatch: Dispatch
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store
    let menuDialogs: Array<DialogsType> = state.dialogPage.dialogs
    let sidebarAvatars: Array<AvatarsType> = state.sidebar.avatars
    let authUserId = state.auth.user.userId


    return (
        <BrowserRouter>
            <div className="App app-wrapper">

                <HeaderContainer/>

                <Nav sidebarAvatars={sidebarAvatars}/>
                <div className="main_wrapper">

                    <Route path={'/profile/:userId?'} render={() => <MainContainer  />}/>

                    <Route path={'/messages'} render={() => <DialogsContainer />}/>

                    <Route path={'/users'} render={() => <UsersContainer/>}/>

                    <Route path={'/login'} render={() => <Login/>}/>

                    <Redirect from='/' to={`/profile/${authUserId}`}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
