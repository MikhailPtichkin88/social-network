import React from 'react';
import c from './AsideFriends.module.scss'
import AsideFriend from "./AsideFriend/AsideFriend";
import {AvatarsType} from "../../../../redux/sidebar-reducer";

type PropsType = {
    avatars:Array<AvatarsType>
}

const AsideFriends = (props: PropsType) => {
    return (
        <ul className={c.friends_list}>
            {
                props.avatars.map(t =>{
                    return <AsideFriend key={t.id} id={t.id} friend={t.friend} avatar={t.avatar}/>
                })
            }
        </ul>
    );
};

export default AsideFriends;