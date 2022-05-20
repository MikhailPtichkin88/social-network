import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {
    addMessage,
    AvatarsType,
    changeNewMessageText,
    DialogsType,
    MessageType,
    PostsType,
    RootStateType
} from "./redux/state";


type AppPropsType={
    state:RootStateType
    addPost: (postMessage:string) => void
    changeNewPostText: (textMessage:string) => void
    changeNewMessageText:  (textMessage:string) => void
    addMessage:(message:string) => void
}

function App(props:AppPropsType) {
    let profilePosts:Array<PostsType> = props.state.profilePage.posts
    let profilePostText:string = props.state.profilePage.newPostText
    let menuDialogs: Array<DialogsType> = props.state.dialogPage.dialogs
    let dialogMessages: Array<MessageType> = props.state.dialogPage.messages
    let sidebarAvatars: Array<AvatarsType> = props.state.sidebar.avatars
    let newMessageText: string = props.state.dialogPage.newMessageText



    return (
        <BrowserRouter>
            <div className="App app-wrapper">

                <Header/>

                <Nav sidebarAvatars={sidebarAvatars}/>
                <div className="main_wrapper">
                    <Route path={'/Profile'} render={()=> <Main addPost={props.addPost}
                                                                profilePosts={profilePosts}
                                                                profilePostText={profilePostText}
                                                                changeNewPostText={props.changeNewPostText}/>}/>
                    <Route path={'/Messages'} render={()=><Dialogs menuDialogs={menuDialogs}
                                                                   dialogMessages={dialogMessages}
                                                                   newMessageText={newMessageText}
                                                                   changeNewMessageText={changeNewMessageText}
                                                                   addMessage={props.addMessage}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
