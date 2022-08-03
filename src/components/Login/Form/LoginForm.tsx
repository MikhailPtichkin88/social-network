import React from 'react';
import styles from './LoginForm.module.scss';
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from "redux-form";
import {formDataType} from "../Login";
import Input from "../../common/formControls/Input";
import {requiredField} from "../../../utils/formValidators";
import {InputWithoutOnBlur, TextareaWithoutOnBlur} from "../../common/formControls/Textarea";

const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'}
                           name={'login'}
                           validate={[requiredField]}
                           component={Input}
                    />
                </div>
                <div>
                    <Field placeholder={'Password'}
                           validate={[requiredField]}
                           name={'password'}
                           component={Input}
                    />
                </div>
            {props.error && <div className={styles.errorAll}>{props.error}</div>}
            <div style={{position: "relative"}}>
                <Field name={'rememberMe'}
                       type="checkbox"
                       id={'RememberMe'}
                       component={Input}/>

                <label htmlFor="RememberMe" className={styles.label}>Remember me</label>
            </div>

            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<formDataType, {}>({form: 'login'})(LoginForm)
export default LoginReduxForm;