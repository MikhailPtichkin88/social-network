import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import c from './Users.module.scss'
import {
    currentPageChangerAC,
    followChangerAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersActionType,
    UserType
} from '../../redux/users-reducer';
import {ReduxStoreType} from '../../redux/redux-store';

import axios from 'axios';
import Users from './Users';

import Spinner from "../common/spinner/Spinner";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToProps = {
    onChangeHandler: (userId: string, isFollowed: boolean) => void
    setUsers: (users: Array<UserType>) => void
    onChangePageHandler: (value: number) => void
    setTotalUsersCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


let mapPropsToState = (state: ReduxStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToState = (dispatch: Dispatch<UsersActionType>): MapDispatchToProps => {
    return {
        onChangeHandler: (userId: string, isFollowed: boolean) => {
            dispatch(followChangerAC(userId, isFollowed))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        onChangePageHandler: (value: number) => {
            dispatch(currentPageChangerAC(value))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        },
    }
}

class UsersAPI extends React.Component<UsersPropsType, ReduxStoreType> {   //типизация <пропсов, стейта>

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onClickHandler = (p: number) => {

        this.props.onChangePageHandler(p)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <>
            <Spinner show={this.props.isFetching} style={c.red}/>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onClickHandler={this.onClickHandler}
                   onChangeHandler={this.props.onChangeHandler}
                   users={this.props.users}
            />
        </>
    }
}


const UsersContainer = connect(mapPropsToState, mapDispatchToState)(UsersAPI)
export default UsersContainer