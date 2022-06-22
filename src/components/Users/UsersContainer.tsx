import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followChangerAC, setUsersAC, UsersActionType, UserType} from "../../redux/users-reducer";
import {v1} from "uuid";
import {ReduxStoreType} from "../../redux/redux-store";

let users = [
    {
        id: v1(),
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        followed: true,
        fullName: 'Mikhail',
        status: "I am a boss",
        location: {city: "Moscow", country: "Russia"}
    },
]


type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToProps = {
    onChangeHandler: (userId: string, isFollowed: boolean)=>void
    setUsers: ()=> void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


let mapPropsToState = (state: ReduxStoreType):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToState = (dispatch: Dispatch<UsersActionType>):MapDispatchToProps => {
    return {
        onChangeHandler: (userId: string, isFollowed: boolean) => {
            dispatch(followChangerAC(userId, isFollowed))
        },
        setUsers: () => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapPropsToState, mapDispatchToState)(Users)
export default UsersContainer