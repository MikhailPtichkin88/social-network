import React, {ChangeEvent} from 'react';
import c from "./PostForm.module.scss";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../../utils/formValidators";
import Textarea from "../../../common/formControls/Textarea";

let maxLength30 = maxLength(30)

const PostForm: React.FC<InjectedFormProps<{ profilePost: string }>> = (props) => {

    return (
        <>
            <form className={c.form} onSubmit={props.handleSubmit}>
                <label className="sr-only" htmlFor="message">send message input</label>
                <Field component={Textarea}
                       className={c.textarea}
                       name='profilePost'
                       placeholder="your news"
                validate={[requiredField, maxLength30]}/>
                <button className={c.submit} disabled={props.form.length<1}
                >Add Post
                </button>
            </form>
        </>
    );
};


const ReduxPostForm = reduxForm<{ profilePost: string }, {}>({form: 'profileForm'})(PostForm)
export default ReduxPostForm;