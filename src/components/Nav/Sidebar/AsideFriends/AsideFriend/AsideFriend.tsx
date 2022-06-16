import React from 'react';
import c from './AsideFriend.module.scss'
import {AvatarsType} from "../../../../../redux/types";
import avatar from '../../../../../images/avatars/Andrew.svg'

const AsideFriend = (props: AvatarsType) => {

    return (
        <li className={c.friend} key={props.id}>
            <a className={c.link} href="#">
                <img className={c.avatar} src={avatar} alt="Sasha"/>
                <p className={c.name}>{props.friend}</p>
            </a>
        </li>
    );
};

export default AsideFriend;