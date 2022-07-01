import React from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";


class MainContainer extends React.Component<any, ReduxStoreType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

};


let mapStateToProps = (state: ReduxStoreType) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(MainContainer);