import {
    ActionsType,
    PostsType, ProfilePageType,
} from "./state";




const profileReducer = (state:ProfilePageType, action:ActionsType) =>{
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: '5',
                message: action.postMessage,
                likeCount: 0
            }
            state.posts.push(newPost);
            return state
        case "CHANGE-POST-TEXT":
            state.newPostText = action.textMessage
            return state
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