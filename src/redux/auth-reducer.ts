import {AppDispatch, AppThunk} from "./redux-store";
import {authAPI, profileAPI, userAPI} from "../api/api";
import {setIsFollowingAC, unFollowChangerAC} from "./users-reducer";
import {getProfileStatus, getProfileUser, setProfileStatusAC} from "./profile-reducer";

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
export const setAuthUserPhotoAC = (photo: string) => {
    return {
        type: 'SET-USER-PHOTO',
        payload: {
            photo
        }
    } as const
}


export const getMyIdWithPhoto = (): AppThunk => {
    return (dispatch: AppDispatch) => {

        authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    let {email, id, login} = response.data
                    let data: AuthUserType = {userId: id, email, login, isAuth: true}
                    dispatch(setAuthUserDataAC(data))
                }
                return response
            })
            .then((response) => {
                profileAPI.getProfile(response.data.id)
                    .then(response => {
                        dispatch(setAuthUserPhotoAC(response.photos.small))
                    })
            })
    }
}

