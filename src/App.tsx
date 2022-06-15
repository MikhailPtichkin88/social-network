import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsType, AvatarsType, DialogsType, MessageType, PostsType, RootStateType, StoreType} from "./redux/store";
import {ActionCreator, Dispatch} from "redux";


type AppPropsType = {
    store: RootStateType
    dispatch: Dispatch<ActionsType>
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

                <Header/>

                <Nav sidebarAvatars={sidebarAvatars}/>
                <div className="main_wrapper">

                    <Route path={'/Profile'} render={() => <Main dispatch={props.dispatch}
                                                                 profilePosts={profilePosts}
                                                                 profilePostText={profilePostText}/>}/>

                    <Route path={'/Messages'} render={() => <Dialogs menuDialogs={menuDialogs}
                                                                     dialogMessages={dialogMessages}
                                                                     newMessageText={newMessageText}
                                                                     dispatch={props.dispatch}
                    />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
