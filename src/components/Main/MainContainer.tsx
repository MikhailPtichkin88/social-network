import React from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class MainContainer extends React.Component<any, ReduxStoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || "2"
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        debugger
        return (
            <>
                <Main profile={this.props.profile}/>
            </>
        );
    }

};


let mapStateToProps = (state: ReduxStoreType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(MainContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent);