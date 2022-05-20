
import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: string
    author: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type PostsType = {
    id: string
    message: string
    likeCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText:string
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type AvatarsType = {
    id: string
    friend: string
    avatar: string
}

export type SidebarType = {
    avatars: Array<AvatarsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: "1", message: 'Hey!', likeCount: 2},
            {id: "2", message: 'second post', likeCount: 4},
            {id: "3", message: 'How are you?', likeCount: 5}
        ],
        newPostText: ""
    },

    dialogPage: {
        dialogs: [
            {id: "1", name: "Andrew"},
            {id: "2", name: "Dmitry"},
            {id: "3", name: "Sasha"},
            {id: "4", name: "Sveta"},
            {id: "5", name: "Valera"},
            {id: "6", name: "Victor"},
            {id: "7", name: "Igor"},
            {id: "8", name: "Evgraf"}
        ],

        messages: [
            {id: "1", author: "Andrew", message: 'Hey!'},
            {id: "2", author: "Dmitry", message: 'Hey!'},
            {id: "3", author: "Sasha", message: 'Hey!'},
            {id: "4", author: "Sveta", message: 'Hey!'},
            {id: "5", author: "Valera", message: 'Hey!'},
            {id: "6", author: "Victor", message: 'Hey!'},
            {id: "7", author: "Igor", message: 'Hey!'},
            {id: "8", author: "Evgraf", message: 'Hey!'}
        ]
    },
    sidebar: {
        avatars: [
            {id: "1", friend: "Andrew", avatar: '/images/avatars/Andrew.svg'},
            {id: "2", friend: "Dmitry", avatar: '/images/avatars/Dmitry.svg'},
            {id: "3", friend: "Sasha", avatar: '/images/avatars/Sasha.svg'},
        ]
    }
}


export let addPost = (postMessage:string) => {
    let newPost:PostsType = {
        id:'5',
        message: postMessage,
        likeCount: 0
    }

state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let changeNewPostText = (textMessage:string) => {
    state.profilePage.newPostText = textMessage
    rerenderEntireTree(state);
}

export default state;
