import React from 'react';
import Header from "./Header";
import {
    getMyData, logout
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login} photo={this.props.photo} id={this.props.id} logout={this.props.logout}/>
            </>
        );
    }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    logout: ()=>void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStoreType) => ({
    isAuth: state.auth.user.isAuth,
    login: state.auth.user.login,
    id: state.auth.user.userId,
    photo: state.auth.profile.photo
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxStoreType>(mapStateToProps, {logout})(HeaderContainer);