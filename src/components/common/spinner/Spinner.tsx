import React from 'react';
import c from './Spinner.module.scss'
import spinner from '../../../images/Spinner.svg'

type SpinnerPropsType={
    show:boolean
    style?:string
}

const Spinner = (props:SpinnerPropsType) => {

    let style = `  ${c.img} ${props.show ? c.visible : ""}`

    return (
        <div className={c.wrapper+' '+props.style}>
            <img className={style} src={spinner}/>
        </div>
    );
};

export default Spinner;