import React from 'react';
import c from './Users.module.scss'
import {UserType} from "../../redux/types";
import {Dispatch} from "redux";
import User from "./User/User";

type UsersPropsType = {
    users:Array<UserType>
    onChangeHandler:(userId:string, isFollowed:boolean)=>void
    setUsers:()=>void
}
const Users = (props:UsersPropsType) => {
    if(props.users.length===0){
        props.setUsers()
    }
    return (
        <div className={c.wrapper}>
            <ul className={c.users_list}>
                {
                props.users.map(u=>{
                    const onChangeHandler = (isFollowed:boolean)=>{
                        props.onChangeHandler(u.id,isFollowed)
                    }

                    return <li key={u.id} className={c.users_item}>
                        <User  photoUrl={u.photoUrl} name={u.fullName} status={u.status} country={u.location.country} city={u.location.city} isFollowed={u.followed} callback={onChangeHandler}/>
                    </li>
                })
                }
            </ul>
            <button className={c.show_more_btn}>Show more</button>
        </div>
    );
};

export default Users;