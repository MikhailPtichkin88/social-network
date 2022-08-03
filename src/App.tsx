import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ReduxStoreType} from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MainContainer from "./components/Main/MainContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";

import Spinner from "./components/common/spinner/Spinner";


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Spinner show={true}/>
        }
        return (
            <BrowserRouter>
                <div className="App app-wrapper">

                    <HeaderContainer/>

                    <Nav/>
                    <div className="main_wrapper">
                        <Switch>
                            <Route path={'/profile/:userId?'} render={() => <MainContainer/>}/>

                            <Route path={'/messages'} render={() => <DialogsContainer/>}/>

                            <Route path={'/users'} render={() => <UsersContainer/>}/>

                            <Route path={'/login'} render={() => <Login/>}/>

                            <Redirect from='/social-network' to={`/profile/`}/>

                        </Switch>

                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: ReduxStoreType) => ({
    initialized: state.app.initialized
})

type MapDispatchToPropsType = {
    initializeApp: () => void
}

export default connect(mapStateToProps, {initializeApp})(App);



