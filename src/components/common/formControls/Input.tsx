import React, {MutableRefObject, useRef} from 'react';
import styles from './Input.module.scss'
import {WrappedFieldMetaProps} from "redux-form/lib/Field";

type InputPropsType = {
    className?:string
    input:React.HTMLProps<HTMLInputElement>
    meta:WrappedFieldMetaProps
}

const Input = ({input,meta, ...props}: InputPropsType) => {


    const hasError = meta.touched && meta.error

    return (
        <div className={styles.form}>
            <input {...input} {...props} className={(hasError ? styles.error : '')}/>
            {hasError && <span className={styles.errorMsg}>{meta.error}</span>}
        </div>
    );
};

export default Input;