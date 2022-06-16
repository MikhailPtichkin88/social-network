import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {ActionsType, RootStateType, UserType} from "../../redux/types";
import {Dispatch} from "redux";
import {followChangerAC, setUsersAC} from "../../redux/users-reducer";
import {v1} from "uuid";

let users = [
    {
        id: v1(),
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpgg",
        followed: true,
        fullName: 'Mikhail',
        status: "I am a boss",
        location: {city: "Moscow", country: "Russia"}
    },

]

let mapPropsToState = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToState = (dispatch: Dispatch<ActionsType>) => {
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