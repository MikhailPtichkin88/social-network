import {AppDispatch, AppThunk} from "./redux-store";
import {getMyData} from "./auth-reducer";


type InitialStateType = typeof initialState

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {...state, initialized: action.payload.isInitialized}
        default:
            return state
    }
}

type ActionType = SetInitializedACType

type SetInitializedACType = ReturnType<typeof SetInitializedAC>
const SetInitializedAC = (isInitialized: boolean) => {
    return {
        type: "SET-INITIALIZED",
        payload: {
            isInitialized
        }
    } as const
}

export const initializeApp = (): AppThunk => {
    return async (dispatch: AppDispatch) => {

     await   dispatch(getMyData())
            dispatch(SetInitializedAC(true))

    }
}