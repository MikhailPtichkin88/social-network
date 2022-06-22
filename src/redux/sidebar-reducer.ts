import {v1} from "uuid";

 export type AvatarsType = {
    id: string
    friend: string
    avatar: string
}

export type SidebarType = {
    avatars: Array<AvatarsType>
}

let initialState:SidebarType = {
    avatars: [
        {id: v1(), friend: "Andrew", avatar: '/images/avatars/Andrew.svg'},
        {id: v1(), friend: "Dmitry", avatar: '/images/avatars/Dmitry.svg'},
        {id: v1(), friend: "Sasha", avatar: '/images/avatars/Sasha.svg'},
    ]
}


const sidebarReducer = (state=initialState, action:any):SidebarType =>{

    return state
}

export default sidebarReducer