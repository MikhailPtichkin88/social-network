import {v1} from "uuid";

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersType = {
    users: Array<UserType>
}


let initialState: UsersType = {
    users: [
        {
            id: v1(),
            photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
            followed: true,
            fullName: 'Mikhail',
            status: "Hey there, let's go for a drink",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: v1(),
            photoUrl: "https://vjoy.cc/wp-content/uploads/2020/03/2824678843.jpg",
            followed: true,
            fullName: 'Alex',
            status: "Hey there, let's go for a drink",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: v1(),
            photoUrl: "https://klike.net/uploads/posts/2019-03/1551511823_2.jpg",
            followed: false,
            fullName: 'Sveta',
            status: "Looking for a job right now",
            location: {city: "Los Angeles", country: "USA"}
        },
    ],
}

const usersReducer = (state = initialState, action: UsersActionType):UsersType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":

            return {...state,
                users: state.users.map(t => t.id === action.payload.userId ? {
                    ...t,
                    followed: action.payload.isFollowed
                } : t)
            }

        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]}

        default:
            return state
    }
}


export type UsersActionType = followChangerACType | setUsersACType

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

export default usersReducer