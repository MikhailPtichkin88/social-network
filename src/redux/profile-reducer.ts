import {v1} from "uuid";
import {PhotosType} from "./users-reducer";
import {AppDispatch, AppThunk} from "./redux-store";
import {userAPI} from "../api/api";
import {AuthUserType, setAuthUserDataAC, setAuthUserPhotoAC} from "./auth-reducer";

// другой вариант типизации
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
    newPostText: "",
    profile: {} as ProfileUserType
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
            return {...state, posts: [newPost, ...state.posts], newPostText: ""}

        case "CHANGE-POST-TEXT":
            return {...state, newPostText: action.textMessage}
        case'SET-USER-PROFILE':
            return {...state, profile: {...state.profile, ...action.payload.profile}}
        default:
            return state
    }
}

export type ProfileActionType = addPostActionCreatorType | changePostActionCreatorType | setUserProfileACType
type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type changePostActionCreatorType = ReturnType<typeof changePostActionCreator>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export const addPostActionCreator = (text: string) => {
    return {
        type: "ADD-POST",
        postMessage: text,
    } as const
}

export const changePostActionCreator = (text: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        textMessage: text,
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

export const getProfileUser = (userId:string): AppThunk => {

    return (dispatch: AppDispatch) => {
        userAPI.getProfile(+userId)
            .then(response => {
                debugger
                dispatch(setUserProfileAC(response))
            })
    }
}

export default profileReducer