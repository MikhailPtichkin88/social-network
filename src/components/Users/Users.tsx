import React from 'react';
import c from './Users.module.scss'
import User from "./User/User";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import ava from '../../images/avatars/Sveta.svg'
import {UserType} from "../../redux/users-reducer";


class Users extends React.Component<UsersPropsType, any> {   //типизация <пропсов, стейта>

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onClickHandler = (p: number) => {

        this.props.onChangePageHandler(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            console.log(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: Array<number> = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);
        console.log(slicedPages)


        return <div className={c.wrapper}>

            <ul className={c.pagination}>
                {
                    slicedPages.map(p => {

                        let pageClasses = (this.props.currentPage === p) ? c.paginationLink + ' ' + c.activePage : c.paginationLink

                        return <li key={p} className={c.paginationItem}>
                            <button onClick={() => this.onClickHandler(p)} className={pageClasses}>{p}
                            </button>
                        </li>
                    })
                }

            </ul>
            <ul className={c.users_list}>
                {
                    this.props.users.map(u => {
                        const onChangeHandler = (isFollowed: boolean) => {
                            this.props.onChangeHandler(u.id, isFollowed)
                        }
                        const photo = (u.photos.small || u.photos.large) ? (u.photos.small || u.photos.large) : ava

                        return <li key={u.id} className={c.users_item}>
                            <User photoUrl={photo} name={u.name} status={u.status} link={u.uniqueUrlName}
                                  city="User.city" isFollowed={u.followed} callback={onChangeHandler}/>
                        </li>
                    })
                }
            </ul>
            <button className={c.show_more_btn}>Show more</button>
        </div>
    }
}

export default Users;