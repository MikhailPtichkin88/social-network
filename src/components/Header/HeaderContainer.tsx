import React from 'react';
import Header from "./Header";
import {AuthDataType, setAuthUserData, SetUserDataType} from "../../redux/auth-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType, ReduxStoreType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                this.props.setAuthUserData({userId: id, email, login, isAuth:true})
            }
        }).then(()=>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`, {
                withCredentials: true
            }).then(response =>            console.log(response.data))
        })

    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login}/>
            </>
        );
    }
}

type setAuthUserDataType = {
    setAuthUserData: (data: AuthDataType) => SetUserDataType
}
type HeaderContainerPropsType = ReturnType<typeof mapStateToProps> & setAuthUserDataType


const mapStateToProps = (state: ReduxStoreType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    id: state.auth.userId
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);