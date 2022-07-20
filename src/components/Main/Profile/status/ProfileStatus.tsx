import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './ProfileStatus.module.scss';

type ProfileStatusPropsType = {
    className?: string
    status: string
    setProfileStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(props.status)
    const [error, setError] = useState(false)

    useEffect(() =>  {
        if (value !== props.status) {
            setValue(props.status)
    }
    }, [props.status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setValue(e.currentTarget.value)
    }
    const setSpanMode = () => setEditMode(false)
    const setInputMode = () => setEditMode(true)

    const ChangeStatusHandler = () => {
        if (value.trim().length < 1) {
            setError(true)
            return
        }
        props.setProfileStatus(value)
        setSpanMode()
    }
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (value.trim().length < 1) {
                setError(true)
                return
            }
            props.setProfileStatus(value)
            setSpanMode()
        }
    }

    const errorClass = error ? ` ${styles.error}` : ""
    return (
        <div className={styles.status + ' '}>
            <span style={{display: 'inline-block'}} className={props.className}>Status:</span>
            {
                editMode
                    ? <input value={value}
                             autoFocus
                             className={styles.input + errorClass}
                             onChange={onChangeHandler}
                             onBlur={ChangeStatusHandler}
                             onKeyPress={onKeyDownHandler}></input>
                    : <span className={styles.span } onDoubleClick={setInputMode}>{value}</span>
            }
            {error && <span className={styles.errorText}>Пустая строка</span>}
        </div>
    );
};

export default ProfileStatus;