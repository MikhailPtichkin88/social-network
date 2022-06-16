import React from 'react';
import c from './AsideFriends.module.scss'
import AsideFriend from "./AsideFriend/AsideFriend";
import {SidebarAvatarsPropsType} from "../../Nav";


const AsideFriends = (props: SidebarAvatarsPropsType) => {
    return (
        <ul className={c.friends_list}>
            {
                props.sidebarAvatars.map(t =>{
                    return <AsideFriend key={t.id} id={t.id} friend={t.friend} avatar={t.avatar}/>
                })
            }
        </ul>
    );
};

export default AsideFriends;