import profileReducer, {addPostActionCreatorType, changePostActionCreatorType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
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

export type AddMsgActionType = {
    type: "ADD-MSG"
    message: string
}

export type ChangeMsgTextType = {
    type: "CHANGE-MSG-TEXT"
    textMessage: string
}

export type ActionsType = addPostActionCreatorType | changePostActionCreatorType | AddMsgActionType | ChangeMsgTextType


export type StoreType = {
    _state: RootStateType
    _rerender: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

const store: StoreType = {

    _state: {
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
            ],
            newMessageText: ""
        },
        sidebar: {
            avatars: [
                {id: "1", friend: "Andrew", avatar: '/images/avatars/Andrew.svg'},
                {id: "2", friend: "Dmitry", avatar: '/images/avatars/Dmitry.svg'},
                {id: "3", friend: "Sasha", avatar: '/images/avatars/Sasha.svg'},
            ]
        }
    },

    _rerender() {
        console.log('state changed')
    },

    subscribe(callback) {
        this._rerender = callback
    },

    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._rerender();

    }
}


//typeof




export default store;
