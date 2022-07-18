import React from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import {connect} from "react-redux";
import {
    getProfileUser,
} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getMyIdProfile} from "../../redux/auth-reducer";


class MainContainer extends React.Component<MainContainerPropsType, {}> {

    componentDidMount() {

        let userId = this.props.match.params.userId || this.props.auth.userId
        if (userId === 'null') {
            this.props.getMyIdProfile()
        } else {
            userId !== null && this.props.getProfileUser(userId)
        }
    }

    render() {
        return this.props.auth.isAuth
            ? <Main profile={this.props.profile}/>
            : <Redirect to={'/login/'}/>
    }
}

let mapStateToProps = (state: ReduxStoreType) => ({
    profile: state.profilePage.profile,
    auth: state.auth.user
})

type MainContainerPropsType = mapStateToPropsType & mapDispatchToProps & RouteComponentProps<{ userId: string }, {}, {}>


type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    getProfileUser: (userId: string) => void
    getMyIdProfile: () => void
}

let WithUrlDataContainerComponent = withRouter<any, any>(MainContainer)

export default connect<mapStateToPropsType, mapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {
    getProfileUser,
    getMyIdProfile
})(WithUrlDataContainerComponent);