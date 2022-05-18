import React from 'react';
import c from "./Menu.module.scss";
import List from "./List/List";
import {DialogsType} from "../../../redux/state";



type MenuPropsType = {
    menuItemsData: Array<DialogsType>
}

const Menu = (props:MenuPropsType) => {
    return (
        <>
            <ul className={c.dialogs_menu}>
                {
                    props.menuItemsData.map(t=>{
                        return <List id={t.id} name={t.name}/>
                    })
                }
            </ul>
        </>
    );
};

export default Menu;