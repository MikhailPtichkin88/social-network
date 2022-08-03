import React, { useRef} from 'react';
import styles from './Textarea.module.scss'
import {WrappedFieldMetaProps} from "redux-form/lib/Field";

type TextareaPropsType = {
    classNameWrapper?: string
    classNameInput?:string
    classNameSpan?:string
    children:  React.ReactNode
    input: React.HTMLProps<HTMLTextAreaElement> & React.HTMLProps<HTMLInputElement>
    meta: WrappedFieldMetaProps
}

const Textarea = ({input, meta, ...props}: TextareaPropsType) => {

    const ref = useRef<HTMLDivElement>(null)
    const refSpan = useRef<HTMLSpanElement>(null)

    const onClickHandler = () => {
        if (ref.current !== null && refSpan.current !== null) {
            ref.current.classList.remove(`${styles.error}`)
            refSpan.current.style.visibility = "hidden"
        }
    }

    const hasError = meta.touched && meta.error

    return (
        <div ref={ref} className={styles.form + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input} {...props} onBlur={() => onClickHandler()}/>
            {hasError && <span ref={refSpan} className={styles.errorMsg}>{meta.error}</span>}
        </div>
    );
};

export default Textarea;


///Пример с Children для того, чтобы не дублировать код с input и textarea
// классы стилей для каждого инпута приходят с Field
// ( classNameWrapper?: string
//     classNameInput?:string
//     classNameSpan?:string)

export const FormControl = ({input, meta, ...props}: TextareaPropsType) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={props.classNameWrapper}>
            {props.children}
            {hasError && <span  className={props.classNameSpan}>{meta.error}</span>}
        </div>
    );
};

export const TextareaWithoutOnBlur = (props:TextareaPropsType)=>{
    const {input, meta,  ...restProps} = props
   return <FormControl  {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const InputWithoutOnBlur = (props:TextareaPropsType)=>{
    const {input, meta,  ...restProps} = props
    return <FormControl  {...props}>
        <input  {...input} {...restProps}
                className={(meta.error && meta.touched ? props.classNameInput : '')}
        />
    </FormControl>
}