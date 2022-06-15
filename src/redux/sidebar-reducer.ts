import {SidebarType} from "./store";


let initialState:SidebarType = {
    avatars: [
        {id: "1", friend: "Andrew", avatar: '/images/avatars/Andrew.svg'},
        {id: "2", friend: "Dmitry", avatar: '/images/avatars/Dmitry.svg'},
        {id: "3", friend: "Sasha", avatar: '/images/avatars/Sasha.svg'},
    ]
}


const sidebarReducer = (state=initialState, action:any) =>{

    return state
}

export default sidebarReducer