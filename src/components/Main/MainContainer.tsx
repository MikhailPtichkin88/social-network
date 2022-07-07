import React from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfileAC, UserProfileContactsType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthDataType} from "../../redux/auth-reducer";

type MainContainerPropsType = RouteComponentProps<ParamType> & OwnParamsType

type mapStateToProps = {
    profile: ProfileUserType
    auth:AuthDataType
}
type mapDispatchToProps = {
    setUserProfile: (profile: UserProfileContactsType) => void
}
type ParamType = {
    userId: string
}

type OwnParamsType = mapStateToProps & mapDispatchToProps

class MainContainer extends React.Component<MainContainerPropsType, ReduxStoreType> {

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
    auth:state.auth
})

let WithUrlDataContainerComponent: any = withRouter(MainContainer)


export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent);