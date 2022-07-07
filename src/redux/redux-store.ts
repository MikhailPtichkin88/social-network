import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer,
})

 let store = createStore(rootReducer);

export type ReduxStoreType = ReturnType<typeof rootReducer>


 export default store;

// @ts-ignore
window.store = store