import {AppDispatch, AppThunk} from "./redux-store";
import {authAPI, profileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthUserType = {
    userId: null | string,
    email: null | string,
    login: null | string,
    isAuth: boolean,
}

export type AuthProfileType = {
    photo: null | string
}

export type AuthDataType = {
    user: AuthUserType,
    profile: AuthProfileType
}

const initialState = {
    user: {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
    },
    profile: {
        photo: null
    }
}


export const authReducer = (state: AuthDataType = initialState, action: AuthActionType): AuthDataType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, user: {...action.payload.data}}
        case "SET-USER-PHOTO":
            return {...state, profile: {...state.profile, photo: action.payload.photo}}
        default:
            return state
    }
}

export type AuthActionType = SetUserDataType | SetUserPhotoType

export type SetUserDataType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (data: AuthUserType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data
        }
    } as const
}
export type SetUserPhotoType = ReturnType<typeof setAuthUserPhotoAC>
export const setAuthUserPhotoAC = (photo: string | null) => {
    return {
        type: 'SET-USER-PHOTO',
        payload: {
            photo
        }
    } as const
}


export const getMyData = (): AppThunk => {
    return (dispatch: AppDispatch) => {

       return authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    let {email, id, login} = response.data
                    let data: AuthUserType = {userId: id, email, login, isAuth: true}
                    dispatch(setAuthUserDataAC(data))
                } else if (response.resultCode === 1) {
                    console.log("You are not authorized")
                }
                return response
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch: AppDispatch) => {


        authAPI.login(email, password, rememberMe)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(getMyData())
                } else {
                    let messages = response.data.messages.length >= 1 ? response.data.messages[0] : "Some error"

                    dispatch(stopSubmit("login", {_error: `${messages}`}))
                }

            })
    }
}

export const logout = (): AppThunk => {
    return (dispatch: AppDispatch) => {

        authAPI.logout()
            .then(res => {
                let data: AuthUserType = {
                    userId: null,
                    email: null,
                    login: null,
                    isAuth: false,
                }
                dispatch(setAuthUserDataAC(data))
                dispatch(setAuthUserPhotoAC(null))
            })
    }
}


