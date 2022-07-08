import React from 'react';
import Header from "./Header";
import {
    AuthDataType, AuthUserType, setAuthUserDataAC,
    setAuthUserPhotoAC,
    SetUserDataType, SetUserPhotoType
} from "../../redux/auth-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true

        }).then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                let data:AuthUserType={userId:id, email,login,isAuth:true}
                this.props.setAuthUserData(data)
            }

        }).then(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`, {
                withCredentials: true

            }).then(response => {
                this.props.setAuthUserPhoto(response.data.photos.small)
                console.log(response.data.photos.small)
            })
        })
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
    setAuthUserData: (data: AuthUserType) => SetUserDataType
    setAuthUserPhoto: (photo: string) => SetUserPhotoType
}
type HeaderContainerPropsType =MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStoreType) => ({
    isAuth: state.auth.user.isAuth,
    login: state.auth.user.login,
    id: state.auth.user.userId,
    photo: state.auth.profile.photo
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {},ReduxStoreType>(mapStateToProps, {setAuthUserData: setAuthUserDataAC, setAuthUserPhoto:setAuthUserPhotoAC})(HeaderContainer);