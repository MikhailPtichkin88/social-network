import {v1} from "uuid";
import {PhotosType} from "./users-reducer";
import {AppDispatch, AppThunk} from "./redux-store";
import {authAPI, profileAPI} from "../api/api";


export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type UserProfileContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
}

export type ProfileUserType = {
    aboutMe: string,
    contacts: UserProfileContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType,
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hey!', likeCount: 2},
        {id: v1(), message: 'second post', likeCount: 4},
        {id: v1(), message: 'How are you?', likeCount: 5}
    ] as Array<PostsType>,                                  // !!!
    profile: {} as ProfileUserType,
    status: ""
}

export type ProfilePageType = typeof initialState               // !!!

const profileReducer = (state = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: '5',
                message: action.postMessage,
                likeCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}

        case'SET-USER-PROFILE':
            return {...state, profile: {...state.profile, ...action.payload.profile}}
        case "SET-STATUS":
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

export type ProfileActionType =
    | addPostActionCreatorType
    | setUserProfileACType
    | setProfileStatusType

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type setUserProfileACType = ReturnType<typeof setUserProfileAC>
type setProfileStatusType = ReturnType<typeof setProfileStatusAC>

export const addPostActionCreator = (text: string) => {
    return {
        type: "ADD-POST",
        postMessage: text,
    } as const
}

export const setUserProfileAC = (profile: ProfileUserType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        },
    } as const
}

export const setProfileStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        payload: {
            status
        }
    } as const
}

export const getMyIdProfile = (): AppThunk => {
    return (dispatch: AppDispatch) => {
        authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    console.log(response.data)
                    return response.data.id
                }
            })
            .then(id => {
                dispatch(getProfileUser(id))
                dispatch(getProfileStatus(id))
            })
    }
}

export const getProfileUser = (userId: string): AppThunk => {
    return (dispatch: AppDispatch) => {
      profileAPI.getProfile(userId)
            .then(response => {
                console.log(response)
                dispatch(setUserProfileAC(response))
                return response.userId
            })
    }
}

export const setProfileStatus = (status: string): AppThunk => {

    let statusJson = {"status": status}

    return (dispatch: AppDispatch) => {
        profileAPI.updateStatus(statusJson)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(setProfileStatusAC(status))
                }
                return response
            })
    }
}

export const getProfileStatus = (userId: string): AppThunk => {

    return (dispatch: AppDispatch) => {

        profileAPI.getStatus(userId)
            .then(response => {
                console.log(response)
                dispatch(setProfileStatusAC(response))
            })
    }
}


export default profileReducer



