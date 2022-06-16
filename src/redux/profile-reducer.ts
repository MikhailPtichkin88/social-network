import {
    ActionsType,
    PostsType, ProfilePageType,
} from "./types";
import {v1} from "uuid";


let initialState:ProfilePageType = {
        posts: [
            {id: v1(), message: 'Hey!', likeCount: 2},
            {id: v1(), message: 'second post', likeCount: 4},
            {id: v1(), message: 'How are you?', likeCount: 5}
        ],
        newPostText: ""
    }

const profileReducer = (state=initialState, action:ActionsType) =>{
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: '5',
                message: action.postMessage,
                likeCount: 0
            }
            return {...state, posts:[newPost, ...state.posts],newPostText:""}

        case "CHANGE-POST-TEXT":
            return {...state, newPostText:action.textMessage}

        default:
            return state
    }
}

///Action creators
export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type changePostActionCreatorType = ReturnType<typeof changePostActionCreator>

export const addPostActionCreator = (text:string) => {
    return {
        type: "ADD-POST",
        postMessage: text,
    }as const
}

export const changePostActionCreator = (text:string) => {
    return {
        type: "CHANGE-POST-TEXT",
        textMessage: text,
    }as const
}


export default profileReducer