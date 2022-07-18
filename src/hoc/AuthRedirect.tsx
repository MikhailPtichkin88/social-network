import React from 'react';
import {Redirect} from "react-router-dom";
import {ReduxStoreType} from "../redux/redux-store";
import {connect} from "react-redux";


const AuthRedirect = (Component:any) => {

    const AuthRedirectComponent = (props: any & mapStateToPropsType) => {

        return !props.isAuth
            ? <Redirect to={'/login/'}/>
            : <Component {...props}/>
    }

    type mapStateToPropsType = ReturnType<typeof mapStateToProps>
    let mapStateToProps = (state: ReduxStoreType) => ({
        isAuth:state.auth.user.isAuth
    })

    return  connect<mapStateToPropsType, {}, {}, ReduxStoreType>(mapStateToProps, {})(AuthRedirectComponent);


};
export default AuthRedirect;