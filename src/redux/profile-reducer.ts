import {v1} from "uuid";

// другой вариант типизации

let initialState = {
        posts: [
            {id: v1(), message: 'Hey!', likeCount: 2},
            {id: v1(), message: 'second post', likeCount: 4},
            {id: v1(), message: 'How are you?', likeCount: 5}
        ] as Array<PostsType>,                                  // !!!
        newPostText: ""
    }

export type PostsType = {
    id: string
    message: string
    likeCount: number
}

export type ProfilePageType = typeof initialState               // !!!

const profileReducer = (state=initialState, action:ProfileActionType):ProfilePageType =>{
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

export type ProfileActionType = addPostActionCreatorType | changePostActionCreatorType
 type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
 type changePostActionCreatorType = ReturnType<typeof changePostActionCreator>

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