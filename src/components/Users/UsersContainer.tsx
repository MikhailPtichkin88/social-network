import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    currentPageChangerAC,
    followChangerAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersActionType,
    UserType
} from "../../redux/users-reducer";
import {v1} from "uuid";
import {ReduxStoreType} from "../../redux/redux-store";





type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage:number
}

type MapDispatchToProps = {
    onChangeHandler: (userId: string, isFollowed: boolean)=>void
    setUsers: (users:Array<UserType>)=> void
    onChangePageHandler: (value:number) => void
    setTotalUsersCount:(count:number)=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


let mapPropsToState = (state: ReduxStoreType):MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

let mapDispatchToState = (dispatch: Dispatch<UsersActionType>):MapDispatchToProps => {
    return {
        onChangeHandler: (userId: string, isFollowed: boolean) => {
            dispatch(followChangerAC(userId, isFollowed))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        onChangePageHandler: (value:number) =>{
            dispatch(currentPageChangerAC(value))
        },
        setTotalUsersCount:(count:number)=>{
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

const UsersContainer = connect(mapPropsToState, mapDispatchToState)(Users)
export default UsersContainer