
const initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false,
}

export type AuthDataType = typeof initialState


export const authReducer = (state:AuthDataType = initialState, action:ActionType):AuthDataType =>{
    switch(action.type){
        case "SET-USER-DATA":
            return {...state, ...action.payload.data}
        // case "xxx":
        //     return state
        default:
            return state
    }
}

type ActionType = SetUserDataType

export type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data:AuthDataType)=>{
    return {
        type: 'SET-USER-DATA',
        payload:{
            data
        }
    }as const
}