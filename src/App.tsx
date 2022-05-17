import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <BrowserRouter>
            <div className="App app-wrapper">

                <Header/>

                <Nav/>
                <div className="main_wrapper">
                    <Route path={'/Profile'} render={()=> <Main/>}/>
                    <Route path={'/Messages'} render={()=><Dialogs/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
