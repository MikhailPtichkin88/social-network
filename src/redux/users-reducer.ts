import {v1} from "uuid";

export type PhotosType = {
    large: string
    small: string
}

export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: UsersType = initialState, action: UsersActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":

            return {
                ...state,
                users: state.users.map(t => t.id === action.payload.userId ? {
                    ...t,
                    followed: action.payload.isFollowed
                } : t)
            }

        case "SET-USERS":
            return {...state, users: action.payload.users}
        case "CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.payload.value}
        case "CHANGE-TOTAL-COUNT":
            return {...state, totalUsersCount: action.payload.value}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching:action.payload.isFetching}
        default:
            return state
    }
}


export type UsersActionType = followChangerACType | setUsersACType | currentPageChangerACType | setTotalUsersCountACType | SetIsFetchingACType

type followChangerACType = ReturnType<typeof followChangerAC>

export const followChangerAC = (userId: string, isFollowed: boolean) => {
    return {
        type: "FOLLOW-UNFOLLOW",
        payload: {
            userId,
            isFollowed,
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}

type currentPageChangerACType = ReturnType<typeof currentPageChangerAC>
export const currentPageChangerAC = (value: number) => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        payload: {
            value
        }
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (value: number) => {
    return {
        type: "CHANGE-TOTAL-COUNT",
        payload: {
            value
        }
    } as const
}

type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching:boolean)=>{
    return{
        type: 'TOGGLE-IS-FETCHING',
        payload:{
            isFetching
        }
    }as const
}
export default usersReducer