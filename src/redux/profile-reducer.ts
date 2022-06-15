import {
    ActionsType,
    PostsType, ProfilePageType,
} from "./store";


let initialState:ProfilePageType = {
        posts: [
            {id: "1", message: 'Hey!', likeCount: 2},
            {id: "2", message: 'second post', likeCount: 4},
            {id: "3", message: 'How are you?', likeCount: 5}
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