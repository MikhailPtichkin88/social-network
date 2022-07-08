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



class MainContainer extends React.Component<MainContainerPropsType, any> {

    componentDidMount() {
        let userId = this.props.auth.userId || "2"
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
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
    auth:state.auth.user
})

type MainContainerPropsType = mapStateToPropsType & mapDispatchToProps

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    setUserProfile: (profile: ProfileUserType) => setUserProfileACType
}

let WithUrlDataContainerComponent = withRouter<RouteComponentProps, any>(MainContainer)

export default connect<mapStateToPropsType,mapDispatchToProps,{},ReduxStoreType>(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent);