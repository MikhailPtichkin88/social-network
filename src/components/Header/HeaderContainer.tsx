import React from 'react';
import Header from "./Header";
import {
    getMyIdWithPhoto
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

    componentDidMount() {
        this.props.getMyIdWithPhoto()
    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login} photo={this.props.photo} id={this.props.id}/>
            </>
        );
    }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    getMyIdWithPhoto: () => void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStoreType) => ({
    isAuth: state.auth.user.isAuth,
    login: state.auth.user.login,
    id: state.auth.user.userId,
    photo: state.auth.profile.photo
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxStoreType>(mapStateToProps, {getMyIdWithPhoto})(HeaderContainer);