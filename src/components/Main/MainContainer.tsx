import React, {ComponentType, useEffect} from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import {connect} from "react-redux";
import {
    getMyIdProfile,
    getProfileStatus,
    getProfileUser, setProfileStatus,
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import AuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";


class MainContainer extends React.Component<MainContainerPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId ?  this.props.match.params.userId  :  this.props.auth.userId || ''
        this.props.getProfileUser(userId)
        this.props.getProfileStatus(userId)

    }

    componentDidUpdate(prevProps: any) {

        let userId = this.props.match.params.userId ||this.props.auth.userId
         let prevUserId = prevProps.match.params.userId || prevProps.auth.userId
         console.log({userId, prevUserId})
         if (userId !== prevUserId) {
             if (userId !== null) {
                 this.props.getProfileUser(userId)
             }
             if (userId !== null) {
                 this.props.getProfileStatus(userId)
             }
         }
    }

    render() {
        return <Main status={this.props.status} setProfileStatus={this.props.setProfileStatus}
                     profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: ReduxStoreType) => ({
    profile: state.profilePage.profile,
    auth: state.auth.user,
    status: state.profilePage.status
})

type MainContainerPropsType = mapStateToPropsType & mapDispatchToProps & RouteComponentProps<{ userId: string }, {}, {}>

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    getProfileUser: (userId: string) => void
    getMyIdProfile: () => void
    setProfileStatus: (status: string) => void
    getProfileStatus: (userId: string) => void
}

export default compose<ComponentType>(
    connect<mapStateToPropsType, mapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {
        getProfileUser,
        getMyIdProfile,
        setProfileStatus,
        getProfileStatus
    }),
    withRouter,
    AuthRedirect
)(MainContainer)

// const MainContainer = (props:MainContainerPropsType)=>{
//
//     useEffect(()=>{
//         let userId = props.match.params.userId ? props.match.params.userId  : props.auth.userId || ''
//         props.getProfileUser(userId)
//         props.getProfileStatus(userId)
//
//     },[props.auth.userId, props.match.params.userId])
//     return <Main status={props.status} setProfileStatus={props.setProfileStatus}
//                  profile={props.profile}/>
// }