import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {AvatarsType, DialogsType, MessageType, PostsType, StoreType} from "./redux/state";



type AppPropsType={
  store:StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    let profilePosts:Array<PostsType> = state.profilePage.posts
    let profilePostText:string = state.profilePage.newPostText
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

                    <Route path={'/Profile'} render={()=> <Main dispatch={props.store.dispatch.bind(props.store)}
                                                                profilePosts={profilePosts}
                                                                profilePostText={profilePostText}/>}/>

                    <Route path={'/Messages'} render={()=><Dialogs menuDialogs={menuDialogs}
                                                                   dialogMessages={dialogMessages}
                                                                   newMessageText={newMessageText}
                                                                   dispatch={props.store.dispatch.bind(props.store)}
                                                                   />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
