import React from 'react';
import styles from './Login.module.scss'
import LoginReduxForm from "./Form/LoginForm";
import {authAPI} from "../../api/api";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReduxStoreType} from "../../redux/redux-store";

export type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: formDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)

    }


    if(props.isAuth){
        return <Redirect to={'/Profile'}/>
    }
    return (
        <div>
            <h1 className={styles.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStateToPropsType = {
    isAuth:boolean
}
const mapStateToProps = (state:ReduxStoreType)=>({
   isAuth:state.auth.user.isAuth
})

export default connect<MapStateToPropsType,MapDispatchToPropsType,{},ReduxStoreType>(mapStateToProps, {login})(Login);