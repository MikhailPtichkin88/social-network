import React from 'react';
import {ReduxStoreType} from "../../redux/redux-store";
import Main from "./Main";
import {connect} from "react-redux";
import {
    getProfileUser,
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getMyIdProfile} from "../../redux/auth-reducer";



class MainContainer extends React.Component<MainContainerPropsType, {}> {

    componentDidMount() {
debugger
        let userId = this.props.match.params.userId  || this.props.auth.userId
        if (userId === 'null'){
            this.props.getMyIdProfile()
        }
    }


    render() {
        console.log(this.props)
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

type MainContainerPropsType = mapStateToPropsType & mapDispatchToProps & RouteComponentProps<{ userId: string }, {}, {}>


type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    getProfileUser: (userId: string) => void
    getMyIdProfile:()=>void
}

let WithUrlDataContainerComponent = withRouter<any, any>(MainContainer)

export default connect<mapStateToPropsType, mapDispatchToProps, {}, ReduxStoreType>(mapStateToProps, {getProfileUser,getMyIdProfile})(WithUrlDataContainerComponent);