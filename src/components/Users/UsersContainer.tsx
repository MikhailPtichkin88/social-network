import React from 'react';
import {connect} from 'react-redux';
import c from './Users.module.scss'
import {
    currentPageChangerAC,
    followSuccess, getUsers, setIsFollowingAC,
    unfollowSuccess,
    UserType
} from '../../redux/users-reducer';
import {ReduxStoreType} from '../../redux/redux-store';
import Users from './Users';
import Spinner from "../common/spinner/Spinner";


class UsersAPI extends React.Component<UsersPropsType, ReduxStoreType> {   //типизация <пропсов, стейта>

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickHandler = (p: number) => {
        this.props.currentPageChangerAC(p)
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {

        return <>
            <Spinner show={this.props.isFetching} style={c.red}/>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onClickHandler={this.onClickHandler}
                   users={this.props.users}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   followSuccess={this.props.followSuccess}
                   unfollowSuccess={this.props.unfollowSuccess}
            />
        </>
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}

type MapDispatchToProps = {
    currentPageChangerAC: (value: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followSuccess: (userId: string) => void
    unfollowSuccess: (userId: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


let mapStateToProps = (state: ReduxStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

const UsersContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {
    currentPageChangerAC,
    getUsers,
    followSuccess,
    unfollowSuccess,
})(UsersAPI)
export default UsersContainer

//  " ...если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента."
