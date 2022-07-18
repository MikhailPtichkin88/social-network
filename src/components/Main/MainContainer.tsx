import React, {ComponentType} from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import {connect} from "react-redux";
import {
    getProfileUser,
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getMyIdProfile} from "../../redux/auth-reducer";
import AuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";


 class MainContainer extends React.Component<MainContainerPropsType, {}> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId || this.props.auth.userId
        if (userId === 'null') {
            this.props.getMyIdProfile()
        } else {
            userId !== null && this.props.getProfileUser(userId)
        }
    }

    render() {
        return <Main profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: ReduxStoreType) => ({
    profile: state.profilePage.profile,
    auth: state.auth.user,
})

type MainContainerPropsType = mapStateToPropsType & mapDispatchToProps & RouteComponentProps<{ userId: string }, {}, {}>

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    getProfileUser: (userId: string) => void
    getMyIdProfile: () => void
}

export default compose<ComponentType>(
    connect<mapStateToPropsType, mapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {
        getProfileUser,
        getMyIdProfile
    }),
    withRouter,
    AuthRedirect
)(MainContainer)

// let WithUrlDataContainerComponent = withRouter<any, any>(AuthRedirect(MainContainer))
//
//  connect<mapStateToPropsType, mapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {
//     getProfileUser,
//     getMyIdProfile
// })(WithUrlDataContainerComponent);