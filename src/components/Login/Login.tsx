import React from 'react';
import c from './Login.module.scss'
import LoginReduxForm from "./Form/LoginForm";
import {authAPI} from "../../api/api";

export type formDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const Login = () => {
    const onSubmit = (formData:formDataType)=>{
        authAPI.login(formData.login, formData.password, formData.rememberMe, true)
            .then(response=>{
                console.log(response)
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;