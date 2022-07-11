import React from 'react';
import {connect} from 'react-redux';
import c from './Users.module.scss'
import {
    currentPageChangerAC,
    followChangerAC, setIsFetchingAC, setIsFollowingAC,
    setTotalUsersCountAC,
    setUsersAC, unFollowChangerAC,
    UserType
} from '../../redux/users-reducer';
import {ReduxStoreType} from '../../redux/redux-store';
import Users from './Users';
import Spinner from "../common/spinner/Spinner";
import {userAPI} from "../../api/api";


class UsersAPI extends React.Component<UsersPropsType, ReduxStoreType> {   //типизация <пропсов, стейта>

    componentDidMount() {
        this.props.setIsFetchingAC(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setIsFetchingAC(false)
            this.props.setUsersAC(response.items)
            this.props.setTotalUsersCountAC(response.totalCount)
        })
    }

    onClickHandler = (p: number) => {

        this.props.currentPageChangerAC(p)
        this.props.setIsFetchingAC(true)
        userAPI.getUsers(p, this.props.pageSize).then(response => {
            this.props.setIsFetchingAC(false)
            this.props.setUsersAC(response.items)
        })
    }

    render() {

        return <>
            <Spinner show={this.props.isFetching} style={c.red}/>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onClickHandler={this.onClickHandler}
                   followChangerAC={this.props.followChangerAC}
                   unFollowChangerAC={this.props.unFollowChangerAC}
                   users={this.props.users}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   setIsFollowingAC={this.props.setIsFollowingAC}
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
    isFollowingInProgress:number[]
}

type MapDispatchToProps = {
    followChangerAC: (userId: string) => void
    unFollowChangerAC: (userId: string) => void
    setUsersAC: (users: Array<UserType>) => void
    currentPageChangerAC: (value: number) => void
    setTotalUsersCountAC: (count: number) => void
    setIsFetchingAC: (isFetching: boolean) => void
    setIsFollowingAC: (userId:number, isFetching:boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


let mapStateToProps = (state: ReduxStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress:state.usersPage.isFollowingInProgress
    }
}

const UsersContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {
    followChangerAC,
    unFollowChangerAC,
    setUsersAC,
    currentPageChangerAC,
    setTotalUsersCountAC,
    setIsFetchingAC,
    setIsFollowingAC,
})(UsersAPI)
export default UsersContainer

//  " ...если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента."
