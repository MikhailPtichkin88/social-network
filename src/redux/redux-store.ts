import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import  thunkMiddleware  from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer,
    form:formReducer,
})

 let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type ReduxStoreType = ReturnType<typeof rootReducer>

export type AppActionsType = UsersActionType | ProfileActionType | DialogsActionType | AuthActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStoreType, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<ReduxStoreType, unknown, AppActionsType>

 export default store;

// @ts-ignore
window.store = store