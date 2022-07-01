import React from 'react';
import c from "./Users.module.scss";
import ava from "../../images/avatars/Sveta.svg";
import User from "./User/User";
import {UserType} from "../../redux/users-reducer";

type UsersPresentationPropsType ={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onClickHandler:(p:number)=>void
    onChangeHandler:(userId: string, isFollowed: boolean) =>void
    users:Array<UserType>
}


const Users = (props:UsersPresentationPropsType) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 3) < 0) ? 0 : curP - 3;
    let curPL = ((curP) > 3) ? curP+3 : curP + 2;
    let slicedPages = pages.slice(curPF, curPL);


    return (
        <div className={c.wrapper}>

            <ul className={c.pagination}>
                {
                    slicedPages.map(p => {

                        let pageClasses =  props.currentPage === (p) ? c.paginationLink + ' ' + c.activePage : c.paginationLink

                        return <li key={p} className={c.paginationItem}>
                            <button onClick={() => props.onClickHandler(p)} className={pageClasses}>{p}
                            </button>
                        </li>
                    })
                }

            </ul>
            <ul className={c.users_list}>
                {
                    props.users.map(u => {
                        const onChangeHandler = (isFollowed: boolean) => {
                            props.onChangeHandler(u.id, isFollowed)
                        }
                        const photo = (u.photos.small || u.photos.large) ? (u.photos.small || u.photos.large) : ava

                        return <li key={u.id} className={c.users_item}>
                            <User userId={u.id} photoUrl={photo} name={u.name} status={u.status} link={u.uniqueUrlName}
                                  city="User.city" isFollowed={u.followed} callback={onChangeHandler}/>
                        </li>
                    })
                }
            </ul>
            <button className={c.show_more_btn}>Show more</button>
        </div>
    );
};

export default Users;