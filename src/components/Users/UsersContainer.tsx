import React from 'react';
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
import {ReduxStoreType} from "../../redux/redux-store";

import axios from "axios";
import Users from "./Users";


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

 class UsersAPI extends React.Component<UsersPropsType, ReduxStoreType> {   //типизация <пропсов, стейта>

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
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onClickHandler={this.onClickHandler}
                      onChangeHandler={this.props.onChangeHandler}
                      users={this.props.users}
        />
    }
}







const UsersContainer = connect(mapPropsToState, mapDispatchToState)(UsersAPI)
export default UsersContainer