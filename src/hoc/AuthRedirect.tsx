import React, {ComponentType, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {ReduxStoreType} from "../redux/redux-store";
import {connect} from "react-redux";


type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps =  (state: ReduxStoreType): mapStateToPropsType => ({
    isAuth: state.auth.user.isAuth
})


 function AuthRedirect<T> (Component: ComponentType<T>)  {

    const AuthRedirectComponent =  (props: mapStateToPropsType) => {
        // пропс приходят из connect

        let {isAuth, ...restProps} = props
        return !isAuth
            ? <Redirect to={'/login/'}/>
            : <Component {...restProps as T}/>
    }

        return  connect<mapStateToPropsType, {}, {}, ReduxStoreType>(mapStateToProps, {})(AuthRedirectComponent);



}
export default AuthRedirect;