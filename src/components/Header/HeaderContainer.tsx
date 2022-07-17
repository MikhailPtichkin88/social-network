import React from 'react';
import Header from "./Header";
import {
    getMyId
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
        this.props.getMyId()
    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login} photo={this.props.photo}/>
            </>
        );
    }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    getMyId: () => void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStoreType) => ({
    isAuth: state.auth.user.isAuth,
    login: state.auth.user.login,
    id: state.auth.user.userId,
    photo: state.auth.profile.photo
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxStoreType>(mapStateToProps, {getMyId})(HeaderContainer);