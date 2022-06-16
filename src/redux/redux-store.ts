import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
})

 let store = createStore(reducers);
console.log(store.getState())
 export default store;