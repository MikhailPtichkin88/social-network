import React from 'react';
import c from "./DialogForm.module.scss";

import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea from "../../../common/formControls/Textarea";
import {maxLength, requiredField} from "../../../../utils/formValidators";

const maxLength50 = maxLength(50)

const DialogForm: React.FC<InjectedFormProps<{ message: string }>> = (props) => {

    return (
        <form className={c.form} onSubmit={props.handleSubmit}>

            <Field className={c.textarea}
                   name='message'
                   placeholder="type your message"
                   component={Textarea}
                   validate={[requiredField, maxLength50]}/>

            <button className={c.submit}
            >Send message
            </button>
        </form>
    );
};


const DialogReduxForm = reduxForm<{ message: string }, {}>({form: 'dialogForm'})(DialogForm)
export default DialogReduxForm;