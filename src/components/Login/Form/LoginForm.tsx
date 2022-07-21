import React from 'react';
import styles from './LoginForm.module.scss';
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from "redux-form";
import {formDataType} from "../Login";

const LoginForm:React.FC<InjectedFormProps<formDataType>> = (props:any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'}  type="checkbox" id={'RememberMe'}/>
                <label htmlFor="RememberMe">Remember me</label>
            </div>
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<formDataType, {}>({form:'login'})(LoginForm)
export default LoginReduxForm;