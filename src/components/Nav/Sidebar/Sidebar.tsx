import React from 'react';
import AsideFriends from "./AsideFriends/AsideFriends";
import c from './SideBar.module.scss'
import {SidebarAvatarsPropsType} from "../Nav";

const Sidebar = (props:SidebarAvatarsPropsType) => {
    return (
        <div className={c.sidebar}>
            <h2 className={c.header}>Friends</h2>
            <AsideFriends sidebarAvatars={props.sidebarAvatars}/>
        </div>
    );
};

export default Sidebar;