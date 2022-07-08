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
import {userAPI} from "../../api/api";


class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
       userAPI.getMyId()
           .then(response => {
               // debugger
            if (response.resultCode === 0) {
                let {email, id, login} = response.data
                console.log(response)
                let data:AuthUserType={userId:id, email,login,isAuth:true}
                this.props.setAuthUserData(data)
            }
            return response

        })
           .then((response) => {
            userAPI.getProfile(response.data.id)
                .then(response => {
                this.props.setAuthUserPhoto(response.photos.small)

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