import React from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {
    ProfileUserType,
    setUserProfileAC,
    setUserProfileACType,
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";


class MainContainer extends React.Component<any, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId || this.props.auth.userId

        userAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response)
            })
    }

    render() {
        return (
            <>
                <Main profile={this.props.profile}/>
            </>
        );
    }

}

let mapStateToProps = (state: ReduxStoreType) => ({
    profile: state.profilePage.profile,
    auth: state.auth.user
})

type MainContainerPropsType = mapStateToPropsType & mapDispatchToProps & RouteComponentProps

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    setUserProfile: (profile: ProfileUserType) => setUserProfileACType
}


let WithUrlDataContainerComponent = withRouter<any, any>(MainContainer)

export default connect<mapStateToPropsType, mapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent);