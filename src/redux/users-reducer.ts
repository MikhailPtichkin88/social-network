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
    isFetching: boolean,
    isFollowingInProgress:number[]
}

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
}

const usersReducer = (state: UsersType = initialState, action: UsersActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":

            return {
                ...state,
                users: state.users.map(t => t.id === action.payload.userId ? {
                    ...t,
                    followed: action.payload.followed
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
        case "TOGGLE-IS-FOLLOWING":
            return {...state,
                isFollowingInProgress: action.payload.isFetching
            ? [...state.isFollowingInProgress, action.payload.userId]
            : state.isFollowingInProgress.filter(id=>id!== action.payload.userId)}
        default:
            return state
    }
}


export type UsersActionType = followChangerACType | setUsersACType | currentPageChangerACType | setTotalUsersCountACType | SetIsFetchingACType | unFollowChangerACType | SetIsFollowingACType

export type followChangerACType = ReturnType<typeof followChangerAC>
export const followChangerAC = (userId: string) => {
    return {
        type: "FOLLOW-UNFOLLOW",
        payload: {
            userId,
            followed:true,
        }
    } as const
}

export type unFollowChangerACType = ReturnType<typeof unFollowChangerAC>
export const unFollowChangerAC = (userId: string) => {
    return {
        type: "FOLLOW-UNFOLLOW",
        payload: {
            userId,
            followed:false,
        }
    } as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}

export type currentPageChangerACType = ReturnType<typeof currentPageChangerAC>
export const currentPageChangerAC = (value: number) => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        payload: {
            value
        }
    } as const
}

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (value: number) => {
    return {
        type: "CHANGE-TOTAL-COUNT",
        payload: {
            value
        }
    } as const
}

export type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export const setIsFetchingAC = (isFetching:boolean)=>{
    return{
        type: 'TOGGLE-IS-FETCHING',
        payload:{
            isFetching
        }
    }as const
}

export type SetIsFollowingACType = ReturnType<typeof setIsFollowingAC>
export const setIsFollowingAC = (userId:number, isFetching:boolean)=>{
    return{
        type: 'TOGGLE-IS-FOLLOWING',
        payload:{
            userId,
            isFetching,
        }
    }as const
}
export default usersReducer