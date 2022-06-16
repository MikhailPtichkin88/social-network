import {SidebarType} from "./types";
import {v1} from "uuid";


let initialState:SidebarType = {
    avatars: [
        {id: v1(), friend: "Andrew", avatar: '/images/avatars/Andrew.svg'},
        {id: v1(), friend: "Dmitry", avatar: '/images/avatars/Dmitry.svg'},
        {id: v1(), friend: "Sasha", avatar: '/images/avatars/Sasha.svg'},
    ]
}


const sidebarReducer = (state=initialState, action:any) =>{

    return state
}

export default sidebarReducer