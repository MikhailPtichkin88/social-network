import React from 'react';
import c from './List.module.scss'
import {NavLink} from "react-router-dom";


type ListPropsType = {
    id: string
    name: string
}

const List = (props:ListPropsType) => {
    const path = /Messages/ + props.id

    return (
        <li className={c.dialog} key={props.id}>
            <NavLink className={c.link} activeClassName={c.active} to={path}>
                {props.name}
            </NavLink>
        </li>
    );
};

export default List;