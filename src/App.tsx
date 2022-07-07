import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionCreator, Dispatch} from "redux";
import UsersContainer from "./components/Users/UsersContainer";
import {ReduxStoreType} from "./redux/redux-store";
import {DialogsType, MessageType} from "./redux/dialogs-reducer";
import {PostsType} from "./redux/profile-reducer";
import {AvatarsType} from "./redux/sidebar-reducer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


export type AppPropsType = {
    store: ReduxStoreType
    dispatch: Dispatch
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store
    let profilePosts: Array<PostsType> = state.profilePage.posts
    let profilePostText: string = state.profilePage.newPostText
    let menuDialogs: Array<DialogsType> = state.dialogPage.dialogs
    let dialogMessages: Array<MessageType> = state.dialogPage.messages
    let sidebarAvatars: Array<AvatarsType> = state.sidebar.avatars
    let newMessageText: string = state.dialogPage.newMessageText


    return (
        <BrowserRouter>
            <div className="App app-wrapper">

                <HeaderContainer/>

                <Nav sidebarAvatars={sidebarAvatars}/>
                <div className="main_wrapper">

                    <Route path={'/profile/:userId?'} render={() => <MainContainer  />}/>

                    <Route path={'/messages'} render={() => <Dialogs menuDialogs={menuDialogs}/>}/>

                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
