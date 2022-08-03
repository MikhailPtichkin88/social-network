import React from 'react';
import AsideFriends from "./AsideFriends/AsideFriends";
import c from './SideBar.module.scss'
import {connect} from "react-redux";
import {ReduxStoreType} from "../../../redux/redux-store";



const Sidebar = (props:SideBarPropsType) => {
    return (
        <div className={c.sidebar}>
            <h2 className={c.header}>Friends</h2>
            <AsideFriends avatars={props.avatars}/>
        </div>
    );
};

export type SideBarPropsType = ReturnType<typeof mapStateToProps>
let mapStateToProps = (state:ReduxStoreType)=>({
    avatars: state.sidebar.avatars
})
export default connect(mapStateToProps, {})(Sidebar);