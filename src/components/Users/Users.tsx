import React from 'react';
import c from './Users.module.scss'
import User from "./User/User";
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers()
    }

    return (
        <div className={c.wrapper}>
            <ul className={c.users_list}>
                {
                    props.users.map(u => {
                        const onChangeHandler = (isFollowed: boolean) => {
                            props.onChangeHandler(u.id, isFollowed)
                        }

                        return <li key={u.id} className={c.users_item}>
                            <User photoUrl={u.photoUrl} name={u.fullName} status={u.status} country={u.location.country}
                                  city={u.location.city} isFollowed={u.followed} callback={onChangeHandler}/>
                        </li>
                    })
                }
            </ul>
            <button className={c.show_more_btn}>Show more</button>
        </div>
    );
};

export default Users;